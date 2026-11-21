const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const Database = require('better-sqlite3');
const db = new Database(path.join(__dirname, 'Base de datos.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS registros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    correo TEXT NOT NULL,
    problema TEXT,
    descripcion TEXT,
    fecha TEXT NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    correo TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    rol TEXT NOT NULL DEFAULT 'usuario',
    fecha_registro TEXT NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS sesiones (
    token TEXT PRIMARY KEY,
    usuario_id INTEGER NOT NULL,
    fecha_creacion TEXT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
  )
`);

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function crearHash(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = hashPassword(password, salt);
  return `${salt}:${hash}`;
}

function verificarPassword(password, almacenado) {
  const [salt, hash] = almacenado.split(':');
  const hashIngresado = hashPassword(password, salt);
  return hash === hashIngresado;
}

const adminExistente = db.prepare('SELECT id FROM usuarios WHERE correo = ?').get('admin@correo.com');
if (!adminExistente) {
  db.prepare(
    'INSERT INTO usuarios (nombre, correo, password_hash, rol, fecha_registro) VALUES (?, ?, ?, ?, ?)'
  ).run('Administrador', 'admin@correo.com', crearHash('admin123'), 'administrador', new Date().toISOString());
  console.log('Admin creado: admin@correo.com / admin123');
}

const insertar = db.prepare(
  'INSERT INTO registros (nombre, correo, problema, descripcion, fecha) VALUES (?, ?, ?, ?, ?)'
);

const listar = db.prepare(`
  SELECT
    nombre AS Nombre,
    correo AS Correo,
    problema AS Clase,
    descripcion AS Descripcion,
    fecha AS Fecha
  FROM registros
  ORDER BY id
`);

const crearUsuario = db.prepare(
  'INSERT INTO usuarios (nombre, correo, password_hash, rol, fecha_registro) VALUES (?, ?, ?, ?, ?)'
);

const buscarUsuarioPorCorreo = db.prepare('SELECT * FROM usuarios WHERE correo = ?');
const buscarUsuarioPorId = db.prepare('SELECT * FROM usuarios WHERE id = ?');

const crearSesion = db.prepare('INSERT INTO sesiones (token, usuario_id, fecha_creacion) VALUES (?, ?, ?)');
const buscarSesion = db.prepare('SELECT * FROM sesiones WHERE token = ?');
const eliminarSesion = db.prepare('DELETE FROM sesiones WHERE token = ?');

const tipos = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

function enviarHTML(res, nombreArchivo) {
  try {
    const contenido = fs.readFileSync(path.join(__dirname, nombreArchivo));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(contenido);
  } catch (error) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error al cargar la pagina.');
  }
}

function obtenerToken(req) {
  const cookie = req.headers.cookie || '';
  const match = cookie.match(/(?:^|;\s*)sesion=([^;]+)/);
  return match ? match[1] : null;
}

function obtenerUsuarioActual(req) {
  const token = obtenerToken(req);
  if (!token) return null;
  const sesion = buscarSesion.get(token);
  if (!sesion) return null;
  const usuario = buscarUsuarioPorId.get(sesion.usuario_id);
  if (!usuario) return null;
  return {
    id: usuario.id,
    nombre: usuario.nombre,
    correo: usuario.correo,
    rol: usuario.rol
  };
}

function leerCuerpo(req) {
  return new Promise((resolve, reject) => {
    let cuerpo = '';
    req.on('data', chunk => {
      cuerpo += chunk;
      if (cuerpo.length > 1000000) {
        req.destroy();
        reject(new Error('Body demasiado grande'));
      }
    });
    req.on('end', () => resolve(cuerpo));
    req.on('error', reject);
  });
}

function responderJSON(res, obj) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}

const servidor = http.createServer(async (req, res) => {

  const url = new URL(req.url, 'http://localhost:3000');
  const ruta = url.pathname;

  if (req.method === 'GET' && ruta === '/') {
    return enviarHTML(res, 'Wireframe.html');
  }

  if (req.method === 'GET' && ruta === '/dashboard') {
    const usuario = obtenerUsuarioActual(req);
    if (!usuario || usuario.rol !== 'administrador') {
      res.writeHead(303, { 'Location': '/?acceso=denegado' });
      return res.end();
    }
    return enviarHTML(res, 'Dashboard.html');
  }

  if (req.method === 'GET' && ruta === '/api/sesion') {
    const usuario = obtenerUsuarioActual(req);
    return responderJSON(res, { logueado: !!usuario, usuario });
  }

  if (req.method === 'POST' && ruta === '/api/registro') {
    try {
      const cuerpo = await leerCuerpo(req);
      const datos = new URLSearchParams(cuerpo);
      const nombre = (datos.get('nombre') || '').trim();
      const correo = (datos.get('correo') || '').trim().toLowerCase();
      const password = (datos.get('password') || '').trim();

      if (!nombre || !correo || !password) {
        return responderJSON(res, { ok: false, error: 'Todos los campos son obligatorios' });
      }
      if (password.length < 6) {
        return responderJSON(res, { ok: false, error: 'La contraseña debe tener al menos 6 caracteres' });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        return responderJSON(res, { ok: false, error: 'Correo inválido' });
      }
      if (buscarUsuarioPorCorreo.get(correo)) {
        return responderJSON(res, { ok: false, error: 'Este correo ya está registrado' });
      }

      const info = crearUsuario.run(nombre, correo, crearHash(password), 'usuario', new Date().toISOString());

      const token = crypto.randomBytes(32).toString('hex');
      crearSesion.run(token, info.lastInsertRowid, new Date().toISOString());

      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Set-Cookie': `sesion=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`
      });
      return res.end(JSON.stringify({
        ok: true,
        usuario: { id: info.lastInsertRowid, nombre, correo, rol: 'usuario' }
      }));
    } catch (e) {
      return responderJSON(res, { ok: false, error: 'Error al registrar' });
    }
  }

  if (req.method === 'POST' && ruta === '/api/login') {
    try {
      const cuerpo = await leerCuerpo(req);
      const datos = new URLSearchParams(cuerpo);
      const correo = (datos.get('correo') || '').trim().toLowerCase();
      const password = (datos.get('password') || '').trim();

      if (!correo || !password) {
        return responderJSON(res, { ok: false, error: 'Ingresa correo y contraseña' });
      }

      const usuario = buscarUsuarioPorCorreo.get(correo);
      if (!usuario || !verificarPassword(password, usuario.password_hash)) {
        return responderJSON(res, { ok: false, error: 'Correo o contraseña incorrectos' });
      }

      const token = crypto.randomBytes(32).toString('hex');
      crearSesion.run(token, usuario.id, new Date().toISOString());

      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Set-Cookie': `sesion=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`
      });
      return res.end(JSON.stringify({
        ok: true,
        usuario: { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol }
      }));
    } catch (e) {
      return responderJSON(res, { ok: false, error: 'Error al iniciar sesión' });
    }
  }

  if (req.method === 'POST' && ruta === '/api/logout') {
    const token = obtenerToken(req);
    if (token) eliminarSesion.run(token);
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Set-Cookie': 'sesion=; HttpOnly; Path=/; Max-Age=0'
    });
    return res.end(JSON.stringify({ ok: true }));
  }

  if (req.method === 'GET' && ruta === '/api/usuarios') {
    const usuario = obtenerUsuarioActual(req);
    if (!usuario || usuario.rol !== 'administrador') {
      return responderJSON(res, { ok: false, error: 'Acceso denegado' });
    }
    const usuarios = db.prepare(
      'SELECT id, nombre, correo, rol, fecha_registro FROM usuarios ORDER BY id'
    ).all();
    return responderJSON(res, { ok: true, usuarios });
  }

  if (req.method === 'GET' && ruta === '/datos') {
    const usuario = obtenerUsuarioActual(req);
    if (!usuario || usuario.rol !== 'administrador') {
      return responderJSON(res, { ok: false, error: 'Acceso denegado' });
    }
    try {
      const datos = listar.all();
      return responderJSON(res, { ok: true, datos });
    } catch (error) {
      return responderJSON(res, { ok: false, error: 'Error al consultar' });
    }
  }

  if (req.method === 'POST' && ruta === '/registrar') {
    const usuario = obtenerUsuarioActual(req);
    if (!usuario) {
      res.writeHead(303, { 'Location': '/#ayuda' });
      return res.end();
    }

    try {
      const cuerpo = await leerCuerpo(req);
      const datos = new URLSearchParams(cuerpo);
      const nombre = usuario.nombre;
      const correo = usuario.correo;
      const problema = (datos.get('Problema') || '').trim();
      const descripcion = (datos.get('Descripcion') || '').trim();

      insertar.run(nombre, correo, problema, descripcion, new Date().toISOString());
      res.writeHead(303, { 'Location': '/#ayuda' });
      return res.end();
    } catch (error) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Error al guardar.');
    }
  }

  if (req.method === 'GET') {
    const archivo = path.join(__dirname, decodeURIComponent(ruta).replace(/^\/+/, ''));
    if (
      !archivo.startsWith(__dirname + path.sep) ||
      !fs.existsSync(archivo) ||
      !fs.statSync(archivo).isFile()
    ) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 - Archivo no encontrado');
    }
    const extension = path.extname(archivo).toLowerCase();
    res.writeHead(200, { 'Content-Type': tipos[extension] || 'application/octet-stream' });
    return res.end(fs.readFileSync(archivo));
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 - No encontrado');
});

servidor.listen(3000, () => {
  console.log('Servidor con base de datos en http://localhost:3000');
});
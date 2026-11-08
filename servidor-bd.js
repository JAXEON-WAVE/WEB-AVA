const http = require('http');
const fs = require('fs');
const path = require('path');

// PASO 1: cargamos el conector de la base de datos.
const Database = require('better-sqlite3');

// PASO 2: nos conectamos a la base de datos.
const db = new Database(path.join(__dirname, 'Base de datos.db'));

// PASO 3: creamos la tabla si todavia no existe.
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

// PASO 4: preparamos las consultas.
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

// Tipos de archivo que el servidor sabe entregar (CSS, imagenes, videos).
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

// Funcion auxiliar para entregar una pagina HTML.
function enviarHTML(res, nombreArchivo) {
  try {
    const contenido = fs.readFileSync(path.join(__dirname, nombreArchivo));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(contenido);
  } catch (error) {
    console.error('Error al cargar ' + nombreArchivo + ':', error);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error al cargar la pagina.');
  }
}

const servidor = http.createServer((req, res) => {

  
  const ruta = new URL(req.url, 'http://localhost:3000').pathname;

  // Pagina principal
  if (req.method === 'GET' && ruta === '/') {
    enviarHTML(res, 'Wireframe.html');

  // Dashboard
  } else if (req.method === 'GET' && ruta === '/dashboard') {
    enviarHTML(res, 'Dashboard.html');

  // LEER los registros de la base de datos.
  } else if (req.method === 'GET' && ruta === '/datos') {
    try {
      const datos = listar.all();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(datos));
    } catch (error) {
      console.error('Error al consultar los registros:', error);
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Error al consultar la base de datos' }));
    }

  // GUARDAR un registro en la base de datos.
  } else if (req.method === 'POST' && ruta === '/registrar') {
    let cuerpo = '';

    req.on('data', chunk => {
      cuerpo += chunk;

      // Limite
      if (cuerpo.length > 1000000) {
        res.writeHead(413, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('El formulario es demasiado grande.');
        req.destroy();
      }
    });

    req.on('end', () => {
      if (res.writableEnded) return;

      try {
        const datos = new URLSearchParams(cuerpo);

        const nombre = (datos.get('Nombre') || datos.get('nombre') || '').trim();
        const correo = (datos.get('Correo') || datos.get('correo') || '').trim();
        const problema = (datos.get('Problema') || datos.get('problema') || '').trim();
        const descripcion = (datos.get('Descripcion') || datos.get('descripcion') || '').trim();

        if (!nombre || !correo) {
          res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('Debes ingresar el nombre y el correo.');
          return;
        }

        insertar.run(
          nombre,
          correo,
          problema,
          descripcion,
          new Date().toISOString()
        );

        // Redirigimos al usuario de vuelta a la seccion de ayuda.
        res.writeHead(303, { 'Location': '/#ayuda' });
        res.end();

      } catch (error) {
        console.error('Error al guardar el registro:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Error al guardar el registro.');
      }
    });

  // ARCHIVOS ESTATICOS
  } else if (req.method === 'GET') {
    const archivo = path.join(__dirname, decodeURIComponent(ruta).replace(/^\/+/, ''));

    // Seguridad: que el archivo este dentro de la carpeta del proyecto
    if (
      !archivo.startsWith(__dirname + path.sep) ||
      !fs.existsSync(archivo) ||
      !fs.statSync(archivo).isFile()
    ) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Archivo no encontrado');
      return;
    }

    const extension = path.extname(archivo).toLowerCase();
    res.writeHead(200, { 'Content-Type': tipos[extension] || 'application/octet-stream' });
    res.end(fs.readFileSync(archivo));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - No encontrado');
  }
});

servidor.listen(3000, () => {
  console.log('Servidor con base de datos en http://localhost:3000');
});
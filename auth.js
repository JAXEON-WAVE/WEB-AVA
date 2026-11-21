let usuarioActual = null;

const modalLogin = document.getElementById('modal-login');
const modalRegistro = document.getElementById('modal-registro');
const btnLogin = document.getElementById('btn-login');
const userInfo = document.getElementById('user-info');
const userNombre = document.getElementById('user-nombre');
const userRol = document.getElementById('user-rol');
const btnLogout = document.getElementById('btn-logout');

const formAyuda = document.getElementById('form');
const avisoLogin = document.getElementById('aviso-login');
const btnLoginAyuda = document.getElementById('btn-login-ayuda');

const alerta = document.getElementById('alerta-acceso');
const alertaTexto = document.getElementById('alerta-texto');
const alertaCerrar = document.getElementById('alerta-cerrar');
let alertaTimer = null;

function mostrarAlerta(mensaje, tipo) {
  if (!alerta || !alertaTexto) return;
  alertaTexto.textContent = mensaje;
  alerta.className = 'alerta-acceso ' + (tipo || 'error');
  alerta.style.display = 'flex';
  if (alertaTimer) clearTimeout(alertaTimer);
  alertaTimer = setTimeout(() => {
    alerta.style.display = 'none';
  }, 5000);
}

if (alertaCerrar) {
  alertaCerrar.addEventListener('click', () => {
    if (alertaTimer) clearTimeout(alertaTimer);
    alerta.style.display = 'none';
  });
}

function abrirModal(modal) {
  modal.style.display = 'flex';
}

function cerrarModales() {
  if (modalLogin) modalLogin.style.display = 'none';
  if (modalRegistro) modalRegistro.style.display = 'none';
}

document.querySelectorAll('[data-cerrar]').forEach(btn => {
  btn.addEventListener('click', cerrarModales);
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrarModales();
  });
});

document.getElementById('ir-a-registro').addEventListener('click', (e) => {
  e.preventDefault();
  modalLogin.style.display = 'none';
  modalRegistro.style.display = 'flex';
});

document.getElementById('ir-a-login').addEventListener('click', (e) => {
  e.preventDefault();
  modalRegistro.style.display = 'none';
  modalLogin.style.display = 'flex';
});

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  abrirModal(modalLogin);
});

if (btnLoginAyuda) {
  btnLoginAyuda.addEventListener('click', () => abrirModal(modalLogin));
}

function aplicarEstadoSesion(usuario) {
  usuarioActual = usuario;

  if (usuario) {
    btnLogin.style.display = 'none';
    userInfo.style.display = 'flex';
    userNombre.textContent = usuario.nombre;
    userRol.textContent = usuario.rol.toUpperCase();
    userRol.className = 'badge-rol ' + (usuario.rol === 'administrador' ? 'badge-admin' : 'badge-user');

    avisoLogin.style.display = 'none';
    formAyuda.style.display = 'block';

    document.getElementById('Nombre').value = usuario.nombre;
    document.getElementById('Correo').value = usuario.correo;

    const linkDash = document.querySelector('a[href="/dashboard"]');
    if (linkDash) {
      linkDash.style.display = usuario.rol === 'administrador' ? '' : 'none';
    }
  } else {
    btnLogin.style.display = '';
    userInfo.style.display = 'none';

    avisoLogin.style.display = 'block';
    formAyuda.style.display = 'none';

    const linkDash = document.querySelector('a[href="/dashboard"]');
    if (linkDash) linkDash.style.display = 'none';
  }
}

async function verificarSesion() {
  try {
    const resp = await fetch('/api/sesion', { credentials: 'same-origin' });
    const data = await resp.json();
    aplicarEstadoSesion(data.logueado ? data.usuario : null);
    return data;
  } catch (e) {
    aplicarEstadoSesion(null);
    return { logueado: false, usuario: null };
  }
}

document.getElementById('form-login').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const errorP = document.getElementById('login-error');
  errorP.textContent = '';

  const data = new URLSearchParams(new FormData(form));

  try {
    const resp = await fetch('/api/login', {
      method: 'POST',
      body: data,
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    const result = await resp.json();

    if (!result.ok) {
      errorP.textContent = result.error || 'Error al iniciar sesión';
      return;
    }

    cerrarModales();
    form.reset();
    aplicarEstadoSesion(result.usuario);
    mostrarAlerta('Sesión iniciada correctamente. ¡Bienvenido, ' + result.usuario.nombre + '!', 'exito');
  } catch (e) {
    errorP.textContent = 'Error de conexión';
  }
});

document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const errorP = document.getElementById('registro-error');
  errorP.textContent = '';

  const data = new URLSearchParams(new FormData(form));

  try {
    const resp = await fetch('/api/registro', {
      method: 'POST',
      body: data,
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    const result = await resp.json();

    if (!result.ok) {
      errorP.textContent = result.error || 'Error al registrarse';
      return;
    }

    cerrarModales();
    form.reset();
    aplicarEstadoSesion(result.usuario);
    mostrarAlerta('Cuenta creada correctamente. ¡Bienvenido, ' + result.usuario.nombre + '!', 'exito');
  } catch (e) {
    errorP.textContent = 'Error de conexión';
  }
});

btnLogout.addEventListener('click', async (e) => {
  e.preventDefault();
  await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' });
  aplicarEstadoSesion(null);
  mostrarAlerta('Sesión cerrada correctamente.', 'info');
});

const params = new URLSearchParams(window.location.search);
if (params.get('acceso') === 'denegado') {
  window.addEventListener('DOMContentLoaded', async () => {
    const data = await verificarSesion();
    if (data.logueado) {
      mostrarAlerta('Acceso denegado. Tu cuenta no tiene permisos de administrador para entrar al dashboard.', 'error');
    } else {
      mostrarAlerta('Acceso denegado. Debes iniciar sesión para entrar al dashboard.', 'error');
    }
  });
  window.history.replaceState({}, '', '/');
} else {
  verificarSesion();
}
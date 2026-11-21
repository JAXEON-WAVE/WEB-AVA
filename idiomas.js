/* ===== Cambio de idioma Español / English ===== */

const TRADUCCIONES = {
  es: {
    tituloPagina: 'Videojuego',
    inicio: 'Inicio', plataformas: 'Plataformas', multimedia: 'Multimedia',
    conoce: 'Conoce', noticias: 'Noticias', ayuda: 'Ayuda',
    login: 'Iniciar sesión', logout: 'Cerrar sesión',
    heroTitulo: 'Alliance of Valiant Arms',
    heroDesc: 'FPS táctico free-to-play donde la estrategia de equipo y la especialización de clase definen cada enfrentamiento. Elige entre Point Man, Rifle Man o Sniper y domina el campo de batalla en la guerra ficticia entre la EU y la NRF.',
    conoceJuego: 'Conoce el juego', verTrailer: 'Ver trailer',
    plataformasDisp: 'Plataformas disponibles',
    clasificacion: 'Sección de clasificación de edades',
    mecanicasTitulo: 'Mecánicas básicas del juego',
    mecanicasDesc: 'Descripción de las mecánicas',
    controles: 'Controles', combate: 'Combate', estrategia: 'Estrategia', progresion: 'Progresión',
    conoceMas: 'Conoce más', wiki: 'Wiki oficial', guias: 'Guías y consejos', otrosProyectos: 'Otros proyectos',
    noticiasTitulo: 'Noticias y actualizaciones', slider: 'Slider', verNoticias: 'Ver todas las noticias',
    centroAyuda: 'Centro de ayuda',
    avisoLogin: 'Debes iniciar sesión para enviar tu solicitud de ayuda.',
    loginRegistro: 'Iniciar sesión / Registrarme',
    lblNombreUsuario: 'Nombre del usuario:', lblCorreoUsuario: 'Correo del usuario:',
    lblTipoProblema: 'Tipo de problema:',
    optCuenta: 'Problema con la cuenta', optJuego: 'Problema con el juego',
    optConexion: 'Problema de conexión', optOtro: 'Otro',
    lblDescProblema: 'Descripción del problema:', enviar: 'Enviar',
    terminos: 'Términos y políticas de privacidad', sobreNosotros: 'Sobre nosotros', contactanos: 'Contáctanos',
    copyright: '© AeriaGames. Alliance of Valiant Arms. Todos los derechos reservados. Fanpage hecha por: Juan Diego Romero, Santiago Barrera y Andres Carvajal',
    /* Modales */
    lblNombre: 'Nombre:', lblCorreo: 'Correo:', lblPassword: 'Contraseña:',
    lblPasswordMin: 'Contraseña (mín. 6 caracteres):',
    entrar: 'Entrar', crearCuenta: 'Crear cuenta', registrarme: 'Registrarme',
    sinCuenta: '¿No tienes cuenta?', registrateAqui: 'Regístrate aquí',
    yaCuenta: '¿Ya tienes cuenta?', iniciaSesion: 'Inicia sesión',
    /* Mensajes dinámicos */
    loginOk: 'Sesión iniciada correctamente. ¡Bienvenido, {nombre}!',
    registroOk: 'Cuenta creada correctamente. ¡Bienvenido, {nombre}!',
    logoutOk: 'Sesión cerrada correctamente.',
    denegadoAdmin: 'Acceso denegado. Tu cuenta no tiene permisos de administrador para entrar al dashboard.',
    denegadoLogin: 'Acceso denegado. Debes iniciar sesión para entrar al dashboard.',
    errLogin: 'Error al iniciar sesión', errRegistro: 'Error al registrarse', errConexion: 'Error de conexión',
    rol_administrador: 'Administrador', rol_usuario: 'Usuario',
    /* Dashboard */
    panelControl: 'Panel de Control', totalSolicitudes: 'Total Solicitudes',
    problemaComun: 'Problema más común', servidor: 'Servidor', servidorActivo: '🟢 Activo',
    solicitudesTipo: 'Solicitudes por tipo', registros: 'Registros',
    buscar: '🔍 Buscar...', filtrar: 'Filtrar...',
    cuenta: 'Cuenta', juego: 'Juego', conexion: 'Conexión', otro: 'Otro',
    thNombre: 'Nombre', thCorreo: 'Correo', thTipo: 'Tipo', thDescripcion: 'Descripción', thFecha: 'Fecha',
    sinResultados: 'Sin resultados', mostrando: 'Mostrando', de: 'de', solicitudes: 'Solicitudes'
  },
  en: {
    tituloPagina: 'Video game',
    inicio: 'Home', plataformas: 'Platforms', multimedia: 'Multimedia',
    conoce: 'Discover', noticias: 'News', ayuda: 'Help',
    login: 'Log in', logout: 'Log out',
    heroTitulo: 'Alliance of Valiant Arms',
    heroDesc: 'Free-to-play tactical FPS where team strategy and class specialization define every engagement. Choose between Point Man, Rifle Man or Sniper and dominate the battlefield in the fictional war between the EU and the NRF.',
    conoceJuego: 'Discover the game', verTrailer: 'Watch trailer',
    plataformasDisp: 'Available platforms',
    clasificacion: 'Age rating section',
    mecanicasTitulo: 'Basic game mechanics',
    mecanicasDesc: 'Description of the mechanics',
    controles: 'Controls', combate: 'Combat', estrategia: 'Strategy', progresion: 'Progression',
    conoceMas: 'Learn more', wiki: 'Official wiki', guias: 'Guides and tips', otrosProyectos: 'Other projects',
    noticiasTitulo: 'News and updates', slider: 'Slider', verNoticias: 'View all news',
    centroAyuda: 'Help center',
    avisoLogin: 'You must log in to submit your help request.',
    loginRegistro: 'Log in / Sign up',
    lblNombreUsuario: 'User name:', lblCorreoUsuario: 'User email:',
    lblTipoProblema: 'Problem type:',
    optCuenta: 'Account problem', optJuego: 'Game problem',
    optConexion: 'Connection problem', optOtro: 'Other',
    lblDescProblema: 'Problem description:', enviar: 'Send',
    terminos: 'Terms and privacy policy', sobreNosotros: 'About us', contactanos: 'Contact us',
    copyright: '© AeriaGames. Alliance of Valiant Arms. All rights reserved. Fan page made by: Juan Diego Romero, Santiago Barrera and Andres Carvajal',
    /* Modales */
    lblNombre: 'Name:', lblCorreo: 'Email:', lblPassword: 'Password:',
    lblPasswordMin: 'Password (min. 6 characters):',
    entrar: 'Sign in', crearCuenta: 'Create account', registrarme: 'Sign up',
    sinCuenta: "Don't have an account?", registrateAqui: 'Sign up here',
    yaCuenta: 'Already have an account?', iniciaSesion: 'Log in',
    /* Mensajes dinámicos */
    loginOk: 'Logged in successfully. Welcome, {nombre}!',
    registroOk: 'Account created successfully. Welcome, {nombre}!',
    logoutOk: 'Logged out successfully.',
    denegadoAdmin: 'Access denied. Your account does not have administrator permissions to enter the dashboard.',
    denegadoLogin: 'Access denied. You must log in to enter the dashboard.',
    errLogin: 'Login error', errRegistro: 'Sign-up error', errConexion: 'Connection error',
    rol_administrador: 'Administrator', rol_usuario: 'User',
    /* Dashboard */
    panelControl: 'Control Panel', totalSolicitudes: 'Total Requests',
    problemaComun: 'Most common issue', servidor: 'Server', servidorActivo: '🟢 Active',
    solicitudesTipo: 'Requests by type', registros: 'Records',
    buscar: '🔍 Search...', filtrar: 'Filter...',
    cuenta: 'Account', juego: 'Game', conexion: 'Connection', otro: 'Other',
    thNombre: 'Name', thCorreo: 'Email', thTipo: 'Type', thDescripcion: 'Description', thFecha: 'Date',
    sinResultados: 'No results', mostrando: 'Showing', de: 'of', solicitudes: 'Requests'
  }
};

/* Mensajes de error que envía el servidor (vienen en español) */
const ERRORES_SERVIDOR = {
  'Todos los campos son obligatorios': 'All fields are required',
  'La contraseña debe tener al menos 6 caracteres': 'Password must be at least 6 characters long',
  'Correo inválido': 'Invalid email',
  'Este correo ya está registrado': 'This email is already registered',
  'Error al registrar': 'Sign-up error',
  'Ingresa correo y contraseña': 'Enter email and password',
  'Correo o contraseña incorrectos': 'Incorrect email or password',
  'Error al iniciar sesión': 'Login error'
};

let idiomaActual = 'es';
try {
  const guardado = localStorage.getItem('idioma');
  if (guardado === 'es' || guardado === 'en') idiomaActual = guardado;
} catch (e) {}

function t(clave, vars) {
  const dic = TRADUCCIONES[idiomaActual] || TRADUCCIONES.es;
  let texto = dic[clave] !== undefined ? dic[clave]
    : (TRADUCCIONES.es[clave] !== undefined ? TRADUCCIONES.es[clave] : clave);
  if (vars) {
    for (const k in vars) texto = texto.split('{' + k + '}').join(vars[k]);
  }
  return texto;
}

function traducirError(mensaje) {
  if (!mensaje) return mensaje;
  if (idiomaActual === 'en' && ERRORES_SERVIDOR[mensaje]) return ERRORES_SERVIDOR[mensaje];
  return mensaje;
}

function aplicarIdioma(lang, notificar) {
  if (lang !== 'es' && lang !== 'en') lang = 'es';
  idiomaActual = lang;
  try { localStorage.setItem('idioma', lang); } catch (e) {}

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-idioma]').forEach(btn => {
    btn.classList.toggle('activo', btn.dataset.idioma === lang);
  });

  if (notificar) {
    document.dispatchEvent(new CustomEvent('idioma-cambiado', { detail: lang }));
  }
}

document.querySelectorAll('[data-idioma]').forEach(btn => {
  btn.addEventListener('click', () => aplicarIdioma(btn.dataset.idioma, true));
});

aplicarIdioma(idiomaActual, false);

/* =====================================================
   SESIÓN (login, registro, logout)
   Solo se activa en páginas que tengan el modal de login
   (Wireframe.html); en el Dashboard no hace nada.
   ===================================================== */
(function () {
  if (!document.getElementById('modal-login')) return;

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
      userRol.textContent = t('rol_' + usuario.rol).toUpperCase();
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
        errorP.textContent = traducirError(result.error) || t('errLogin');
        return;
      }

      cerrarModales();
      form.reset();
      aplicarEstadoSesion(result.usuario);
      mostrarAlerta(t('loginOk', { nombre: result.usuario.nombre }), 'exito');
    } catch (e) {
      errorP.textContent = t('errConexion');
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
        errorP.textContent = traducirError(result.error) || t('errRegistro');
        return;
      }

      cerrarModales();
      form.reset();
      aplicarEstadoSesion(result.usuario);
      mostrarAlerta(t('registroOk', { nombre: result.usuario.nombre }), 'exito');
    } catch (e) {
      errorP.textContent = t('errConexion');
    }
  });

  btnLogout.addEventListener('click', async (e) => {
    e.preventDefault();
    await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' });
    aplicarEstadoSesion(null);
    mostrarAlerta(t('logoutOk'), 'info');
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('acceso') === 'denegado') {
    window.addEventListener('DOMContentLoaded', async () => {
      const data = await verificarSesion();
      if (data.logueado) {
        mostrarAlerta(t('denegadoAdmin'), 'error');
      } else {
        mostrarAlerta(t('denegadoLogin'), 'error');
      }
    });
    window.history.replaceState({}, '', '/');
  } else {
    verificarSesion();
  }

  document.addEventListener('idioma-cambiado', () => {
    aplicarEstadoSesion(usuarioActual);
  });
})();
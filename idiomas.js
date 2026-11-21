/* ===== Cambio de idioma Español / English ===== */

const TRADUCCIONES = {
  es: {
    tituloPagina: 'Alliance of Valiant Arms',
    inicio: 'Inicio', plataformas: 'Plataformas', multimedia: 'Multimedia',
    conoce: 'Conoce', noticias: 'Noticias', ayuda: 'Ayuda',
    login: 'Iniciar sesión', logout: 'Cerrar sesión',
    heroTitulo: 'Alliance of Valiant Arms',
    heroDesc: 'FPS táctico free-to-play. Elige entre Point Man, Rifle Man o Sniper y domina la guerra entre la EU y la NRF.',
    conoceJuego: 'Conoce el juego', verTrailer: 'Ver tráiler',
    plataformasDisp: 'Plataformas disponibles',
    clasificacion: 'Clasificación pendiente · Violencia fantasiosa · Compras dentro del juego',
    mecanicasTitulo: 'Mecánicas básicas del juego',
    trailer: 'Tráiler',
    controles: 'Controles', combate: 'Combate', estrategia: 'Estrategia', progresion: 'Progresión',
    conoceMas: 'Conoce más', wiki: 'Wiki oficial', guias: 'Guías y consejos', otrosProyectos: 'Otros proyectos',
    noticiasTitulo: 'Noticias y actualizaciones', verNoticias: 'Ver todas las noticias',
    centroAyuda: 'Centro de ayuda',
    avisoLogin: 'Inicia sesión para enviar tu solicitud de soporte técnico.',
    loginRegistro: 'Iniciar sesión / Registrarme',
    lblNombreUsuario: 'Nombre del usuario:', lblCorreoUsuario: 'Correo del usuario:',
    lblTipoProblema: 'Tipo de problema:',
    optCuenta: 'Problema con la cuenta', optJuego: 'Problema con el juego',
    optConexion: 'Problema de conexión', optOtro: 'Otro',
    lblDescProblema: 'Descripción del problema:', enviarSolicitud: 'Enviar solicitud',
    terminos: 'Términos y políticas de privacidad', sobreNosotros: 'Sobre nosotros', contactanos: 'Contáctanos',
    copyright: '© AeriaGames. Alliance of Valiant Arms. Todos los derechos reservados.',
    lblNombre: 'Nombre:', lblCorreo: 'Correo:', lblPassword: 'Contraseña:',
    lblPasswordMin: 'Contraseña (mín. 6 caracteres):',
    entrar: 'Entrar', crearCuenta: 'Crear cuenta', registrarme: 'Registrarme',
    sinCuenta: '¿No tienes cuenta?', registrateAqui: 'Regístrate aquí',
    yaCuenta: '¿Ya tienes cuenta?', iniciaSesion: 'Inicia sesión',
    loginOk: 'Bienvenido, {nombre}!', registroOk: 'Cuenta creada. Bienvenido, {nombre}!',
    logoutOk: 'Sesión cerrada.',
    denegadoAdmin: 'Acceso denegado. No tienes permisos de administrador.',
    denegadoLogin: 'Acceso denegado. Debes iniciar sesión.',
    errLogin: 'Error al iniciar sesión', errRegistro: 'Error al registrarse', errConexion: 'Error de conexión',
    rol_administrador: 'Administrador', rol_usuario: 'Usuario',
    panelControl: 'Panel de Control', totalSolicitudes: 'Total Solicitudes',
    problemaComun: 'Problema más común', servidor: 'Servidor', servidorActivo: '🟢 Activo',
    solicitudesTipo: 'Solicitudes por tipo', registros: 'Registros',
    buscar: '🔍 Buscar...', filtrar: 'Filtrar...',
    cuenta: 'Cuenta', juego: 'Juego', conexion: 'Conexión', otro: 'Otro',
    thNombre: 'Nombre', thCorreo: 'Correo', thTipo: 'Tipo', thDescripcion: 'Descripción', thFecha: 'Fecha',
    sinResultados: 'Sin resultados', mostrando: 'Mostrando', de: 'de', solicitudes: 'Solicitudes',
    dashboardTitulo: 'Dashboard A.V.A',
    dashboardHeroTitulo: 'Panel de Control',
    dashboardHeroDesc: 'Administra las solicitudes de soporte, revisa los usuarios registrados y analiza el estado del servidor en tiempo real.',
    solicitudesSoporte: 'Registros de soporte',
    usuariosRegistrados: 'Usuarios registrados',
    buscarRegistros: '🔍 Buscar por nombre, correo o descripción...',
    buscarUsuarios: '🔍 Buscar por nombre, correo o rol...',
    todasCategorias: 'Todas las categorías',
    todosRoles: 'Todos los roles',
    administrador: 'Administrador', usuario: 'Usuario',
    mostrandoRegistros: 'Mostrando {a} de {b} registros',
    mostrandoUsuarios: 'Mostrando {a} de {b} usuarios',
    sinUsuarios: 'Sin usuarios',
    thId: 'ID', thRol: 'Rol', thFechaRegistro: 'Fecha registro',
    dashboard: 'Dashboard',
    noticiasPaginaTitulo: 'Noticias y actualizaciones',
    noticiasPaginaDesc: 'Todas las novedades, parches, eventos y comunicados oficiales de Alliance of Valiant Arms en un solo lugar.',
    noticiasEtiqueta: 'Sala de prensa',
    categoriaActualizacion: 'Actualización',
    categoriaEvento: 'Evento',
    categoriaSeguridad: 'Seguridad',
    categoriaComunidad: 'Comunidad',
    todas: 'Todas',
    leerMas: 'Leer noticia completa',
    leerMasCorto: 'Leer más →',
    sinNoticias: 'No hay noticias en esta categoría por el momento.',
    paginaXdeY: 'Página {a} de {b}',
    pagina1de1: 'Página 1 de 1',
    volverInicio: 'Volver al inicio',
    fechaDestacada: '21 de noviembre de 2026 · 5 min de lectura',
    destacadaTitulo: 'Parche 3.4 "Operación Tormenta": nuevo mapa, armas y ajustes de balance',
    destacadaDesc: 'La mayor actualización del año llega con el mapa inédito "Puerto Norte", tres armas nuevas, sistema de rangos renovado y una reestructuración completa del matchmaking competitivo.',
    n1Titulo: 'Nuevo sistema antitrampas: resultados de la primera semana',
    n1Desc: 'Más de 12.000 cuentas suspendidas y un 78 % de reducción en reportes por uso de software ilegal.',
    n2Titulo: '"Invierno de acero": evento de temporada con recompensas exclusivas',
    n2Desc: 'Completa misiones diarias durante todo diciembre y desbloquea skins navideñas, emblemas y un arma legendaria.',
    n3Titulo: 'Torneo comunitario A.V.A Masters: inscripciones abiertas',
    n3Desc: 'Premios de hasta 10.000 USD, transmisión oficial en vivo y clasificación directa al campeonato mundial.',
    n4Titulo: 'Primer vistazo al mapa "Puerto Norte"',
    n4Desc: 'Un entorno industrial costero diseñado para partidas 5v5 con múltiples rutas y coberturas dinámicas.',
    n5Titulo: 'Aviso importante: intentos de phishing en correos falsos',
    n5Desc: 'Detectamos campañas fraudulentas que suplantan al equipo oficial. Aprende a identificar los mensajes legítimos.',
    n6Titulo: 'Fin de semana de doble experiencia y monedas',
    n6Desc: 'Del 1 al 3 de noviembre, todas las partidas otorgan el doble de XP y créditos en cualquier modo de juego.',
    servidorActivoReal: 'Activo',
    servidorInactivo: 'Inactivo',
    servidorComprobando: 'Comprobando…',
    armas: 'Armas',
    armasPaginaTitulo: 'Armas y clases',
    armasPaginaDesc: 'Conoce las tres clases de combate de Alliance of Valiant Arms y el arsenal disponible para cada una.',
    clasePointman: 'Point Man',
    claseRifleman: 'Rifle Man',
    claseSniper: 'Sniper',
    etiquetaAsalto: 'Asalto',
    etiquetaTactico: 'Táctico',
    etiquetaFrancotirador: 'Francotirador',
    pointmanDesc: 'Especialista en combate a corta distancia. Rápido, agresivo y letal en interiores. Su función es abrir brecha, presionar al enemigo y controlar los puntos de captura.',
    riflemanDesc: 'El equilibrio perfecto entre potencia y control. Controla media distancia con ráfagas precisas y gran capacidad de fuego sostenido.',
    sniperDesc: 'Precisión letal a larga distancia. Su función es eliminar objetivos clave, cubrir líneas de visión y controlar el flujo del combate desde la distancia.',
    statMovilidad: 'Movilidad:',
    statCadencia: 'Cadencia:',
    statPrecision: 'Precisión:',
    statAlcance: 'Alcance:',
    tipoSMG: 'Subfusil',
    tipoEscopeta: 'Escopeta',
    tipoFusil: 'Fusil de asalto',
    tipoAmetralladora: 'Ametralladora',
    tipoFrancotirador: 'Francotirador',
    tipoSemiauto: 'Semiautomático',
    specDano: 'Daño',
    specCadencia: 'Cadencia',
    specPrecision: 'Precisión',
    specCargador: 'Cargador',
    mp5Desc: 'Subfusil versátil, controlable y con buen daño en corto alcance.',
    p90Desc: 'Alta cadencia y cargador de 50 balas, ideal para presión constante.',
    spasDesc: 'Devastadora a corta distancia, letal en pasillos y esquinas.',
    akDesc: 'Alto daño por disparo, requiere control de retroceso para dominarla.',
    m4Desc: 'Precisión superior, retroceso controlado y versatilidad total.',
    m249Desc: 'Fuego sostenido y supresión. Perfecta para cubrir objetivos.',
    awmDesc: 'Daño de un solo disparo. El arma de referencia para los francotiradores.',
    m24Desc: 'Ligero y ágil. Excelente para posiciones rápidas y cambios de objetivo.',
    svdDesc: 'Disparos rápidos y precisos. Menos daño pero mayor control de zona.'
  },
  en: {
    tituloPagina: 'Alliance of Valiant Arms',
    inicio: 'Home', plataformas: 'Platforms', multimedia: 'Media',
    conoce: 'Discover', noticias: 'News', ayuda: 'Help',
    login: 'Log in', logout: 'Log out',
    heroTitulo: 'Alliance of Valiant Arms',
    heroDesc: 'Free-to-play tactical FPS. Choose Point Man, Rifle Man or Sniper and dominate the war between the EU and the NRF.',
    conoceJuego: 'Discover the game', verTrailer: 'Watch trailer',
    plataformasDisp: 'Available platforms',
    clasificacion: 'Rating pending · Fantasy violence · In-game purchases',
    mecanicasTitulo: 'Basic game mechanics',
    trailer: 'Trailer',
    controles: 'Controls', combate: 'Combat', estrategia: 'Strategy', progresion: 'Progression',
    conoceMas: 'Learn more', wiki: 'Official wiki', guias: 'Guides and tips', otrosProyectos: 'Other projects',
    noticiasTitulo: 'News and updates', verNoticias: 'View all news',
    centroAyuda: 'Help center',
    avisoLogin: 'Log in to submit your technical support request.',
    loginRegistro: 'Log in / Sign up',
    lblNombreUsuario: 'User name:', lblCorreoUsuario: 'User email:',
    lblTipoProblema: 'Problem type:',
    optCuenta: 'Account problem', optJuego: 'Game problem',
    optConexion: 'Connection problem', optOtro: 'Other',
    lblDescProblema: 'Problem description:', enviarSolicitud: 'Send request',
    terminos: 'Terms and privacy policy', sobreNosotros: 'About us', contactanos: 'Contact us',
    copyright: '© AeriaGames. Alliance of Valiant Arms. All rights reserved.',
    lblNombre: 'Name:', lblCorreo: 'Email:', lblPassword: 'Password:',
    lblPasswordMin: 'Password (min. 6 characters):',
    entrar: 'Sign in', crearCuenta: 'Create account', registrarme: 'Sign up',
    sinCuenta: "Don't have an account?", registrateAqui: 'Sign up here',
    yaCuenta: 'Already have an account?', iniciaSesion: 'Log in',
    loginOk: 'Welcome, {nombre}!', registroOk: 'Account created. Welcome, {nombre}!',
    logoutOk: 'Logged out.',
    denegadoAdmin: 'Access denied. You do not have administrator permissions.',
    denegadoLogin: 'Access denied. You must log in.',
    errLogin: 'Login error', errRegistro: 'Sign-up error', errConexion: 'Connection error',
    rol_administrador: 'Administrator', rol_usuario: 'User',
    panelControl: 'Control Panel', totalSolicitudes: 'Total Requests',
    problemaComun: 'Most common issue', servidor: 'Server', servidorActivo: '🟢 Active',
    solicitudesTipo: 'Requests by type', registros: 'Records',
    buscar: '🔍 Search...', filtrar: 'Filter...',
    cuenta: 'Account', juego: 'Game', conexion: 'Connection', otro: 'Other',
    thNombre: 'Name', thCorreo: 'Email', thTipo: 'Type', thDescripcion: 'Description', thFecha: 'Date',
    sinResultados: 'No results', mostrando: 'Showing', de: 'of', solicitudes: 'Requests',
    dashboardTitulo: 'A.V.A Dashboard',
    dashboardHeroTitulo: 'Control Panel',
    dashboardHeroDesc: 'Manage support requests, review registered users and analyze the server status in real time.',
    solicitudesSoporte: 'Support records',
    usuariosRegistrados: 'Registered users',
    buscarRegistros: '🔍 Search by name, email or description...',
    buscarUsuarios: '🔍 Search by name, email or role...',
    todasCategorias: 'All categories',
    todosRoles: 'All roles',
    administrador: 'Administrator', usuario: 'User',
    mostrandoRegistros: 'Showing {a} of {b} records',
    mostrandoUsuarios: 'Showing {a} of {b} users',
    sinUsuarios: 'No users',
    thId: 'ID', thRol: 'Role', thFechaRegistro: 'Registration date',
    dashboard: 'Dashboard',
    noticiasPaginaTitulo: 'News and updates',
    noticiasPaginaDesc: 'All the latest news, patches, events and official announcements from Alliance of Valiant Arms in one place.',
    noticiasEtiqueta: 'Press room',
    categoriaActualizacion: 'Update',
    categoriaEvento: 'Event',
    categoriaSeguridad: 'Security',
    categoriaComunidad: 'Community',
    todas: 'All',
    leerMas: 'Read full article',
    leerMasCorto: 'Read more →',
    sinNoticias: 'No news in this category yet.',
    paginaXdeY: 'Page {a} of {b}',
    pagina1de1: 'Page 1 of 1',
    volverInicio: 'Back to home',
    fechaDestacada: 'November 21, 2026 · 5 min read',
    destacadaTitulo: 'Patch 3.4 "Operation Storm": new map, weapons and balance changes',
    destacadaDesc: "The biggest update of the year arrives with the brand-new map 'North Harbor', three new weapons, a renewed rank system and a complete rework of competitive matchmaking.",
    n1Titulo: 'New anti-cheat system: first week results',
    n1Desc: 'Over 12,000 accounts suspended and a 78% reduction in reports for illegal software use.',
    n2Titulo: '"Steel Winter": seasonal event with exclusive rewards',
    n2Desc: 'Complete daily missions throughout December and unlock Christmas skins, emblems and a legendary weapon.',
    n3Titulo: 'A.V.A Masters community tournament: registration open',
    n3Desc: 'Prizes up to $10,000 USD, official live stream and direct qualification to the world championship.',
    n4Titulo: 'First look at the "North Harbor" map',
    n4Desc: 'A coastal industrial environment designed for 5v5 matches with multiple routes and dynamic cover.',
    n5Titulo: 'Important notice: phishing attempts in fake emails',
    n5Desc: 'We detected fraudulent campaigns impersonating the official team. Learn how to identify legitimate messages.',
    n6Titulo: 'Double XP and coins weekend',
    n6Desc: 'From November 1 to 3, all matches award double XP and credits in any game mode.',
    servidorActivoReal: 'Active',
    servidorInactivo: 'Inactive',
    servidorComprobando: 'Checking…',
    armas: 'Weapons',
    armasPaginaTitulo: 'Weapons and classes',
    armasPaginaDesc: 'Discover the three combat classes of Alliance of Valiant Arms and the arsenal available for each one.',
    clasePointman: 'Point Man',
    claseRifleman: 'Rifle Man',
    claseSniper: 'Sniper',
    etiquetaAsalto: 'Assault',
    etiquetaTactico: 'Tactical',
    etiquetaFrancotirador: 'Sniper',
    pointmanDesc: 'Close-quarters specialist. Fast, aggressive and lethal indoors. Its role is to breach, pressure the enemy and control capture points.',
    riflemanDesc: 'The perfect balance between power and control. Dominates mid-range with precise bursts and sustained fire capability.',
    sniperDesc: 'Lethal precision at long range. Its role is to eliminate key targets, cover sightlines and control the flow of combat from a distance.',
    statMovilidad: 'Mobility:',
    statCadencia: 'Fire rate:',
    statPrecision: 'Accuracy:',
    statAlcance: 'Range:',
    tipoSMG: 'SMG',
    tipoEscopeta: 'Shotgun',
    tipoFusil: 'Assault rifle',
    tipoAmetralladora: 'Machine gun',
    tipoFrancotirador: 'Sniper rifle',
    tipoSemiauto: 'Semi-auto',
    specDano: 'Damage',
    specCadencia: 'Fire rate',
    specPrecision: 'Accuracy',
    specCargador: 'Magazine',
    mp5Desc: 'Versatile and controllable SMG with good close-range damage.',
    p90Desc: 'High fire rate and 50-round magazine, ideal for constant pressure.',
    spasDesc: 'Devastating at close range, lethal in hallways and corners.',
    akDesc: 'High damage per shot, requires recoil control to master.',
    m4Desc: 'Superior accuracy, controlled recoil and full versatility.',
    m249Desc: 'Sustained fire and suppression. Perfect for covering objectives.',
    awmDesc: 'One-shot kill damage. The reference weapon for snipers.',
    m24Desc: 'Light and agile. Excellent for quick positions and target switching.',
    svdDesc: 'Fast and accurate shots. Less damage but greater zone control.'
  }
};

const ERRORES_SERVIDOR = {
  'Todos los campos son obligatorios': 'All fields are required',
  'La contraseña debe tener al menos 6 caracteres': 'Password must be at least 6 characters',
  'Correo inválido': 'Invalid email',
  'Este correo ya está registrado': 'Email already registered',
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

/* ===== SESIÓN ===== */
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

      if (avisoLogin) avisoLogin.style.display = 'none';
      if (formAyuda) formAyuda.style.display = 'block';

      const campoNombre = document.getElementById('Nombre');
      const campoCorreo = document.getElementById('Correo');
      if (campoNombre) campoNombre.value = usuario.nombre;
      if (campoCorreo) campoCorreo.value = usuario.correo;

      const linkDash = document.getElementById('link-dashboard');
      if (linkDash) {
        linkDash.style.display = usuario.rol === 'administrador' ? '' : 'none';
      }
    } else {
      btnLogin.style.display = '';
      userInfo.style.display = 'none';

      if (avisoLogin) avisoLogin.style.display = 'block';
      if (formAyuda) formAyuda.style.display = 'none';

      const linkDash = document.getElementById('link-dashboard');
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
      mostrarAlerta(t(data.logueado ? 'denegadoAdmin' : 'denegadoLogin'), 'error');
    });
    window.history.replaceState({}, '', '/');
  } else {
    verificarSesion();
  }

  document.addEventListener('idioma-cambiado', () => {
    aplicarEstadoSesion(usuarioActual);
  });
})();

/* ===== DASHBOARD ===== */
(function () {
  const app = document.getElementById('app');
  if (!app) return;
  if (document.getElementById('modal-login')) return;

  document.addEventListener('idioma-cambiado', () => {
    if (window.actualizarTraduccionesDashboard) {
      window.actualizarTraduccionesDashboard();
    }
  });
})();
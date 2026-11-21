(function () {
  const track = document.getElementById('carrusel-track');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  if (!track || !btnPrev || !btnNext) return;

  let indice = 0;
  let tarjetasOriginales = 0;
  let anchoTarjeta = 0;
  let gap = 0;
  let autoplayTimer = null;
  let animando = false;

  function calcularDimensiones() {
    const primera = track.querySelector('.tarjeta-noticia');
    if (!primera) return;
    const estilo = getComputedStyle(track);
    gap = parseFloat(estilo.gap) || 15;
    anchoTarjeta = primera.offsetWidth;
  }

  function tarjetasVisibles() {
    const viewport = track.parentElement;
    if (!viewport) return 1;
    const anchoViewport = viewport.offsetWidth;
    return Math.max(1, Math.floor((anchoViewport + gap) / (anchoTarjeta + gap)));
  }

  function mover(sinTransicion) {
    if (sinTransicion) track.style.transition = 'none';
    const desplazamiento = indice * (anchoTarjeta + gap);
    track.style.transform = 'translateX(-' + desplazamiento + 'px)';
    if (sinTransicion) {
      void track.offsetWidth;
      track.style.transition = '';
    }
  }

  function clonarTarjetas() {
    const originales = Array.from(track.querySelectorAll('.tarjeta-noticia'));
    tarjetasOriginales = originales.length;
    if (tarjetasOriginales === 0) return;

    const visibles = tarjetasVisibles();
    const cantidadClonar = Math.min(visibles + 1, tarjetasOriginales);

    const clonesInicio = originales
      .slice(-cantidadClonar)
      .map(t => {
        const clon = t.cloneNode(true);
        clon.setAttribute('data-clon', 'inicio');
        return clon;
      });

    const clonesFin = originales
      .slice(0, cantidadClonar)
      .map(t => {
        const clon = t.cloneNode(true);
        clon.setAttribute('data-clon', 'fin');
        return clon;
      });

    clonesInicio.forEach(c => track.insertBefore(c, track.firstChild));
    clonesFin.forEach(c => track.appendChild(c));

    indice = cantidadClonar;
    mover(true);
  }

  function siguiente() {
    if (animando) return;
    animando = true;
    indice++;
    mover();

    track.addEventListener('transitionend', function onEnd() {
      track.removeEventListener('transitionend', onEnd);
      animando = false;
      const visibles = tarjetasVisibles();
      const limiteFin = tarjetasOriginales + Math.min(visibles + 1, tarjetasOriginales);
      if (indice >= limiteFin) {
        const cantidadClonar = Math.min(visibles + 1, tarjetasOriginales);
        indice = indice - tarjetasOriginales;
        mover(true);
      }
    });
  }

  function anterior() {
    if (animando) return;
    animando = true;
    indice--;
    mover();

    track.addEventListener('transitionend', function onEnd() {
      track.removeEventListener('transitionend', onEnd);
      animando = false;
      if (indice <= 0) {
        const visibles = tarjetasVisibles();
        const cantidadClonar = Math.min(visibles + 1, tarjetasOriginales);
        indice = tarjetasOriginales + cantidadClonar - Math.min(visibles, tarjetasOriginales);
        if (indice <= 0) indice = tarjetasOriginales;
        mover(true);
      }
    });
  }

  function iniciarAutoplay() {
    detenerAutoplay();
    autoplayTimer = setInterval(siguiente, 4000);
  }

  function detenerAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  btnNext.addEventListener('click', () => {
    siguiente();
    iniciarAutoplay();
  });

  btnPrev.addEventListener('click', () => {
    anterior();
    iniciarAutoplay();
  });

  track.addEventListener('mouseenter', detenerAutoplay);
  track.addEventListener('mouseleave', iniciarAutoplay);

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      reiniciar();
    }, 200);
  });

  function reiniciar() {
    detenerAutoplay();
    track.style.transition = 'none';
    track.innerHTML = '';

    const originales = window.__tarjetasOriginalesAVA;
    if (originales && originales.length) {
      originales.forEach(t => track.appendChild(t.cloneNode(true)));
    }

    calcularDimensiones();
    clonarTarjetas();
    setTimeout(() => {
      track.style.transition = '';
    }, 50);
    iniciarAutoplay();
  }

  function guardarOriginales() {
    window.__tarjetasOriginalesAVA = Array.from(track.children).map(t => t.cloneNode(true));
  }

  window.addEventListener('load', () => {
    guardarOriginales();
    calcularDimensiones();
    clonarTarjetas();
    iniciarAutoplay();
  });
})();
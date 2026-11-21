(function () {
  const video = document.getElementById('video-mecanicas');
  const botones = document.querySelectorAll('.btn-mecanica');
  if (!video || botones.length === 0) return;

  const source = video.querySelector('source');

  botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();

      botones.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');

      const nuevoSrc = boton.getAttribute('data-video');
      const nuevoPoster = boton.getAttribute('data-poster');

      video.pause();
      video.currentTime = 0;

      if (nuevoPoster) {
        video.setAttribute('poster', nuevoPoster);
      }

      if (nuevoSrc && source.getAttribute('src') !== nuevoSrc) {
        source.setAttribute('src', nuevoSrc);
        video.load();
        video.addEventListener('loadedmetadata', function onMeta() {
          video.removeEventListener('loadedmetadata', onMeta);
          if (video.duration && isFinite(video.duration)) {
            console.log('Duración del video:', video.duration.toFixed(2), 'segundos');
          }
        });
      }
    });
  });
})();
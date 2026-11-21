/* ===== Cambio de clase (Point Man / Rifle Man / Sniper) ===== */

(function () {
  const tabs = document.querySelectorAll('.btn-filtro[data-clase]');
  const paneles = document.querySelectorAll('.clase-panel');
  if (!tabs.length || !paneles.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('activo'));
      tab.classList.add('activo');

      const clase = tab.dataset.clase;

      paneles.forEach(p => {
        p.classList.toggle('activo', p.dataset.panel === clase);
      });
    });
  });
})();
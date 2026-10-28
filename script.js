const capaPared = document.getElementById('perkins');
const haloLinterna = document.getElementById('linterna');

if (capaPared) {
  // literns
  capaPared.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    capaPared.style.setProperty('--x', `${x}px`);
    capaPared.style.setProperty('--y', `${y}px`);

    if (haloLinterna) {
      haloLinterna.style.left = `${x}px`;
      haloLinterna.style.top = `${y}px`;
    }
  });

  // Salir con clic en cualquier parte de la pantalla
  capaPared.addEventListener('click', (e) => {
    window.location.hash = '';
  });
}

// Salir al presionar la tecla Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.location.hash = '';
  }
});

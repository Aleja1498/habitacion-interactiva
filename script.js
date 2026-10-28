
// 1. Efecto pared (CHARLOTTE PERKINS GILMAN)

const capaPared = document.getElementById('perkins');
const haloLinterna = document.getElementById('linterna');

if (capaPared) {
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

  capaPared.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
      window.location.hash = '';
    }
  });
}


// 2. cama y caída al suelo Woolf

const frasesWoolf = [
  "cuán tremenda es la alteración espiritual",
  "Monstruo corpóreo",
  "Desertores",
  "aguas de la aniquilación cerrarse sobre nuestras cabezas",
  "el cuerpo interviene; se despunta o se afila",
  "el cuerpo no es más que una lámina de liso cristal",
  "Razón en suspenso",
  "divinamente hermosa, divinamente cruel",
  "solo quienes yacen recostados saben",
  "Indiferencia del cielo",
  "no conocemos nuestras propias almas"
];

const capaCama = document.getElementById('woolf');
const contenedorLluvia = document.getElementById('lluviaWoolf');

function generarCaidaFrases() {
  if (!contenedorLluvia) return;
  contenedorLluvia.innerHTML = '';

  frasesWoolf.forEach((frase, index) => {
    setTimeout(() => {
      let span = document.createElement('span');
      span.className = 'frase-caida';
      span.innerText = frase;

      // Distribución sobre el piso de madera (parte inferior)
      let posX = (index % 3) * 28 + Math.random() * 10 + 4; // Distribución en 3 columnas
      let posY = 70 + Math.floor(index / 3) * 6 + Math.random() * 3; // Escalón vertical en el suelo (70vh a 92vh)
      let rotacion = Math.random() * 10 - 5; // Inclinación suave (-5deg a +5deg)

      span.style.left = `${posX}vw`;
      span.style.setProperty('--destino-y', `${posY}vh`);
      span.style.transform = `rotate(${rotacion}deg)`;

      contenedorLluvia.appendChild(span);
    }, index * 180);
  });
}

// Escuchar cambios 
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#woolf') {
    generarCaidaFrases();
  }
});

if (window.location.hash === '#woolf') {
  generarCaidaFrases();
}

if (capaCama) {
  capaCama.addEventListener('click', (e) => {
    // Si hace clic sobre una frase o en el fondo, no cierra
    if (e.target.classList.contains('frase-caida')) {
      e.stopPropagation();
      return;
    }
    if (e.target.tagName !== 'A') {
      window.location.hash = '';
    }
  });
}



// 3. TECLA GLOBAL
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.location.hash = '';
  }
});

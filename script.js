
// 1. EFECTO PARED (CHARLOTTE PERKINS GILMAN)

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

// 2. CAMA Y CAÍDA AL SUELO (VIRGINIA WOOLF)

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

      // Distribución sobre el piso de madera
      let posX = (index % 3) * 28 + Math.random() * 10 + 4; 
      let posY = 70 + Math.floor(index / 3) * 6 + Math.random() * 3; 
      let rotacion = Math.random() * 10 - 5; 

      span.style.left = `${posX}vw`;
      span.style.setProperty('--destino-y', `${posY}vh`);
      span.style.transform = `rotate(${rotacion}deg)`;

      contenedorLluvia.appendChild(span);
    }, index * 180);
  });
}

// Escuchar cambios de Hash
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


// 3. TECLA ESCAPE
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.location.hash = '';
  }
});

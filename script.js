// ========================================================
// 1. EFECTO PARED (CHARLOTTE PERKINS GILMAN)
// ========================================================
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


// ========================================================
// 2. CAMA Y CAÍDA EN EL SUELO (VIRGINIA WOOLF)
// ========================================================
const frasesWoolf = [
  { texto: "cuán tremenda es la alteración espiritual", estilo: "pesada" },
  { texto: "Monstruo corpóreo", estilo: "gigante" },
  { texto: "Desertores", estilo: "gigante" },
  { texto: "aguas de la aniquilación cerrarse sobre nuestras cabezas", estilo: "normal" },
  { texto: "el cuerpo interviene; se despunta o se afila", estilo: "pesada" },
  { texto: "el cuerpo no es más que una lámina de liso cristal", estilo: "normal" },
  { texto: "Razón en suspenso", estilo: "gigante" },
  { texto: "divinamente hermosa, divinamente cruel", estilo: "pesada" },
  { texto: "solo quienes yacen recostados saben", estilo: "pesada" },
  { texto: "Indiferencia del cielo", estilo: "normal" },
  { texto: "no conocemos nuestras propias almas", estilo: "pesada" }
];

const capaCama = document.getElementById('woolf');
const contenedorLluvia = document.getElementById('lluviaWoolf');

function generarCaidaFrases() {
  if (!contenedorLluvia) return;
  contenedorLluvia.innerHTML = '';

  frasesWoolf.forEach((item, index) => {
    setTimeout(() => {
      let span = document.createElement('span');
      span.className = `frase-caida ${item.estilo}`;
      span.innerText = item.texto;

      // Caída al piso de madera a la izquierda de la cama
      let posX = Math.random() * 45 + 5; // De 5vw a 50vw
      let posY = 72 + Math.random() * 18; // De 72vh a 90vh (piso)
      let rotacion = Math.random() * 12 - 6;

      span.style.left = `${posX}vw`;
      span.style.setProperty('--destino-y', `${posY}vh`);
      span.style.transform = `rotate(${rotacion}deg)`;

      contenedorLluvia.appendChild(span);
    }, index * 140);
  });
}

// Ejecución al cambiar hash
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#woolf') {
    generarCaidaFrases();
  }
});

// Ejecución inicial si ya está en #woolf
if (window.location.hash === '#woolf') {
  generarCaidaFrases();
}

if (capaCama) {
  capaCama.addEventListener('click', (e) => {
    if (e.target.classList.contains('frase-caida')) {
      e.stopPropagation();
      return;
    }
    if (e.target.tagName !== 'A') {
      window.location.hash = '';
    }
  });
}


// ========================================================
// 3. TECLA ESCAPE GLOBAL
// ========================================================
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.location.hash = '';
  }
});

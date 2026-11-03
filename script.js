
 1. EFECTO PARED (CHARLOTTE PERKINS GILMAN)

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



 2. CAMA Y CAÍDA DE FRASES PESADAS (VIRGINIA WOOLF)

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

      // Amontonamiento denso en el suelo bajo y al pie de la cama (de 10vw a 70vw)
      let posX = Math.random() * 55 + 10; 
      let posY = 72 + Math.random() * 20; // Se amontonan en la franja del piso (72vh a 92vh)
      let rotacion = Math.random() * 14 - 7; // Inclinaciones de -7deg a +7deg

      span.style.left = `${posX}vw`;
      span.style.setProperty('--destino-y', `${posY}vh`);
      span.style.transform = `rotate(${rotacion}deg)`;

      contenedorLluvia.appendChild(span);
    }, index * 160);
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
    if (e.target.classList.contains('frase-caida')) {
      e.stopPropagation();
      return;
    }
    if (e.target.tagName !== 'A') {
      window.location.hash = '';
    }
  });
}



3. TECLA ESCAPE GLOBAL
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.location.hash = '';
  }
});

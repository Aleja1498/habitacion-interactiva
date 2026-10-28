
// 1.  La pared C.P.G

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

  capaPared.addEventListener('click', () => {
    window.location.hash = '';
  });
}


 
// 2. función de la cama y la lluvia

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
let lluviaGenerada = false;

function generarCaidaFrases() {
  if (!contenedorLluvia || lluviaGenerada) return;
  contenedorLluvia.innerHTML = '';

  frasesWoolf.forEach((frase, index) => {
    setTimeout(() => {
      let span = document.createElement('span');
      span.className = 'frase-caida';
      span.innerText = frase;

      // Coordenadas para el piso de madera
      let posX = Math.random() * 80 + 5; // Entre 5% y 85% del ancho del piso
      let posY = Math.random() * 20 + 72; // Entre 72vh y 92vh (zona del suelo)
      let rotacion = Math.random() * 12 - 6; // Pequeña inclinación de -6deg a +6deg

      span.style.left = `${posX}vw`;
      span.style.setProperty('--destino-y', `${posY}vh`);
      span.style.transform = `rotate(${rotacion}deg)`;

      contenedorLluvia.appendChild(span);
    }, index * 220); // cae en cascadita cada 220ms
  });

  lluviaGenerada = true;
}

// usuario interactúa con el texto de woolf
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#woolf') {
    generarCaidaFrases();
  } else {
    lluviaGenerada = false; // Reinicia para la próxima vez
  }
});

if (window.location.hash === '#woolf') {
  generarCaidaFrases();
}

if (capaCama) {
  capaCama.addEventListener('click', () => {
    window.location.hash = '';
  });
}


// 3. TECLA GLOBAL
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.location.hash = '';
  }
});

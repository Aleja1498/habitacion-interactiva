// ========================================================
// 1. EFECTO LINTERNA (CHARLOTTE PERKINS GILMAN)
// ========================================================
const capaPared = document.querySelector('.capa-texto-pared');
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
}

// ========================================================
// 2. LLUVIA DE FRASES EN EL SUELO (VIRGINIA WOOLF)
// ========================================================
const frasesWoolf = [
  { texto: "nos convertimos en desertores", clase: "gigante" },
  { texto: "el cuerpo interviene; se despunta o se afila", clase: "pesada" },
  { texto: "una lámina de liso cristal", clase: "normal" },
  { texto: "la gran experiencia; esta alteración espiritual", clase: "pesada" },
  { texto: "no conocemos nuestras propias almas", clase: "gigante" },
  { texto: "razón en suspenso", clase: "normal" },
  { texto: "monstruo corpóreo", clase: "pesada" },
  { texto: "las aguas de la aniquilación", clase: "gigante" }
];

const contenedorLluvia = document.getElementById('lluviaWoolf');

function generarFrasesSuelo() {
  if (!contenedorLluvia) return;
  contenedorLluvia.innerHTML = '';
  
  frasesWoolf.forEach((f) => {
    let el = document.createElement('div');
    el.className = `frase-caida ${f.clase}`;
    el.innerText = f.texto;
    
    let posX = Math.random() * 70 + 5; 
    let posY = Math.random() * 25 + 68; 
    let rot = (Math.random() - 0.5) * 20; 

    el.style.left = `${posX}vw`;
    el.style.setProperty('--destino-y', `${posY}vh`);
    el.style.transform = `rotate(${rot}deg)`;
    
    contenedorLluvia.appendChild(el);
  });
}

// ========================================================
// 3. ESPEJO Y LLUVIA DE AGUA (ALFONSINA STORNI)
// ========================================================
const contenedorGotas = document.getElementById('gotasEspejo');

function crearLluviaEspejo() {
  if (!contenedorGotas) return;
  contenedorGotas.innerHTML = '';

  for (let i = 0; i < 35; i++) {
    let gota = document.createElement('div');
    gota.className = 'gota-cristal';
    gota.style.left = `${Math.random() * 100}vw`;
    gota.style.animationDuration = `${0.8 + Math.random() * 0.8}s`;
    gota.style.animationDelay = `${Math.random() * 2}s`;
    contenedorGotas.appendChild(gota);
  }
}

// Escuchar cambios de hash (#woolf / #storni)
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#woolf') {
    generarFrasesSuelo();
  }
  if (window.location.hash === '#storni') {
    crearLluviaEspejo();
  }
});

if (window.location.hash === '#woolf') generarFrasesSuelo();
if (window.location.hash === '#storni') crearLluviaEspejo();

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
  { texto: "dejamos de ser soldados en el ejército de los rectos", clase: "gigante", x: 26, y: 64, rot: -3 },
  { texto: "flotamos con ramas en el arroyo...", clase: "pesada", x: 42, y: 88, rot: 2 },
  { texto: "el cuerpo interviene; se despunta o se afila", clase: "normal", x: 28, y: 80, rot: -2 },
  { texto: "la gran experiencia; esta alteración espiritual", clase: "pesada", x: 24, y: 72, rot: 3 },
  { texto: "gigantescos robles que crecen en la penumbra del alma", clase: "gigante", x: 32, y: 76, rot: -1 },
  { texto: "tremenda es la alteración de la salud", clase: "normal", x: 30, y: 68, rot: 4 },
  { texto: "no conocemos nuestras propias almas", clase: "gigante", x: 22, y: 90, rot: -4 },
  { texto: "las aguas de la aniquilación", clase: "pesada", x: 48, y: 93, rot: 2 }
];

const contenedorLluvia = document.getElementById('lluviaWoolf');

function generarFrasesSuelo() {
  if (!contenedorLluvia) return;
  contenedorLluvia.innerHTML = '';
  
  frasesWoolf.forEach((f, idx) => {
    let el = document.createElement('div');
    el.className = `frase-caida ${f.clase}`;
    el.innerText = f.texto;
    
    el.style.left = `${f.x}vw`;
    el.style.setProperty('--destino-y', `${f.y}vh`);
    el.style.transform = `rotate(${f.rot}deg)`;
    el.style.animationDelay = `${idx * 0.22}s`;
    
    contenedorLluvia.appendChild(el);
  });
}

// ========================================================
// 3. ESPEJO Y GOTAS DRAMÁTICAS (ALFONSINA STORNI)
// ========================================================
const contenedorGotas = document.getElementById('gotasEspejo');

function crearGotasDramaticas() {
  if (!contenedorGotas) return;
  contenedorGotas.innerHTML = '';

  for (let i = 0; i < 25; i++) {
    let gota = document.createElement('div');
    gota.className = 'gota-pesada';
    gota.style.left = `${Math.random() * 90 + 5}%`;
    gota.style.animationDuration = `${1.0 + Math.random() * 1.2}s`;
    gota.style.animationDelay = `${Math.random() * 2.5}s`;
    contenedorGotas.appendChild(gota);
  }
}

// ========================================================
// 4. CONTROL DE EVENTOS HASH & ESCAPE (ESC)
// ========================================================
function ejecutarEfectosSegunHash() {
  if (window.location.hash === '#woolf') {
    generarFrasesSuelo();
  }
  if (window.location.hash === '#storni') {
    crearGotasDramaticas();
  }
}

window.addEventListener('hashchange', ejecutarEfectosSegunHash);
window.addEventListener('DOMContentLoaded', ejecutarEfectosSegunHash);

// Cierre universal con la tecla Escape (Esc)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    if (window.location.hash !== '') {
      window.location.hash = '';
    }
  }
});

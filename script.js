// Texto Charlotte Perkins Gilman
const textoPerkins = "John es médico, y tal vez esa sea una de las razones por las que no me pongo bien más rápido. Verá, ¡No cree que estoy enferma! Personalmente no estoy de acuerdo con sus ideas. ¡No me gusta nada nuestra habitación! No me importa nada, sólo el papel. Uno de esos patrones extravagantes que cometen todos los pecados artísticos. Es lo suficientemente aburrido como para confundir al ojo al seguirlo, lo suficientemente pronunciado como para irritar constantemente. El color es repelente, casi repugnante; un amarillo humeante y sucio. Detrás de ese patrón exterior... las tenues formas se hacen más claras cada día. La mujer de atrás lo agita. En los lugares muy sombríos se agarra a los barrotes y los sacude con fuerza. Y todo el tiempo trata de trepar. ¡Al fin he salido!, a pesar de ti y de Jane! Y he arrancado la mayor parte del papel, ¡así que no puedes devolverme! ";

// Frases
const frasesCargadas = [
  "¡No cree que estoy enferma!",
  "¡No me gusta nada nuestra habitación!",
  "No me importa nada, sólo el papel.",
  "Detrás de ese patrón exterior...",
  "La mujer de atrás lo agita",
  "todo el tiempo trata de trepar",
  "¡Al fin he salido!"
];

let indexTexto = 0;
let estaPresionado = false;
let ultimoX = 0;
let ultimoY = 0;
const espacioMinimo = 22; // Distancia entre letras

// se activa al hacer clic en la pared
const zonaPared = document.querySelector('.zona-pared');
const capaParedLienzo = document.getElementById('perkins');

let modoParedActivo = false;

//  modo pared
if (zonaPared) {
  zonaPared.addEventListener('click', (e) => {
    e.preventDefault();
    modoParedActivo = true;
    capaParedLienzo.classList.add('activo');
  });
}

// Eventos de arrastre para escribir sobre la pared
window.addEventListener('mousedown', (e) => {
  if (!modoParedActivo) return;
  estaPresionado = true;
  ultimoX = e.clientX;
  ultimoY = e.clientY;
  crearLetra(e.clientX, e.clientY);
});

window.addEventListener('mouseup', () => estaPresionado = false);

window.addEventListener('mousemove', (e) => {
  if (!modoParedActivo || !estaPresionado) return;

  let distancia = Math.hypot(e.clientX - ultimoX, e.clientY - ultimoY);

  if (distancia >= espacioMinimo) {
    crearLetra(e.clientX, e.clientY);
    ultimoX = e.clientX;
    ultimoY = e.clientY;
  }
});

function crearLetra(x, y) {
  let span = document.createElement('span');
  span.className = 'letra-pared';
  
  // Extrae el carácter actual
  let caracter = textoPerkins[indexTexto];
  span.innerText = caracter;

  // Posicionamiento 
  span.style.left = x + 'px';
  span.style.top = y + 'px';

  // Verificar peso
  let fragmentoActual = textoPerkins.substring(Math.max(0, indexTexto - 15), indexTexto + 15);
  let esCargada = frasesCargadas.some(frase => fragmentoActual.includes(frase));

  if (esCargada) {
    span.classList.add('cargada');
  }

  // Rotación aleatoria 
  let rotacion = (Math.random() - 0.5) * 20; 
  span.style.transform = `translate(-50%, -50%) rotate(${rotacion}deg)`;

  capaParedLienzo.appendChild(span);

  indexTexto = (indexTexto + 1) % textoPerkins.length;
}

// Botón para salir del modo pared
const btnCerrarPared = document.querySelector('#perkins .btn-cerrar');
if (btnCerrarPared) {
  btnCerrarPared.addEventListener('click', (e) => {
    e.preventDefault();
    modoParedActivo = false;
    capaParedLienzo.classList.remove('activo');
  });
}

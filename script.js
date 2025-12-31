function abrirInvitacion() { 
  const overlay = document.getElementById("overlay-sobre");
  overlay.classList.add("ocultar");
  document.body.classList.remove("lock");
}

function playMusic() {
  document.getElementById("audio").play();
}

// CUENTA REGRESIVA
const fecha = new Date(2026, 0, 24, 19, 0, 0).getTime();


setInterval(() => {
  const now = new Date().getTime();
  const diff = fecha - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").innerText = d;
  document.getElementById("horas").innerText = h.toString().padStart(2, "0");
  document.getElementById("minutos").innerText = m.toString().padStart(2, "0");
  document.getElementById("segundos").innerText = s.toString().padStart(2, "0");
}, 1000);
function abrirVestimenta() {
  document.getElementById("modalVestimenta").classList.add("activo");
  document.body.classList.add("lock");
}

function cerrarVestimenta() {
  document.getElementById("modalVestimenta").classList.remove("activo");
  document.body.classList.remove("lock");
}
function abrirSobres() {
  document.getElementById("modal-sobres").style.display = "flex";
}

function cerrarSobres() {
  document.getElementById("modal-sobres").style.display = "none";
}
// ===== GALERIA =====
let indexGaleria = 0;
const fotos = document.querySelectorAll(".galeria-img");

function mostrarFoto(i) {
  fotos.forEach((img) => img.classList.remove("active"));
  fotos[i].classList.add("active");
}

function nextFoto() {
  indexGaleria = (indexGaleria + 1) % fotos.length;
  mostrarFoto(indexGaleria);
}

function prevFoto() {
  indexGaleria = (indexGaleria - 1 + fotos.length) % fotos.length;
  mostrarFoto(indexGaleria);
}

// AUTO cada 4 segundos
setInterval(() => {
  nextFoto();
}, 4000);

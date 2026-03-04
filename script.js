// =========================
// CONTADOR
// =========================

const eventDate = new Date("March 22, 2026 15:30:00").getTime();
const countdown = document.getElementById("countdown");

const units = ["Días","Horas","Min","Seg"];
let previousValues = [0,0,0,0];

function createUnit(label){
  const unit = document.createElement("div");
  unit.className = "flip-unit";

  unit.innerHTML = `
    <div class="flip-card">
      <div class="flip-inner">
        <div class="flip-front">00</div>
        <div class="flip-back">00</div>
      </div>
    </div>
    <div class="flip-label">${label}</div>
  `;

  countdown.appendChild(unit);
}

units.forEach(label => createUnit(label));

function updateCountdown(){
  const now = new Date().getTime();
  const distance = eventDate - now;

  if(distance <= 0){
    countdown.innerHTML = "✨ Hoy es el gran día ✨";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const values = [days, hours, minutes, seconds];

  document.querySelectorAll(".flip-card").forEach((card, index)=>{
    const inner = card.querySelector(".flip-inner");
    const front = card.querySelector(".flip-front");
    const back = card.querySelector(".flip-back");

    const newValue = values[index].toString().padStart(2,"0");

    if(previousValues[index] !== values[index]){
      back.textContent = newValue;
      card.classList.add("flip");

      setTimeout(()=>{
        front.textContent = newValue;
        card.classList.remove("flip");
      },600);

      previousValues[index] = values[index];
    }
  });
}

setInterval(updateCountdown,1000);
updateCountdown();

// =========================
// CONFIRMAR ASISTENCIA
// =========================

function confirmar(){

  const nombre = document.getElementById("nombre").value;
  const personas = document.getElementById("personas").value;
  const mensajeExtra = document.getElementById("mensaje").value;

  if(nombre.trim() === ""){
    alert("Por favor escribe tu nombre 💕");
    return;
  }

  const texto = `Hola, soy ${nombre}. Confirmo mi asistencia al Baby Shower con ${personas} persona(s). ${mensajeExtra}`;

  const numero = "529511712247"; // 👈 AQUÍ VA TU NÚMERO

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");

}

// =========================
// MÚSICA
// =========================

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", function() {

  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔇 Pausar";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Música";
  }

});
// =========================
// BURBUJAS
// =========================

for(let i = 0; i < 20; i++){

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const size = Math.random() * 80 + 40;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 100 + "vw";

  bubble.style.animationDuration = (Math.random() * 10 + 15) + "s";

  bubble.style.opacity = Math.random() * 0.5 + 0.5;

  document.body.appendChild(bubble);
}
// =====================
// CONFIRMAR ASISTENCIA
// =====================


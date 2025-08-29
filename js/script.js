// Inicializar animaciones
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});

// Navbar scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Modal
const modal = document.getElementById("reservaModal");
const btn = document.getElementById("reservaBtn");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("reservaForm");

btn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "flex";
  document.body.classList.add('no-scroll');
}

span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('no-scroll');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
}

// Enviar reserva a WhatsApp
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const mensaje = document.getElementById('mensaje').value;

  const texto = `Hola, me gustaría agendar una cita:%0A%0A*Nombre:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Servicio:* ${servicio}%0A*Fecha:* ${fecha}%0A*Hora:* ${hora}%0A*Mensaje:* ${mensaje}`;
  
  const whatsappNumber = form.dataset.phone; // ← tomado del HTML

  window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${texto}`, '_blank');
  
  modal.style.display = "none";
  document.body.classList.remove('no-scroll');
});

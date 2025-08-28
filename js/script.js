 // Inicializar animaciones
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });

    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Modal de reserva
    const modal = document.getElementById("reservaModal");
    const btn = document.getElementById("reservaBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("reservaForm");

    btn.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "flex";
      document.body.classList.add('no-scroll'); // Prevenir scroll sin causar desplazamiento horizontal
    }

    span.onclick = function() {
      modal.style.display = "none";
      document.body.classList.remove('no-scroll'); // Restaurar scroll
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll'); // Restaurar scroll
      }
    }

    // Enviar formulario a WhatsApp
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const telefono = document.getElementById('telefono').value;
      const servicio = document.getElementById('servicio').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const mensaje = document.getElementById('mensaje').value;
      
      // Formatear el mensaje para WhatsApp
      const texto = `Hola, me gustaría agendar una cita:%0A%0A*Nombre:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Servicio:* ${servicio}%0A*Fecha preferida:* ${fecha}%0A*Hora preferida:* ${hora}%0A*Mensaje:* ${mensaje}`;
      
      // Número de WhatsApp CORREGIDO - usando tu número real
      const whatsappNumber = "5219612136891";
      
      // Abrir WhatsApp con el mensaje predefinido
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${texto}`, '_blank');
      
      // Cerrar el modal
      modal.style.display = "none";
      document.body.classList.remove('no-scroll'); // Restaurar scroll
    });
/* ==========================================================================
   Cabellería Barber Shop - Interactive Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Service category filter
  const filterBtns = document.querySelectorAll('.tab-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Dynamic booking links setup
  const defaultPhone = '18092314205'; // Cabellería WhatsApp
  const bookBtns = document.querySelectorAll('.btn-book-service');

  bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.service-card');
      const serviceName = card.querySelector('.service-title').textContent.trim();
      const servicePrice = card.querySelector('.service-price').textContent.trim();
      
      const message = `¡Hola Cabellería Barber Shop! 👋 Quiero reservar un turno para: *${serviceName}* (${servicePrice}). ¿Tienen disponibilidad para hoy o mañana?`;
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${defaultPhone}?text=${encodedMsg}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  });
});

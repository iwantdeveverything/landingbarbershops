/* ==========================================================================
   BarberLandings Hub - Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('mobileModal');
  const modalIframe = document.getElementById('modalIframe');
  const closeModalBtn = document.getElementById('closeModal');
  const simulateBtns = document.querySelectorAll('.btn-simulate-mobile');

  // Open mobile preview simulator modal
  simulateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const demoUrl = btn.getAttribute('data-demo-url');
      if (demoUrl) {
        modalIframe.src = demoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

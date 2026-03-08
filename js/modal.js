/*
  modal.js
  Handles the property preview modal.

  Clicking a listing card populates the modal with that card's data
  attributes and opens it. The modal can be closed via the close button,
  clicking the backdrop, or pressing Escape.
*/

document.addEventListener('DOMContentLoaded', () => {
  const modal      = document.getElementById('propertyModal');
  const modalClose = document.getElementById('modalClose');
  const modalImg   = document.getElementById('modalImg');
  const modalTag   = document.getElementById('modalTag');
  const modalPrice = document.getElementById('modalPrice');
  const modalAddr  = document.getElementById('modalAddress');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalCta   = document.getElementById('modalCta');

  // Guard: exit early if modal element isn't in the DOM
  if (!modal) return;

  document.querySelectorAll('.listing-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.listing-card_save')) return;

      // Populate modal fields from card data attributes
      modalImg.src           = card.dataset.img || '';
      modalImg.alt           = card.dataset.address || '';
      modalTag.textContent   = card.dataset.tag || '';
      modalTag.className     = 'modal_tag ' + (card.dataset.tagClass || '');
      modalPrice.textContent = card.dataset.price || '';
      modalAddr.textContent  = card.dataset.address || '';
      modalSpecs.innerHTML   = `
        <li>🛏 ${card.dataset.beds}</li>
        <li>🛁 ${card.dataset.baths}</li>
        <li>📐 ${card.dataset.size}</li>
      `;

      openModal();
    });
  });

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);

  // Close modal and scroll to the consultation form
  if (modalCta) modalCta.addEventListener('click', closeModal);

  // Close when clicking the backdrop (outside the modal box)
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Keyboard accessibility : Escape closes the modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

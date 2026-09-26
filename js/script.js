document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.vehicle-card');
  filters.forEach(filter => filter.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    cards.forEach(card => { card.style.display = selected === 'all' || card.dataset.brand === selected ? '' : 'none'; });
  }));
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    message.textContent = 'Thanks! Your enquiry is ready — we will be in touch soon.';
    form.reset();
  });
});

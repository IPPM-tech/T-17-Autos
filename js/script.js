// T-17 Autos Filtering System

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  setupFilterButtons();
  highlightCurrentPage();
});

// Setup filter button functionality
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const vehicleCards = document.querySelectorAll('.vehicle-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');

      // Get the filter value
      const filterValue = this.getAttribute('data-filter');

      // Filter vehicles
      vehicleCards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('hidden');
          // Add fade-in animation
          card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
          const brandValue = card.getAttribute('data-brand');
          if (brandValue === filterValue) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeIn 0.3s ease-in';
          } else {
            card.classList.add('hidden');
          }
        }
      });
    });
  });
}

// Highlight current page in navigation
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
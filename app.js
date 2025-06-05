const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
 
 function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }

    
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const sections = document.querySelectorAll('.movie-section');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();

    sections.forEach(section => {
      const grid = section.querySelector('.movie-grid');
      const cards = grid.querySelectorAll('.movie-list-item');
      let anyVisible = false;

      cards.forEach(card => {
        const titleElem = card.querySelector('.movie-list-item-title');
        const title = titleElem ? titleElem.textContent.trim().toLowerCase() : '';
        if (title.includes(query)) {
          card.style.display = '';
          anyVisible = true;
        } else {
          card.style.display = 'none';
        }
      });

       
      section.style.display = anyVisible || query === '' ? '' : 'none';
    });
  });
});

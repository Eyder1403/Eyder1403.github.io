const menuToggle = document.getElementById('menu-toggle');
const navbar1 = document.getElementById('navbar1');

menuToggle.addEventListener('click', () => {
  navbar1.classList.toggle('active');
});


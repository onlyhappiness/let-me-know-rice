const header = document.querySelector('header');
const bars = document.querySelector('.toggle');
const nav = document.querySelector('.nav');


bars.addEventListener('click', () => {
  header.classList.toggle('active');
  // bars.classList.toggle('active');
  nav.classList.toggle('active');
})
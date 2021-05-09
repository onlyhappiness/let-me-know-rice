const search = document.querySelector('.search');
const toggle2 = document.querySelector('.toggle2');

document.querySelector('.toggle2').onclick = function() {
  toggle2.classList.toggle('active');
  search.classList.toggle('active');
}

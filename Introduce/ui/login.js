let login = document.querySelector('.login');

document.querySelector('.toggle').onclick = function() {
  this.classList.toggle('active');
  login.classList.toggle('active');
}
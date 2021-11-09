const detail = document.querySelector('.detail');
const toggle3 = document.querySelector('.toggle3');

document.querySelector('.toggle3').onclick = function() {
  toggle3.classList.toggle('active');
  detail.classList.toggle('active');
}





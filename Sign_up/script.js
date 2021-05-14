const open_modal = document.getElementById('btn_request');
const close_modal = document.getElementById('close');
const modal_container = document.getElementById('modal_container');

open_modal.addEventListener('click', () => {
  modal_container.classList.add('active');
});

close_modal.addEventListener('click', () => {
  modal_container.classList.remove('active');
});
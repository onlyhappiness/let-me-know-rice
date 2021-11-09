/* Dark Light Theme */
const themeButton = document.getElementById('theme_button');
const darktheme = 'dark_theme';
const logo = document.querySelector('.logo');

themeButton.addEventListener('click' ,() => {
  document.body.classList.toggle(darktheme);
  logo.classList.toggle(darktheme);
  // themeButton.classList.toggle(iconTheme);
})
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const login = document.querySelector(".login");
const toggle1 = document.querySelector('.toggle1');

document.querySelector(".toggle1").onclick = function () {
  toggle1.classList.toggle("active");
  login.classList.toggle("active");
};



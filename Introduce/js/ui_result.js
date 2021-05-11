const result_btn = document.querySelector(".result_btn");
const result_img = document.querySelector('.result_img');

// result_btn.addEventListener('click', function() {

// });


document.querySelector(".result_btn").onclick = function () {
  result_img.classList.toggle("active");
  
  setTimeout(function() {
    
    alert("전방 168m 에 포본 양재역이 있습니다.");
  }, 3000);
};
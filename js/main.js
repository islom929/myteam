const directorItem = document.querySelectorAll(".directors__item");
const directorBtn = document.querySelectorAll(".director__btn");

directorBtn.forEach(btn => {
  btn.addEventListener('click', function(){
    btn.closest('.directors__item').classList.toggle("directors__item--active");
  })
})
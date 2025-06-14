let indexBox = document.querySelector('.index-box');
let content = document.querySelector('.content');
window.onscroll = () => {
    let currentTop = window.scrollY;
let top = content.offsetTop-50;

if (currentTop >= top) {
    indexBox.classList.add("fixed");
  } else {
    indexBox.classList.remove("fixed");
  }
}
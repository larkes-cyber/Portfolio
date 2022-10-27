const humburger = document.querySelector(".hamburger"),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

humburger.addEventListener("click",()=>{
    menu.classList.remove("non_active");
})

close.addEventListener("click",()=>{
    menu.classList.add("non_active");
})

const counters = document.querySelectorAll(".skills__scale_percentages"),
    scales = document.querySelectorAll(".skills__pump");



counters.forEach((item, i) => {
    scales[i].style.width = item;
})
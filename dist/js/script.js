const humburger = document.querySelector(".hamburger"),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

humburger.addEventListener("click",()=>{
    menu.classList.remove("non_active");
})

close.addEventListener("click",()=>{
    menu.classList.add("non_active");
})
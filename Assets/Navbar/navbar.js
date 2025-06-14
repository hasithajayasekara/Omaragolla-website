let menuBtn = document.querySelector('nav .menu');
let menuState = false;
let menu = document.querySelector("nav .nav-links");
menuBtn.addEventListener('click', ()=>{
    if(menuState == false){
        menuBtn.innerHTML = "close";
        menuState = true;
        menu.classList.add("show");

    }else{
        menuBtn.innerHTML = "menu";
        menuState = false;
        menu.classList.remove("show");
    }
});
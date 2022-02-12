let loader=document.querySelectorAll('.loader-page'),
    main_page=document.querySelectorAll('.main-page');

function load(){
loader[0].style.opacity="0";
main_page[0].style.filter="blur(0px)";
}

setInterval(load,2000);






















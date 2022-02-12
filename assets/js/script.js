let loader = document.querySelectorAll('.loader-page'),
    main_page = document.querySelectorAll('.main-page');
count = 1;

function counter() {
    count++;
    loader[0].innerHTML = count + "%";
}

function load() {
    loader[0].style.opacity = "0";
    main_page[0].style.filter = "blur(0px)";
}

setInterval(counter, 20);
setInterval(load, 2000);
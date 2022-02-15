let loader = document.querySelector('.loader-page'),
    main_page = document.querySelector('.main-page'),
    count = 1;

function counter() {
    count++;
    loader.innerHTML = count + "%";
    if (count == 100) {
        clearInterval(timer);
    }
}

function load() {
    loader.style.opacity = "0";
}

const timer = setInterval(counter, 30);
setInterval(load, 4000);
window.onload = function () {
    main_page.classList.add('focus');
}
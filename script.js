const btn = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');

function display() {
    const menu = document.querySelector('#menu');
    menu.classList.add('menu-visible');
}
function close(){
    const menu = document.querySelector('#menu');
    menu.classList.remove('menu-visible');
}

btn.addEventListener('click',display);
closeButton.addEventListener('click',close);
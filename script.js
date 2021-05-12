
Array.from(document.querySelectorAll("button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

let ham = document.querySelector('.hamburger-menu');
let wrap = document.querySelector('.container');
let navbar = document.querySelector('.navbar');

ham.addEventListener('click', () => {
    wrap.classList.toggle('bg');
});

navbar.addEventListener('click', ()=> {
    wrap.classList.toggle('bg');
})
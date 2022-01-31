const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menuList');
const menuBtn = document.querySelector('.menuBtn');
const cancelBtn = document.querySelector('.cancelBtn');

menuBtn.onclick = () => {
    menu.classList.add('active');
    menuBtn.classList.add('hide');
    body.classList.add('disabledScroll');
}

cancelBtn.onclick = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disabledScroll');
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}
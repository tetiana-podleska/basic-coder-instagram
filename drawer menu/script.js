const nav = document.querySelector('.nav');
document.querySelector('.toggle').onclick =
    function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    }
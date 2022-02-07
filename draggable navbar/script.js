const nav = document.querySelector('.nav')
console.log(nav);

document.querySelector('.toggle').onClick
    = function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
}

$( function () {
    $('.nav').draggable()
});
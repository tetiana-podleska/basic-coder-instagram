const time = document.getElementById('time');
const day = document.getElementById('day');
const dateVal = document.getElementById('date');

display();
setInterval(display, 100);

function display() {
    let date = new Date();

    if (date.getMinutes() < 10) {
        time.innerText = `${date.getHours()} : 0${date.getMinutes()}`;
    } else {
        time.innerText = `${date.getHours()} : ${date.getMinutes()}`
    }

    const monthArr = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

    let dateValue = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    dateVal.innerText = monthArr[date.getMonth()] + " " + dateValue;

    const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    day.innerText = dayArr[date.getDay()];
}
const captcha = document.querySelector('.captcha');
const reloadBtn = document.querySelector('.reloadBtn');
const inputField = document.querySelector('input');
const checkBtn = document.querySelector('.checkBtn');
const statusTxt = document.querySelector('.statusTxt');

let allCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',0,1,2,3,4,5,6,7,8,9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomChar = allCharacter[Math.floor(Math.random() * allCharacter.length)];
        captcha.innerText += `${randomChar}`;
    }
}

reloadBtn.addEventListener('click', () => {
    captcha.innerHTML = '';
    getCaptcha();
})

checkBtn.addEventListener('click', e => {
    e.preventDefault();
    statusTxt.style.display = 'block';
    let inputVal = inputField.value.split('').join('');
    if (inputVal === captcha.innerText) {
        statusTxt.style.color = '#4db2ec'
        statusTxt.innerText = 'Nice. Captcha matched.';
        setTimeout(() => {
            statusTxt.style.display = '';
            inputField.value = '';
            captcha.innerText = '';
            getCaptcha();
        }, 4000);
    } else {
        statusTxt.style.color = '#ff0000';
        statusTxt.innerText = 'Captcha not matched. Try again later.';
        setTimeout(() => {
            statusTxt.style.display = '';
            inputField.value = '';
            captcha.innerText = '';
            getCaptcha();
        }, 3000);
    }
})
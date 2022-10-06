const viewBtn = document.querySelector('.viewModal'),
    popup = document.querySelector('.popup'),
    close = popup.querySelector('.close'),
    field = popup.querySelector('.field'),
    input = popup.querySelector('input'),
    copy = popup.querySelector('button');

viewBtn.onclick = () => {
    popup.classList.toggle('show')
}

close.onclick = () => {
    viewBtn.click()
}

copy.onclick = () => {
    input.select();
    if(document.execCommand('copy')) {
        field.classList.add('active');
        copy.innerText = 'Copied'
        setTimeout(() => {
            field.classList.remove('active');
            copy.innerText = 'Copy'
            window.getSelection().removeAllRanges();
        }, 3000)
    }
}
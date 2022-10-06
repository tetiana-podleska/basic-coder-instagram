const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const sone = document.getElementById('sone');
const stwo = document.getElementById('stwo');
const sthree = document.getElementById('sthree');

const yone = document.getElementById('yone');
const ytwo = document.getElementById('ytwo');
const ythree = document.getElementById('ythree');

const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');

const con1 = document.getElementById('con1');
const con2 = document.getElementById('con2');

const back = document.getElementById('back');

const accordion = document.getElementsByClassName('box');

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

one.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionA.style.display = 'block';
}

two.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionB.style.display = 'block';
}

three.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionC.style.display = 'block';
}

sone.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionA.style.display = 'block';
}

stwo.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionB.style.display = 'block';
}

sthree.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionC.style.display = 'block';
}

yone.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionA.style.display = 'block';
}

ytwo.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionB.style.display = 'block';
}

ythree.onclick = function() {
    con1.style.display = 'none';
    con2.style.display = 'flex';
    optionC.style.display = 'block';
}

back.onclick = function() {
    con1.style.display = 'flex';
    con2.style.display = 'none';
    optionA.style.display = 'none';
    optionB.style.display = 'none';
    optionC.style.display = 'none';
    optionD.style.display = 'none';
    optionE.style.display = 'none';
    optionF.style.display = 'none';
    optionG.style.display = 'none';
    optionH.style.display = 'none';
    optionI.style.display = 'none';
}
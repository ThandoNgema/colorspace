const btnStart = document.querySelector('#start');
const btnRandom = document.querySelector('#randomize');
const btnToggle = document.querySelector('#toggle');
const btnCounter = document.querySelector('#counter');
const firstBox = document.querySelector('#firstBox');
const btnStop = document.querySelector('#stop');
const colorValue = document.querySelector('colorValue');

var r = 0;
var g = 0;
var b = 0;

let timer;

window.document.querySelector('#stop').style.visibility = 'hidden';

function stop() {
    btnStart.disabled = false;
    btnStop.style.visibility = 'hidden';
    clearInterval(timer);
}

function start() {

    if(!(r<=255)){
        r++;
    } if(!(g<=255)) {
        g++
    } if(!(b<=255)){
        b++
    } else {
        //clearInterval(timer);
    }
    document.body.style.backgroundColor = makeRandomColor();
    btnStop.style.visibility = 'inherit';
    btnStart.disabled = true;
    //alert("IT WORKS");
}

function makeRandomColor() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgba(${r},${g},${b})`;
}

btnRandom.addEventListener('click', () => {
    document.body.style.backgroundColor = makeRandomColor();
});

btnStart.addEventListener('click', ()=> {
    timer = setInterval(start,3000);
});

btnToggle.addEventListener('click', () => {
    alpha = Math.random();
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgba(${r},${g},${b},${alpha})`;
});

btnStop.addEventListener('click', stop);


const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');


const numberElement = [];
const barElement = [];

// create number hours
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// create bar seconds
for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));


const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime() {
    let date = new Date();
    let curentHours = date.getHours();
    let curentMinutes = date.getMinutes();
    let curentSeconds = date.getSeconds();

    
    handHours.style.transform = `rotate(${curentHours * 30  + curentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${curentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${curentSeconds * 6}deg)`;
}


setInterval(getCurrentTime, 1000);
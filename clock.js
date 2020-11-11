
const secondHand = document.querySelector('.second');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');

const secondRunning = () => {
    const currentSecond = new Date().getSeconds();
    const degreSecond = (currentSecond * 360 / 60) + 90;
    secondHand.style.transform = `rotate(${degreSecond}deg)`;

    const currentMinute = new Date().getMinutes();
    const degreMinute = (currentMinute * 360 / 60) + 90;
    minuteHand.style.transform = `rotate(${degreMinute}deg)`;

    const currentHour = (new Date().getHours() % 12);
    const degreHour = (currentHour *360 / 12) + 90;
    hourHand.style.transform = `rotate(${degreHour}deg)`;

    console.log(currentHour);
}

setInterval(secondRunning, 1000)


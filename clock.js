
const hand = document.querySelectorAll('.hand');
const secondHand = document.querySelector('.second');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');

const secondRunning = () => {

    // how many degres for each second
    const currentSecond = new Date().getSeconds();
    const degreSecond = (currentSecond * 360 / 60) + 90;

    // how many degres for each minute
    const currentMinute = new Date().getMinutes();
    const degreMinute = (currentMinute * 360 / 60) + 90;
    
    // how many degres for each hour
    const currentHour = (new Date().getHours() % 12);  // % 12 to get 12h format instead of 24h
    const degreHour = (currentHour *360 / 12) + 90; 
    
    // to avoid clock hand to make a complete run each time hand hits 90 degres
    if (degreSecond == 90 || minuteHand == 90 || hourHand == 90) {
        hand.forEach(item => item.classList.add("no-transition")) 
    } 
    else {
        hand.forEach(item => item.classList.remove("no-transition")) 
    }

    // make each hand runs his own degres rotation
    secondHand.style.transform = `rotate(${degreSecond}deg)`;  
    minuteHand.style.transform = `rotate(${degreMinute}deg)`;    
    hourHand.style.transform = `rotate(${degreHour}deg)`;  
    
}

setInterval(secondRunning, 1000)


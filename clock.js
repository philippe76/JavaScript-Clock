
const secondHand = document.querySelector('.second');



const secondRunning = () => {
    const currentSecond = new Date().getSeconds();
    const degreSecond = (currentSecond * 360)/60;
    secondHand.style.transform = `rotate(${degreSecond}deg)`;
}

setInterval(secondRunning, 1000)





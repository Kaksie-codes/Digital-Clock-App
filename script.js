const meridiemEl = document.getElementById('meridiem');
const clockTime = document.getElementById('clock-time');

function getTime(){
    let amPm;
    const dateEl = new Date();
    let hour = dateEl.getHours();
    let  minute = dateEl.getMinutes();
    let seconds = dateEl.getSeconds();

    //converting the time to 12 hour format
    if(hour > 12){
        amPm = 'PM';
        hour = hour - 12;
    }else{
        amPm = 'AM';        
    }

    if(hour < 10){
        hour = `0${hour}`;
    }

    if(minute < 10){
    minute = `0${minute}`;
    }

    if(seconds < 10){
    seconds = `0${seconds}`
    }

    clockTime.textContent = `${hour}:${minute}:${seconds}`;
    meridiemEl.textContent = amPm;
}

setInterval(getTime, 1000)

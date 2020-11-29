"use strict"; 


let minute = 0; 
let second = 0; 
let millisecond = 0; 
let timerInterval; 
let showMinuteId = document.querySelector("#showMinutes");
let showMinute = () => {showMinuteId.innerHTML=`${minute}`}; 
let showSecondId = document.querySelector("#showSeconds");
let showSecond = () => {showSecondId.innerHTML=`${second}`}; 
let showMillisecondId = document.querySelector("#showMilliseconds");
let showMillisecond = () => {showMillisecondId.innerHTML=`${millisecond}`}; 

setInterval(showMinute, 20);
setInterval(showSecond, 20);
setInterval(showMillisecond, 20);

function startTimer() 
    {
        timerInterval = setInterval(timer, 10);
    }

function timer()
    {
        millisecond ++; 
        if (millisecond > 99)
            {
                millisecond = 0; 
                second ++; 
            }

        if (second > 59)
        {
            second = 0; 
            minute ++; 
        }
        console.log(minute, second, millisecond); 
    }


function stopTimer() 
    {
        clearInterval(timerInterval); 
    }

function restart()
    {
        second = 0; 
        minute = 0; 
    }


document.querySelector("#reiniciar").addEventListener("click", restart); 
document.querySelector("#iniciar").addEventListener("click", startTimer); 
// document.querySelector("#parar").addEventListener("click", stopTimer()); 

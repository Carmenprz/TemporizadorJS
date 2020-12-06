"use strict"; 


let minute = 0; 
let second = 0; 
let millisecond = 0; 


let timerInterval; 
let showMinuteId = document.querySelector("#showMinutes");

let showMinute = () => {
        if (minute < 10) {
                showMinuteId.innerHTML=`0${minute}`
            } else {
                showMinuteId.innerHTML=`${minute}`
            }
    }; 

let showSecondId = document.querySelector("#showSeconds");
let showSecond = () => {
    if (second < 10) {
        showSecondId.innerHTML=`0${second}`
        } else {
            showSecondId.innerHTML=`${second}`
        }
    }; 


let showMillisecondId = document.querySelector("#showMilliseconds");
let showMillisecond = () => {
    if (millisecond < 10) {
        showMillisecondId.innerHTML=`0${millisecond}`
        } else {
            showMillisecondId.innerHTML=`${millisecond}`
        }
    }; 

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
        clearInterval(timerInterval);
        second = 0; 
        minute = 0;
        millisecond = 0; 
    }


document.querySelector("#reiniciar").addEventListener("click", restart); 
document.querySelector("#iniciar").addEventListener("click", startTimer); 
document.querySelector("#parar").addEventListener("click", stopTimer); 

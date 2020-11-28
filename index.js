"use strict"; 

    
let second = 0; 
let minute = 0; 

function timer()
    {
        second ++; 
        if (second > 59)
            {
                second = 0; 
                minute ++; 
            }
        console.log(minute, second); 
    }


setInterval(timer, 1000); 

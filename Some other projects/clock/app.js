// SEE DOM AND OBSERVE THE CHANGE 

// getting all the required variables 
const hourHand=document.querySelector('[data-hour]');
const minuteHand=document.querySelector('[data-minutes]');
const secondHand=document.querySelector('[data-seconds]');

// setting the function 
setInterval(rotate,1000);

function rotate(){
    const currentDatae=new Date();
    // getting seconds and setting rotation angles for second hand 
    const seconds=currentDatae.getSeconds();
    const secondRotate=seconds*(360/60);
    secondHand.style.setProperty("--rotation",secondRotate);
    

    // getting minutes and setting rotation angle 
    const minutes=currentDatae.getMinutes();
    const minuteangle=minutes*(360/60);
    minuteHand.style.setProperty("--rotation",minuteangle);

    // getting and setting angle for hour hand 
    let hours=currentDatae.getHours();
    const hoursangle=hours*(360/12);
    hourHand.style.setProperty("--rotation",hoursangle);

}
var months=[
    'January',
    'febuary',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

var days=[
    'sunday',
    'monday',
    'tuesday',
    'wednsday',
    'thursday',
    'friday',
    'saturday'
]
var deadline=document.querySelector(".deadline");
var ending_date=new Date(2020,7,15,9,0,0); 

// changing the dead line date dynamically 
const endingday=ending_date.getDate();
const currentday=new Date().getDate();
console.log(new Date().getMinutes > ending_date.getMinutes())
console.log(currentday>endingday)
deadline.innerHTML=`<p> Giveaway ends on ${ending_date.getFullYear()}, ${ending_date.getDate()}, ${months[ending_date.getMonth()]}, ${days[ending_date.getDay()]} </p>`

 
// getting all the days, hours , minutes and seconds 

var time=document.querySelectorAll(".count-down>div>h4");


setTime();
function setTime(){
    let endingtime=ending_date.getTime();
    let todaytime=new Date().getTime();
    let differencetime=endingtime-todaytime;
    let miliinday=1*24*60*60*1000;
    let miliinhour=1*60*60*1000;
    let miliinmin=1*60*1000;

     days=differencetime/miliinday;
     hours=(differencetime%miliinday)/miliinhour;
     minutes=((differencetime%miliinday)%miliinhour)/miliinmin;
     seconds=(((differencetime%miliinday)%miliinhour)%miliinmin)/1000;
    
    
    days=Math.floor(days);
    hours=Math.floor(hours);
    minutes=Math.floor(minutes);
    seconds=Math.floor(seconds);
    
    
    if(days<0 && hours<0 && minutes<0 && seconds<0){
        days=0;hours=0;minutes=0;seconds=0;
    }
    let arrtime=[days,hours,minutes,seconds];
    time.forEach((item,index)=>{
      item.textContent=arrtime[index];
    })
    
}

// now call the function in the interval of every second 
const intervalid=setInterval(() => {
    setTime();
}, 1000);

if((days==0 || days<0) && (hours==0 || hours<0) && (minutes==0 || minutes<0) && (seconds==0 || seconds<0)){
    deadline.innerHTML=`<p> Giveaway Ended </p>`
    clearInterval(intervalid)
}






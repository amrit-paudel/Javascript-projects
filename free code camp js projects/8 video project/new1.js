var buttons=document.querySelector(".buttons");
var video=document.querySelector(".video-container");

buttons.addEventListener("click",(e)=>{
 e.currentTarget.lastElementChild.classList.toggle("switch");
 e.currentTarget.lastElementChild.classList.toggle("slide");
 console.log(e.currentTarget.lastElementChild);

 if(e.currentTarget.lastElementChild.classList.contains("slide")){
    video.pause();
}
else{
    video.play();
}
 
})



/*var buttons=document.querySelector(".buttons");
var video=document.querySelector(".video-container");

buttons.addEventListener("click",function(e){
let switch_btn=e.currentTarget.querySelector(".switch");
if(!switch_btn.classList.contains("slide")){switch_btn.classList.add("slide");video.pause();}
else{switch_btn.classList.remove("slide");video.play();}

}) */

// at first getting all the required variable 


// see can be done by any method main thing is the logic and algorithm 
var open_model=document.querySelector(".open-modal")
var close=document.querySelector(".close");

open_model.addEventListener("click",(e)=>{
  e.currentTarget.parentNode.parentNode.classList.add("overlay");
  e.currentTarget.parentNode.classList.add('none');
  close.parentNode.classList.add("flex");
})

close.addEventListener("click",(e)=>{
  e.currentTarget.parentNode.parentNode.classList.remove("overlay");
  e.currentTarget.parentNode.classList.remove('flex');
  open_model.parentNode.classList.remove("none");
})







/*console.log(open_model)
// now adding the event listeners
open_model.addEventListener("click",(e)=>{
e.currentTarget.parentNode.classList.remove("flex");
e.currentTarget.parentNode.classList.add("none");
e.currentTarget.parentNode.parentNode.classList.add("overlay");
close.parentNode.classList.remove("none");
close.parentNode.classList.add("flex");
})

close.addEventListener("click",(e)=>{
  e.currentTarget.parentNode.classList.remove("flex");
  e.currentTarget.parentNode.classList.add("none");
  e.currentTarget.parentNode.parentNode.classList.remove("overlay");
  open_model.parentNode.classList.remove("none");
  open_model.parentNode.classList.add("flex");

})
*/


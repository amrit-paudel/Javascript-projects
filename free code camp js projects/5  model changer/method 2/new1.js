var open_modal=document.querySelector(".open-modal");
var close_modal=document.querySelector(".close-modal");



open_modal.addEventListener("click",(e)=>{
  close_modal.parentNode.parentNode.classList.add("visible");
})

close_modal.addEventListener("click",(e)=>{
  e.currentTarget.parentNode.parentNode.classList.remove("visible");
})

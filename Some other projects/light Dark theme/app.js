const swapButton=document.querySelector(".swap");
const body=document.querySelector("body");

console.log(swapButton)
swapButton.addEventListener("click",()=>{
    body.classList.toggle("dark");
})
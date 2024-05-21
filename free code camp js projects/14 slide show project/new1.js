const slides=[
 {
     img:"https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     slide_number:"1"
 },

 {
    img:"https://images.pexels.com/photos/1743482/pexels-photo-1743482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    slide_number:"2"
},

{
    img:"https://images.pexels.com/photos/92657/pexels-photo-92657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    slide_number:"3"
},

{
    img:"https://images.pexels.com/photos/161097/allgau-eisenberg-ostallgau-bavaria-161097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    slide_number:"4"
},

{
    img:"https://images.pexels.com/photos/390490/pexels-photo-390490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    slide_number:"5"
},

    
]

var count=0;
const next_btn=document.querySelector(".next");
const prev_btn=document.querySelector(".previous");
const slides_container=document.querySelector(".slides-container");
const slides_content=slides.map((item)=>{
    return `
    <img src="${item.img} " alt="slide image " class="slide-image">
    <span>${item.slide_number} </span>
    `
})

window.addEventListener("DOMContentLoaded",()=>{
    slides_container.innerHTML=slides_content[count];
    
})
next_btn.addEventListener("click",()=>{
    count++
    slides_container.innerHTML=slides_content[count];
    if(count===4){prev_btn.style.display="inline";next_btn.style.display="none"}
    else{prev_btn.style.display="none";}
})
prev_btn.addEventListener("click",()=>{
    count--
    if(count==1){next_btn.style.display="inline";prev_btn.style.display="inline";}
    slides_container.innerHTML=slides_content[count];
})
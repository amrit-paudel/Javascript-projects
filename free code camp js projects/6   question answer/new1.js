// getting all the necessary buttons 
var plus_btn=document.querySelectorAll(".plus-btn");
var minus_btn=document.querySelectorAll(".minus-btn");
var answers=document.querySelectorAll(".answer");
// now accessing the each button 
plus_btn.forEach((each_plus_btn)=>{
    each_plus_btn.addEventListener("click",(e)=>{
        assign_other_none();
       e.currentTarget.parentNode.parentNode.nextElementSibling.classList.add("block");                                // see here we add block 
    })
})

minus_btn.forEach((each_minus_btn)=>{
    each_minus_btn.addEventListener("click",(e)=>{
       
       e.currentTarget.parentNode.parentNode.nextElementSibling.classList.remove("block");                            // see here we remove block by css we set all answers display none and heree by js we add and remove block.
    })
})
                                                                                                                   
function assign_other_none(){
    answers.forEach((item)=>{
        if(item.classList.contains("block")){item.classList.remove("block")}
        item.classList.add("none");
    })
}
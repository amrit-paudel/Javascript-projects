var colors=['red','blue','green','yellow','pink','khaki'];
var btn=document.querySelector(".btn");

// now adding an event with the button 
// it's a functional programming 

btn.addEventListener("click",function(){
    var ranum=random_num();
    document.getElementsByTagName("main")[0].style.backgroundColor=colors[ranum];
    document.querySelector(".color").textContent=colors[ranum];
})

function random_num(){
    return Math.floor(Math.random()*colors.length);
}

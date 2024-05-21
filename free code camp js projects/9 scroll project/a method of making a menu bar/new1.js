// getting required items from the markup  

var menu_bar=document.querySelector(".menu-bar");
var nav_links=document.querySelector(".nav-links");

menu_bar.addEventListener("click",()=>{
    nav_links.classList.toggle("add-height");
})
// getting the menu bar 
var menubar=document.getElementsByClassName("menu-bar")[0];
// getting the nav-links
var nav_links=document.getElementsByClassName("nav-links")[0];

// adding the event 
menubar.addEventListener("click",()=>{
nav_links.classList.toggle("active");
})
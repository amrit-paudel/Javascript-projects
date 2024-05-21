const menu=document.querySelector(".menu");
const navLinks=document.querySelector(".nav-links");
navLinks.style.height=`${0}px`; // only becoz of this code that code below in ternery operator works pretty well                    
const navList=document.querySelector(".nav-list");
menu.addEventListener("click",()=>{
  //  navLinks.classList.toggle("add-height");
    let nav_link_height=navList.getBoundingClientRect().height;
    navLinks.style.height===`${0}px`?navLinks.style.height=`${nav_link_height}px `: navLinks.style.height=`${0}px`;
    
})

// setting dynamic date 
const dynamicDate=new Date().getFullYear();
document.querySelector("#date").textContent=dynamicDate;


// fixing the navbar after scrolling 
window.addEventListener("scroll",()=>{
  const nav=document.querySelector("nav");
  let navheight=nav.getBoundingClientRect().height;
  let scrollheight=window.pageYOffset;
  if(scrollheight>navheight){
    nav.classList.add("fixed-nav");
  }
  else{
    nav.classList.remove("fixed-nav");
  }
})


// smooth scrolling 
const links=document.querySelectorAll(".link");
links.forEach((link)=>{
  link.addEventListener("click",(e)=>{
    
   e.preventDefault();
   const sectionid=e.currentTarget.textContent;
   const section=document.querySelector(`#${sectionid}`);
   const sectionheight=section.getBoundingClientRect().height;
   const sectiontop=section.offsetTop;
   const navheight=document.querySelector("nav").getBoundingClientRect().height;
   console.log(navheight)
   if(!document.querySelector("nav").classList.contains("fixed-nav")){
    window.scrollTo(0,sectiontop-2*navheight);
   }
   else{
    window.scrollTo(0,sectiontop-navheight);
   }
   
   
  })
})
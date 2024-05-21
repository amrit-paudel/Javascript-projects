
// first making toggle with the help of menu button 
const menu=document.querySelector(".menu");
const navlist=document.querySelector(".nav-list");
const nav=document.querySelector("nav");
menu.addEventListener("click",()=>{
    navlist.classList.toggle("flex")
})



// making the navbar fixed 
const navheight=nav.getBoundingClientRect().height;
window.addEventListener("scroll",()=>{
    const scrollheight=window.pageYOffset; 
    if(scrollheight>navheight){
        nav.classList.add("fixed-nav")
    }
    else{
        nav.classList.remove("fixed-nav")
    }
})



// now smooth scrolling 
const links=document.querySelectorAll(".link");
for(link of links){
    link.addEventListener("click",(e)=>{
     e.preventDefault();
     
     if(navlist.classList.contains("flex")){
         navlist.classList.remove("flex");
     }
     
     const sectionid=e.currentTarget.textContent;
     console.log(sectionid)

     const section=document.querySelector(`#${sectionid}`);
     
     if(!navlist.classList.contains("fixed-nav")){
        let ycoord=section.offsetTop;
        window.scrollTo(0,ycoord-2*navheight);
     }
     else{
        ycoord=section.offsetTop;
        window.scrollTo(0,ycoord - navheight);
     }
    

    })
}

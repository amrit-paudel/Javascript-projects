// getting required items from the markup  

/*var menu_bar=document.querySelector(".menu");
var nav_list=document.querySelector(".nav-list");

menu_bar.addEventListener("click",()=>{
    nav_list.classList.toggle("add-height");
})

*/

var menu_bar=document.querySelector(".menu");
var nav_links=document.querySelector(".nav-links");
var nav_list=document.querySelector(".nav-list");



menu_bar.addEventListener("click",()=>{
const nav_links_height=nav_links.getBoundingClientRect().height;                                     /* here in java script and in anu other programming 
it is very very very ... important to analyze each and every step i.e total algorithm or will miss thing like placing these two const variables outside of the function */ 
const new_height=nav_list.getBoundingClientRect().height;
    if(nav_links_height===0){
       nav_links.style.height=`${new_height}px`;                                        /* by this we powered our webpage and add the dynamic height, however
       if we resize the screen i.e increase the screen without closing the menu bar the height is still gonna same it looks fine to that media query width but above that 
       when nav-links starts to seen horizontal height is still  be same so we will correct that by css
       see this how things works we do and if something happens we will try to correct
       
       now everything powered by JS applies as inline so will  higher priority so in normal condition we can't use external stylesheet
       there is an !important property used in css lets use that see in css ####### */
       
    }
    else{console.log(nav_links_height);
        nav_links.style.height=0;
    }
})


// setting the dynamic date
var dynamic_date=new Date().getUTCFullYear();
document.querySelector("#date").textContent=dynamic_date;

var nav=document.querySelector("nav");
window.addEventListener("scroll",()=>{
    var scroll_height=window.pageYOffset;
    var nav_height=nav.getBoundingClientRect().height;
    
    if(scroll_height>nav_height){
        nav.classList.add("fixed-nav");
    }
    else{
        nav.classList.remove("fixed-nav")
    }
   /* console.log(scroll_height)*/
})



// now smooth scrolling 
var links=document.querySelectorAll("a");
links.forEach((each_link)=>{
    each_link.addEventListener("click",(e)=>{
        // preventing the default proeprty  of repid scrolling to the particular section element 
      e.preventDefault();
       // getting the section element 
     var section_id=e.currentTarget.getAttribute("href").slice(1);
    // getting the corresponding section element 
      var section_element=document.querySelector(`#${section_id}`);
      //getting the link height 
      const link_height=nav_links.getBoundingClientRect().height;
    // getting the top positionof all the section element 
    console.log(section_element.offsetTop);
    if(!nav.classList.contains("fixed-nav")){var top_position=section_element.offsetTop - link_height*8.5;}
    if(nav.classList.contains("fixed-nav")){var top_position=section_element.offsetTop - link_height*5;}
      console.log(link_height);
      console.log(top_position);
      window.scrollTo({
          left:0,
          top:top_position,
      })

      // we want to close our menu tab on clicking the specific link 
         nav_links.style.height=0;
    })

    
})
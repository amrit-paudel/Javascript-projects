const nav=document.querySelector("nav");
const navlist=document.querySelectorAll("nav li a");
const navheight=nav.getBoundingClientRect().height;

// making nav bar fixed after scrolling 
window.addEventListener("scroll",()=>{
    let scrollheight=window.pageYOffset;
    console.log(navheight)
    console.log(scrollheight);
    (scrollheight>navheight+16) ? nav.classList.add("fixed"):nav.classList.remove("fixed");
})

navlist.forEach((item)=>{
    let sectionid=item.href;
    console.log(sectionid)
    sectionid=sectionid.slice(sectionid.indexOf("#")+1);
    
    // now getting the each section with this section id 
    const section=document.querySelector(`#${sectionid}`);
    let sectiontopposition=section.offsetTop;

    item.addEventListener("click",(e)=>{
      e.preventDefault();
      window.scrollTo({top:sectiontopposition-navheight*2})
      // here navheight*2 one to exclude the nav bar of the top and one
      // to exclude the top position of fixed nav bar 
      
    })
})
// getting all the required elements/nodes from the markup

var tab_links=document.querySelectorAll(".tablink");

/* making the first tab appear as the page loads */ 
window.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#displayfirst").click();
})

document.querySelector("#displayfirst").addEventListener("click",(e)=>{
    thisShowOtherNone(e.currentTarget);                                                               // meaning showing only this tab other not 
})


/*Now applying events to other tabs */
tab_links.forEach((each_link)=>{
    each_link.addEventListener("click",function(e){
        
        thisShowOtherNone(e.currentTarget);
        addactiveclass(e.currentTarget);
    })
})

function thisShowOtherNone(currenttarget){
    var tab_name=currenttarget.innerText.toLowerCase();
        othernone();
        var contains_none=document.querySelector(`#${tab_name}`).classList.contains("disp-none");
        if(contains_none){document.querySelector(`#${tab_name}`).classList.remove("disp-none")}
        document.querySelector(`#${tab_name}`).classList.add("disp-show");
        addimage(tab_name);
}
function othernone(){
    var tabContent=document.querySelectorAll("section.content");
    tabContent.forEach((item)=>{
        item.classList.add("disp-none");
    })
}


/* function to add the active class */
function addactiveclass(currenttarget){
    removeactiveinother();
    currenttarget.classList.add("active");
}

function removeactiveinother(){
    tab_links.forEach((eachlink)=>{
        eachlink.classList.remove("active");
    })
}





















/*function to add the image */
var imagearr=[
    {
        id:"history",
        img:"https://images.pexels.com/photos/2153739/pexels-photo-2153739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id:"vision",
        img:"https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        id:"goals",
        img:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
]
function addimage(tabname){
  let imgcont=document.querySelector(".image-container");
  let image=imgcont.firstElementChild;
  imagearr.forEach((eachobj)=>{
      if(tabname===eachobj.id){image.src=eachobj.img}
  })

}
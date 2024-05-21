const click=document.querySelector("#click");
const reset=document.querySelector("#reset");
const output=document.querySelector("#display");

click.addEventListener("click",()=>{
    var userage=prompt("enter your birth age ");
    var diffage=2020-userage;
    var ageinsec=diffage*365*24*60*60;
    output.textContent='you are '+ageinsec+' years old from '+userage+' in seconds . ';
})

reset.addEventListener("click",()=>{
    output.textContent="Output here ";
})






/*function fun(){
    var getyear=prompt("In which year you were bore mate ? ? ? ? ");
    var agensec=(2019-getyear)*365*24*60*60;
    var output="you are "+agensec+" seconds old since "+getyear;
    var head=document.createElement("h1"); // if we hadnot created this element than we would had to 
    // remove the dontainer which would not work 
    head.innerHTML=output;
    head.setAttribute("id","headid"); // we set the attribute so that latter we can remove the 
    // this particukar head element which is inside the div container
    // also since it is insode the div container so we didnot need to worry bout the css
    // because when we add this inside div css gets inhereted so it will also have same css propery as it's div container have.
    document.getElementById("display").appendChild(head);
}
function reset(){
    document.getElementById("headid").remove();  // this remove method actually removes the 
    // whole element 
    
}*/
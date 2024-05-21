var btn=document.querySelector(".btn");

// adding the event
btn.addEventListener("click",hex);

var hex_values=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
function hex(){
    var hex_color='#';
    for(i=0;i<=5;i++){
       let ranum=Math.floor(Math.random()*hex_values.length);
       hex_color+=hex_values[ranum];
    }                                                  // this loop will provide us our hex color 
   if(hex_color.length==7){
    document.getElementsByTagName("main")[0].style.backgroundColor=hex_color;
    document.querySelector(".color").textContent=hex_color;
   }
   else{hex();}
}
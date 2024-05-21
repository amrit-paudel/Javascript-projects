function generate(){
    var container=document.getElementById("cc");
    var insidediv=document.createElement("div");
    var insideimg=document.createElement("img");
    insideimg.setAttribute("src","https://media.giphy.com/media/6vj5quVNRhoQw/giphy.gif");
    insidediv.setAttribute("id","insideid")
    insidediv.appendChild(insideimg);
    container.appendChild(insidediv);
    
}
function clearr(){
    var inside=document.querySelector('#insideid');
    inside.remove();
}
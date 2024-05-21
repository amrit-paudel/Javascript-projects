// first selecting all the images
const images = document.querySelectorAll("img");
images.forEach((item) => {
    item.addEventListener("click", showImg);
})

function showImg() {
    // lets create an element 
    const imgcont = document.createElement('div');
    imgcont.id = "imageContainer";
    document.querySelector(".grid").appendChild(imgcont);
    const imagetag = document.createElement("img");
    imagetag.id="highlightedImage";
    imgcont.appendChild(imagetag);
    imagetag.src = this.src;


    const container = document.querySelector("#imageContainer");
    const highlightedImage=document.querySelector("#highlightedImage");

    container.addEventListener("click", function(e){remove(e)});
}



// function to remove the image when clicked at other than at inside image
function remove(e) {
    if(e.target.id==='highlightedImage'){return}
    else{e.target.remove()}                                                                      // here comes the power of add event listener and also e.target instead of e.currentTarget
    
}





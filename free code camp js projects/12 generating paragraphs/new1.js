const para_array=[
    ` 1  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.


    `,


    ` 2  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    
    
    `,


    ` 3   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    
    
    `,

    ` 4   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    
    
    `,

    ` 5   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    
    
    `,

    ` 6   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    
    
    `,
     
]

const input=document.querySelector("#no-of-para");
const generate=document.querySelector("#generate-btn");
const article=document.querySelector(".lorem-text");

generate.addEventListener("click",()=>{
    article.textContent=null;                                                           // everytime the click event is listened everything inside the article is removed at the beginning 
    setPara(input.value);
})


// function to set the paragaph if the number of paragraph is supplied 
function setPara(para_no){
    if(para_no==0){setRandomPara()};

    if(para_no<=para_array.length){
        for(i=0;i<=para_no-1;i++){
            article.textContent+=para_array[i];
        }
    }
    else{
        var difference=para_no-para_array.length;
        for(i=0;i<=para_array.length-1;i++){
            article.textContent+=para_array[i];
        }
        for(i=0;i<=difference-1;i++){
            article.textContent+=para_array[i];
        }
    }
}


// function to set the random paragraph 
// if no any number is supplied 
function setRandomPara(){
    var random=Math.floor(Math.random()*7);
    article.textContent=para_array[random];
}
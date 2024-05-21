const todoinput=document.querySelector(".to-do-input");
const addbtn=document.querySelector(".add");
const todolist=document.querySelector(".to-do-list");

// all we wanna do is to add list items on clicking the addbtn

addbtn.addEventListener("click",addlist);



// addlist function to add the lists 
function addlist(event){
// prevent form from submitting  
event.preventDefault();

// creating to do list
const tododiv=document.createElement("div");

// we don't want an empty to-do-list  
if(todoinput.value!=" "){
    todolist.appendChild(tododiv);
}

// adding a class for easy stylling 
tododiv.classList.add("list-container");

const item=document.createElement("li");
item.classList.add("list-item");

// adding value to to-do-list 
item.innerText=todoinput.value;

// creating the buttons
const completeButton=document.createElement("button");
completeButton.innerHTML="<i class='fas fa-check'></i>";
completeButton.classList.add("check");
completeButton.setAttribute("onClick","examine(event)");

const trashButton=document.createElement("button");
trashButton.innerHTML="<i class='fas fa-trash'></i>";
trashButton.classList.add("trash");
trashButton.setAttribute("onClick","examine(event)");

// now appending everything to the tododiv
tododiv.appendChild(item);
tododiv.appendChild(completeButton);
tododiv.appendChild(trashButton);

// after showing the to-do-list we don't want our inputed text to shown there
todoinput.value=" ";

}


// examine function to examine if list is completed or not
function examine(e){
    const todo=e.currentTarget.parentElement;
    if(e.currentTarget.classList.contains("trash")){
        
        
       todo.classList.add("fall");
        todo.addEventListener("transitionend",(e)=>{
            e.currentTarget.remove(); 
        })
         

    }
    if(e.currentTarget.classList.contains("check")){
       todo.firstElementChild.classList.toggle("completed");
    }
}

const select=document.querySelector("select");
select.addEventListener("click",(e)=>{
  const value=e.target.value;
  const todos=todolist.children;
  switch(value){
      case "all":
          for(item of todos){item.style.display="flex"};
          break;
      case "completed":
          for(item of todos){
              if(item.firstElementChild.classList.contains("completed")){
                item.style.display="flex";
              }
              else{
                  item.style.display="none";
              }
          }
          break;
      case "uncompleted":
          for(item of todos){
              if(!item.firstElementChild.classList.contains("completed")){
                  item.style.display="flex";
              }
              else{
                  item.style.display="none";
              }
          }
          break;
  }
})


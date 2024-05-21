var menulist=[
    {
        id:1,
        title:"buttermilk pancakes",
        category:"breakfast",
        price:"15.99",
        img:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:2,
        title:"diner double",
        category:"lunch",
        price:"13.99",
        img:"https://images.pexels.com/photos/3442389/pexels-photo-3442389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:3,
        title:"bacon overflow",
        category:"breakfast",
        price:"13.99",
        img:"https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:4,
        title:"country delight",
        category:"breakfast",
        price:"13.99",
        img:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:5,
        title:"egg attack",
        category:"lunch",
        price:"13.99",
        img:"https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:6,
        title:"American classic",
        category:"lunch",
        price:"13.99",
        img:"https://images.pexels.com/photos/4552128/pexels-photo-4552128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:7,
        title:"God zilla milkshake",
        category:"shakes",
        price:"13.99",
        img:"https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:8,
        title:"Oreo Dream",
        category:"shakes",
        price:"13.99",
        img:"https://images.pexels.com/photos/2611811/pexels-photo-2611811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    {
        id:9,
        title:"Quarantine buddy",
        category:"shakes",
        price:"13.99",
        img:"https://images.pexels.com/photos/3951878/pexels-photo-3951878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:`this is one of the very important dish, you should defnitely try this out it is very much amazing 
        and it is very much tasty so you should try is out and also inform us how was the dish  `,
    },
    
    

]

var btns=document.querySelectorAll('.buttons > button');
for(i=0;i<=btns.length-1;i++){
    btns[i].addEventListener("click",(e)=>{
        setMenu(e.currentTarget);
    })
}

function setMenu(currentTarget){
     const menutype=currentTarget.id;
     
     const specificMenuList=menulist.filter((item)=>{
         if(menutype==='all'){return item}
         if(menutype==item.category){return item}
         
     })
     
    // now converting everything inside that specificMenuList to the string and latter putting that string in to the inner HTML
    let specificMenuString=specificMenuList.map((item)=>{
        return `
        <div class="title-image">
        <img src= ${item.img}  alt="pancakes">
    </div>
    <div class="desc">
        <h3 class="food-title"> ${item.title} <span class="food-price"> ${item.price} </span></h3> 
        <p class="food-desc">
            ${item.desc}
        </p>
    </div>
        `
    })
    
    // using .join()  method to convert the specificMenuString in to a proper listed string 
    specificMenuString=specificMenuString.join(" ");
    console.log(specificMenuString)

    // now setting inside the inner HTMl 
    document.querySelector("article").innerHTML=specificMenuString;
}












/*
// getting the required variables 
var food_container=document.querySelector(".food-container");

window.addEventListener("DOMContentLoaded",function(){
    let food_list_string= make_data_string(menulist);
   

    food_list_string=food_list_string.join("");
    food_container.innerHTML=food_list_string;
})


// 
function make_data_string(data_array){                                  // this one makes the template string and retuens us 

                                                                        // making such function always helps as we can call when needed and we donot need to type same code again and again 

    let food_list_string=data_array.map(function(item){
        return `
        <article>
        <div class="title-image">
            <img src="${item.img}" alt="pancakes">
        </div>
        <div class="desc">
            <h3 class="food-title">${item.title}<span class="food-price">      $${item.price}</span></h3> 
            <p class="food-desc">
                ${item.desc}
            </p>
        </div>
    </article>
        `
    })
    
    return food_list_string;

}

// getting all the buttons 
var buttons =document.getElementsByTagName("button");


for(i=0;i<=buttons.length-1;i++){
    
    buttons[i].addEventListener("click",function(e){
        findarray(e.currentTarget);
    })
}

function findarray(currentTarget){
    const food_category=currentTarget.dataset.id;
    new_array_data=menulist.filter(function(item){
        
        if(item.category==food_category){return item};

    })
    
    let new_string_data=make_data_string(new_array_data);
    new_string_data=new_string_data.join(" ");
    food_container.innerHTML=new_string_data;
}

////

const array=['Amrit','Poudel','Aashsih','paudel'];

const newarray=array.filter((item)=>{
    return item+"added by map ";
})

console.log(newarray)*/
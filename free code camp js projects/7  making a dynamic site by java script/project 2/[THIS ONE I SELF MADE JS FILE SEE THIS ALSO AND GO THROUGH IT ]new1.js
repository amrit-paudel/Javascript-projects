var original_array_data=[
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

// getting the required variables 
var food_container=document.querySelector(".food-container");

window.addEventListener("DOMContentLoaded",function(){
    let food_list_string= make_data_string(original_array_data);
   

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
    let new_array_data=[];
     original_array_data.map(function(item){
         if(currentTarget.id=="all"){return new_array_data.push(item);}
         if(currentTarget.id==item.category){
            return new_array_data.push(item);                                 // if we had not used this than our new_array_data will be returned as an object .push() is a really good property                                             
        }
    })
    
    let specific_food_list_string= make_data_string(new_array_data);          // and if new_array_data was an object than it will also passed as an object and the calling function might not work 
    specific_food_list_string=specific_food_list_string.join(" ");
    food_container.innerHTML=specific_food_list_string;
}
// first getting all the necessary  elements 
const img=document.getElementById("person_img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevbtn=document.getElementById("previous");
const nextbtn=document.getElementById("next_btn");
const randombtn=document.getElementById("random_btn");

// let's create an array of the objects having all the necessary data

const reviews=[
    {
        id:1,
        name:"Steven strange",
        job:"A Doctor",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPl56EiQdswnFh442I1X_O4mpaF4ljtcqG7A&usqp=CAU",
        text:`Hi my name is Steven Strange and I ama doctor . 
        I was passionate anout doctors since my child hood.
        I believe being a Doctor is one of the most precious gift god has ever given to us .`,
    },
    {
        id:2,
        name:"Ram sharma",
        job:"A government serent in Nepal",
        img:"https://cdn1.expresscomputer.in/wp-content/uploads/2016/02/24215726/muktesh2.jpg",
        text:`Hi i am a governmental officer  in Nepal and believe me,
        It's the most pathetic job in the world, you got no any good time, and the 
        salary is very insufficient you cannot even feed to your childrens so you
        are forced to take the bribe`,
    },
    {
        id:3,
        name:"Aashish poudel",
        job:"Tero bau lae kam diyaa xaa raw ",
        img:"https://scontent.fktm6-1.fna.fbcdn.net/v/t1.0-9/10897041_1572622856307513_772221390825213101_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=Gaaw_3HgIQkAX-7qC-Z&_nc_ht=scontent.fktm6-1.fna&oh=062bf080b369e481b3df1c25b3b5e1d1&oe=5F4878B9",
        text:`Namaskar maa kai kam naa garnae, jailae pani khannie, hagnie ani basnie.
        hunaa taa mah aailae class 11 maa padhyaa jasto garxuu hai . `
    }
];

var count=0;
window.addEventListener("DOMContentLoaded",()=>{
    assign(count);
})

nextbtn.addEventListener("click",(e)=>{
    count++;
    assign(count);
    if(count==reviews.length-1){e.currentTarget.classList.add('dispnone');prevbtn.classList.remove('dispnone')}
})


prevbtn.addEventListener("click",(e)=>{
    console.log(count)
    count--;
    assign(count);
    if(count==0){nextbtn.classList.remove('dispnone');e.currentTarget.classList.add('dispnone');}
})

randombtn.addEventListener("click",(e)=>{
    let rnum=Math.floor(Math.random()*reviews.length);
    assign(rnum);
})


function assign(indexnum){
    img.src=reviews[indexnum].img;
    author.textContent=reviews[indexnum].name;
    job.textContent=reviews[indexnum].job;
    info.textContent=reviews[indexnum].text;
}







/*let count=0;

// coding by another method 
window.addEventListener("DOMContentLoaded",function(){
    var obj=reviews[count];
    img.src=obj.img;
    author.textContent=obj.name;
    job.textContent=obj.job;
    info.textContent=obj.text;
})

nextbtn.addEventListener("click",function(){               // assigning event to next button 
    count++
    if(count>reviews.length-1){count=0;}
    assign(count);
})

prevbtn.addEventListener("click",function(){              // assigning event to previous button 
    count--;
    if(count<0){count=reviews.length-1}
    assign(count);
})

randombtn.addEventListener("click",function(){           // assigning event to surprise me button 
    count=random();
    assign(count);
})

function random(){
    return Math.floor(Math.random()*3);
}

function assign(item){
    var obj=reviews[item];
    img.src=obj.img;
    author.textContent=obj.name;
    job.textContent=obj.job;
    info.textContent=obj.text;
}

*/






/*  window.addEventListener("DOMContentLoaded",assign);

function assign(){

   let current_obj=reviews[count]; 
    img.src=current_obj.img;
    author.textContent=current_obj.name;
    job.textContent=current_obj.job;
    info.textContent=current_obj.text;
    count++;


}

// now applying event while clicking 

nextbtn.addEventListener("click",assignnext);
function assignnext(){
   
    if(count>2){count=0};
    let current_obj=reviews[count]; 
    img.src=current_obj.img;
    author.textContent=current_obj.name;
    job.textContent=current_obj.job;
    info.textContent=current_obj.text;
    count++;                                                                      // here one thing is to be noticed that count is outside so everytime when function is called count is increased 
    
}

prevbtn.addEventListener("click",assignprev);
function assignprev(){
    count--;
    if(count<0){count=2};
    let current_obj=reviews[count]; 
    img.src=current_obj.img;
    author.textContent=current_obj.name;
    job.textContent=current_obj.job;
    info.textContent=current_obj.text;
    
}

randombtn.addEventListener("click",assignrandom);

function assignrandom(){
    count=random();
    let current_obj=reviews[count]; 
    img.src=current_obj.img;
    author.textContent=current_obj.name;
    job.textContent=current_obj.job;
    info.textContent=current_obj.text;
    
}

function random(){
    return Math.floor(Math.random()*3)
}*/


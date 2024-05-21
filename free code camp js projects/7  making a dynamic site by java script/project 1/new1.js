var intro=[
    {
        name:'Amrit poudel',
        address:'Ratnanagar, Chitwan',
        phone_number:'9840505111',
        occupation:'Currently only reading'
    },
    {
        name:'Aashish poudel',
        address:'Bharatpur, Chitwan',
        phone_number:'9843109199',
        occupation:'Currently only reading'
    },
    {
        name:'Ram Sharma',
        address:'Gaidakot, Nawalpur',
        phone_number:'9845126584',
        occupation:'Owns a locat shop '
    },
    {
        name:'Sita Sharma',
        address:'Morang',
        phone_number:'9865448712',
        occupation:'owns her own small scale business'
    },
    {
        name:'Ramesh sharma',
        address:'Jhapa',
        phone_number:'9855652103',
        occupation:'owns his own digitalmarketing platform'
    },
    {
        name:'Sarita Chalishe',
        address:'Sunsari',
        phone_number:'9845447017',
        occupation:'Owns a cattle farm'
    }
]

// getting the variables from markup
var intro_container=document.querySelector(".intro-container");
window.addEventListener("DOMContentLoaded",function(){
    assigndata(intro);
});

function assigndata(intro){
    let  markupdata=intro.map(function(item){
        return `
        <article>
         <h2>Name: ${item.name}</h2>
         <h3>Address:${item.address}</h3>
         <h4>Phone number:${item.phone_number}</h4>
         <h5>Occupation: ${item.occupation}</h5>
       </article>`
    })

    markupdata=markupdata.join("");
    intro_container.innerHTML=markupdata;
}






/*
  return `
 <article>
  <h2>Name: ${item.name}</h2>
  <h3>Address:${item.address}</h3>
  <h4>Phone number:${item.phone_number}</h4>
  <h5>Occupation: ${item.occupation}</h5>
</article>`
*/
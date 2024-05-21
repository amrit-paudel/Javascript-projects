var rcp=document.querySelectorAll("#rock,#scissor,#paper");
console.log(rcp);//temp 

for(i=0;i<=rcp.length-1;i++){
    rcp[i].addEventListener("click",(e)=>{ 
        const userchoice=e.currentTarget.id;
        console.log(userchoice) // temp
        
        // this function will give us the choice picked by our computer 
        const computerchoice=random_choice();
        console.log(computerchoice)
        
        // this function will compute the winner and return us the winning text 
        // since the returning value is only one so here we store that in one variable 
        const winningTxt=declare_winner(userchoice,computerchoice);
        console.log(winningTxt);
        

        //this function will dislay the output to the screen 
        display(userchoice,computerchoice,winningTxt);
    })
}

// function to bring the computer choice
function random_choice(){
    var ranNum=Math.floor(Math.random()*3);
    return rcp[ranNum].id;
}

// function to compute the winner 
function declare_winner(userchoice,computerchoice){
    if(userchoice==computerchoice){
        return 'Game Tied'
    }
    else if(userchoice=='rock' && computerchoice=='scissor'){return 'You Win '}
    else if(userchoice=='rock'&& computerchoice=='paper'){return 'You Loose'}
    else if(userchoice=='scissor' && computerchoice=='rock'){return 'You loose'}
    else if(userchoice=='scissor' && computerchoice=='paper'){return 'You Win'}
    else if(userchoice=='paper' && computerchoice=='rock'){return 'You win'}
    else if(userchoice=='paper' && computerchoice=='scissor'){return 'You loose'};

}


// function to display the winning graphic
function display(userchoice,computerchoice,winningTxt){
    const user=document.querySelector(`#${userchoice}`);
    const computer=document.querySelector(`#${computerchoice}`);
    console.log(user)
    
    document.querySelector('.images').innerHTML=` 
      <div id="rock" <!-onclick="rcpgame(this)">
        ${user.innerHTML}
      </div>
    
     <h1> ${winningTxt} </h1> 
    <div id="rock" <!-onclick="rcpgame(this)">
      ${computer.innerHTML}
    </div>
    `
}

// when user clicks on the play again button
document.querySelector(".play-again").addEventListener("click",()=>{
    console.log('clicked')
    document.location.reload();                                                                                        /* this function will cause the page to reload */
   
})
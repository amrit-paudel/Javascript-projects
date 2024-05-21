 
   
   function random(){


     
  function rcpgame(choicenode){
    var userchoice=choicenode.id; /*     HERE WE GOT THE CHOICE OF OUR USER     */
    
    var botchoice=choiceofbot();  /* BOT CHOICE WILL BE RETURNED BY THIS FUNCTION */ 
    
    function choiceofbot(){
        var ranbotnum=Math.floor(Math.random() * 3);
        var choicesarray=["rock","scissor","paper"];
        return choicesarray[ranbotnum];
    }
    
    /*console.log("my choice is "+userchoice);
    console.log("bot choice is "+botchoice);*/   // HERE SEE HOW USER CHOICE AND BOT CHOICES ARE MADE
    
    function compare(uchoice,bchoice){ // determinning the winner, looser or game tied through this function 
         if(uchoice===bchoice){
                return "Game Tied Try Again";
             }
         else{
              return compareagain(uchoice,bchoice);
            }
    }
    
    // NOW ANOTHER COMPARE WHEN CHOICES DO NOT TALLY 
    function compareagain(uchoice,bchoice){
          if(uchoice=='rock'  &&  bchoice=='scissor')  { return 'You Win '}
          if(uchoice=='rock'  &&  bchoice=='paper')  { return 'You loose '}
          
          if(uchoice=='scissor'  &&  bchoice=='rock')  { return 'You loose '}
          if(uchoice=='scissor'  &&  bchoice=='paper')  { return 'You Win '}
    
          if(uchoice=='paper'  &&  bchoice=='rock')  { return 'You Win '}
          if(uchoice=='paper'  &&  bchoice=='scissor')  { return 'You Loose '}
    }
    
    // NOW WE NEED THAT OUTPUT TEXT  AND FOR THAT WE NEDD TO CALL THE FUNCTION compare()
    
    var outputtxt=compare(userchoice,botchoice);
    
    function output(u_choice,b_choice,output_txt){  // FINALLY THIS TEXT WILL SHOW THE OUTPUT PROPERLLY
                                 // IT WILL MAINLY SHOW THE OUTPUTTXT  AND  THE USERCHOICE IMAGE  AND  BOTCHOICE  IMAGE
    
           var udiv=document.getElementById(u_choice);
           var bdiv=document.getElementById(b_choice);
           var txtnode=document.createTextNode(output_txt);
           var head=document.createElement("h1");
           head.appendChild(txtnode);
           var tdiv=document.createElement("div");
           tdiv.appendChild(head);
           tdiv.setAttribute("class","class1");
           
    
           document.getElementById("rock").remove();        // have a doubt in here lets see
                                                            // WORKED PERFECTLY HERE SO YOU SEE THOSE ID'S CLASSES ARE ACCESSIBLE FROM EVERY FUNCTION INSIDE OF THE JAVA SCRIPT 
           document.getElementById("scissor").remove();
           document.getElementById("paper").remove();
    
    
           var parentnode=document.getElementsByClassName("images")[0];
           parentnode.appendChild(bdiv);
           parentnode.appendChild(tdiv);
           parentnode.appendChild(udiv);
    
    
          
    }
    
    // CALLING  THE  OUTPUT  FUNCTION 
    output(userchoice,botchoice,outputtxt);
    
    
    
    
    
    
    
    }

 

   }
//  first hooking the number range slider and number box
const characterRange=document.getElementById("rangeOfCharacters");
const characterNumber=document.getElementById("numberOfCharacters");
characterNumber.addEventListener("input",setCommonValue);
characterRange.addEventListener("input",setCommonValue);

function setCommonValue(e){
 const value=e.target.value;
 characterRange.value=value;
 characterNumber.value=value;
}

// getting all  other required elements and items 

const numberOfCharacters=document.querySelector("#numberOfCharacters");
const includesUppercase=document.querySelector("#includesUppercase");
const includesNumbers=document.querySelector("#includesNumbers");
const includesSymbols=document.querySelector("#includesSymbols");
const generateButton=document.querySelector("#generate");
const displayPassword=document.querySelector("[data-display-password]");

generateButton.addEventListener("click",()=>{
    generatePassword(numberOfCharacters.value,includesUppercase.value,includesNumbers.value,includesSymbols.value);

})

// function to generate password 
function generatePassword(totalCharacters,uppercase,numbers,symbols){
    const asciCodeArray=constructArray(uppercase,numbers,symbols);
    const passwordGeneratingArray=[];
    for(let i=0;i<=asciCodeArray.length-1;i++){
      passwordGeneratingArray.push(String.fromCharCode(i));
    }
    const password=[];
    for(i=0;i<=totalCharacters-1;i++){
        password.push(passwordGeneratingArray[Math.floor(Math.random()*passwordGeneratingArray.length)]);
        
    }
    
    // this one displays the password 
    displayPassword.value=password.join(" ");


}

// function to construct array
function constructArray(uppercase,numbers,symbols){
    const array=[];
    for(let i=97;i<=122;i++){
        array.push(i);
    };
    if(uppercase){
        for(let j=65;j<=90;j++){
            array.push(j);
        }
    };
    if(numbers){
        for(let i=48;i<=57;i++){
            array.push(i);
        }
    };
    if(symbols){
        for(let i=33;i<=47;i++){
            array.push(i);
        };
        for(let i=58;i<=64;i++){
            array.push(i);
        };
        for(let i=91;i<=96;i++){
            array.push(i);
        };
        for(let i=123;i<=126;i++){
            array.push(i);
        };
    }

    return array;

}

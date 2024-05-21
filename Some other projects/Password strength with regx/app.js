const meter=document.getElementById("password-meter");
const passwordContainer=document.getElementById("password-holder");
const remarks=document.getElementById("remarks");

passwordContainer.addEventListener("input",checkWeakness);

function checkWeakness(){
    const password=passwordContainer.value;
    const array=[];
    array.push(checkForLength(password));
    array.push(checkForLowercase(password));
    array.forEach((item)=>{
        
        meter.style.setProperty("--fill",item.fill);
        remarks.innerHTML=`your password is ${item.strength}`;
        remarks.innerHTML+=item.remarks;
    })
}

function checkForLength(password){
    if(password.length<8){
        return{
            strength:'weak',
            fill:10,
            remarks:`     Make your password a bit longer`,
        }
    }

    if(password.length>=8 & password.length<=10){
        return{
            strength:'strong',
            fill:70,
            remarks:`      You could make a bit more longer`,
        }
    }
    if(password.length>10){
        return{
            strength:'very strong',
            fill:100,
            remarks:`       Your password has secured length`,
        }
    }
}

function checkForLowercase(password){
    const regx=/[a-z]/g;
    const lowerCaseLetters=password.match(regx);
    if(lowerCaseLetters.length<8){
        return{
            strength:'weak',
            fill:10,
            remarks:'       You could use more lowercase'
        }
    }
    if(lowerCaseLetters.length>8){
        return{
            strength:'strong',
            fill:70,
            remarks:`you have used good amount of lowercases`
        }
    }
}
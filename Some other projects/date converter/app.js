// checking the pallindrome 


/*function pallindrome(text){
 let textArray=text.split("");
 textArray.reverse();
 reverseText=textArray.join("");
 if(text===reverseText){
     return true;
 }
 else{ 
     return false;
 }
}
*/
// writing a bit short and nice code 
 const pallindrome=str=>{
     str=str.toLowerCase();
     return str==str.split("").reverse().join("");       // in javascript ultimately everything evaluates to boolean true or false 
 }

 
console.log(pallindrome('racecar'));
console.log(pallindrome('amritpoudel'));


// fizzbuzz challenge 

function fizzBuzz(n){
    for(i=1;i<=n;i++){
        if(i%3==0 & i%5==0){console.log("fizzbuzz")}
        else if(i%3==0){console.log("fizz")}
        else if(i%5==0){console.log("buzz")}
        else{
          console.log(i);
        }
    }
}

fizzBuzz(2)


// anagram challenge 
function anagram(str1,str2){
    str1.toLowerCase();                  // or we can take both to the uppercase if we want 
    str2.toLowerCase();
    const str1Array=str1.split("");
    const str2Array=str2.split("");
    const result=[];
    for(let i=0;i<=str2Array.length-1;i++){
        result.push(str1Array.includes(str2Array[i]));
    }
    if(result.includes(false)){return false}
    if(str1Array.length!==str2Array.length){return false}
    else{return true}
}

console.log(anagram("friend","finder"));

// finding the vowels
// here by the regular expressions 
const findVowels=text=>{
    const regx=/[aeiou]/g;
    text=text.toLowerCase();
    const vowelsArray=text.match(regx);
    return `number of vowels are ${vowelsArray.length} `
}

console.log(findVowels("amRIT"));


// fibonacci sequence contained inside an array 
const fibonacci=num=>{
    const fibonacciArray=[];
    for(i=0;i<=num;i++){
        
        if(i==0){fibonacciArray.push(i)}
        else if(i==1){fibonacciArray.push(i)}
        else{
            fibonacciArray.push(fibonacciArray[i-2]+fibonacciArray[i-1])
        }
    }

    console.log(fibonacciArray);
    return fibonacciArray[num];
}

console.log(fibonacci(5))

// fibonacci by recursion
const fibo=num=>{
    if(num<2){return num}
    else{
        return fibo(num-1)+fibo(num-2);
    }
}
console.log(fibo(5))

// factorial by recursion 
const fact=num=>{
    if(num<=1){return 1}
    else{
        return num*fact(num-1);
    }
}
console.log(fact(4))


// problems on recursion 
// recursion is basically an infinite loop
// all we need is a base case
// and recursive case



// 1) Sum of first n numbers by recursion 

function sumAll(num){
    if(num==1){return 1}
    else{
        return num+sumAll(num-1);
    }
}

console.log(sumAll(100));


// 2) function that takes base and exponent and gives us power of any number 

function power(base,exponent){
      console.log("heloo I am amrit poudel")
}
power(2,3);
// everything can be done with objects see below

// Greeting like "Hello world " by using class and object 
class Greeting{
    constructor(greeting_string){
        this.greeting_string=greeting_string;
    }
    greet(){
        console.log(this.greeting_string)
    }

}

const greeting=new Greeting("Hello World");
greeting.greet();

// Sum of two numbers by class and objects 
class Operation{
    constructor(num1,num2,operationName){
        this.num1=num1;
        this.num2=num2;
        this.operationName=operationName;
    }
    result(){
        switch(this.operationName){
            case 'sum':
                console.log(`the ${this.operationName} of numbers is ${this.num1+this.num2}`);
                break;

            case 'product':
                console.log(`the ${this.operationName} of numbers is ${this.num1*this.num2}`);
                break;
            
            case 'substract':
                console.log(`the ${this.operationName} of the numbers is ${this.num1-this.num2}`);
                break;

            case 'divide':
                console.log(`the ${this.operationName} of numbers is ${this.num1/this.num2}`);
                break;
                
        }
        
    }
}

// sum of numbers 
const sum=new Operation(10,20,'sum');
sum.result();
// product of numbers
const product=new Operation(50,60,'product');
product.result();

// division of numbers is 
const division=new Operation(200,0,'divide');
division.result();

// substraction of numbers 
const substract=new Operation(100,50,'substract');
substract.result();


const name="amrit";
const temp=name.slice(2);
console.log(temp);
name.indexOf(temp);
console.log(name)
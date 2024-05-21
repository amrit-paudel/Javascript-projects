class Compute{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
        this.hello();      // so it means at first constructor function is going to get called.
                           // when we create an object.
    }
    hello(){
        console.log("heloo");
    }
    sum(){
        return this.num1+this.num2;
    }
    substract(){
        console.log(`the difference of the numbers is ${this.num2-this.num1}`)
    }
    changenum(number){
        this.num1=number;
    }
}

const computeobj=new Compute(20,100);
computeobj.changenum(1500);                                             // remember the methods inside the classes have full control inside their's class they can
                                                                        // modify ,  change, replace,...... the values of keys inside the class.
console.log("the sum of the numbers is "+computeobj.sum());

const computeobj2=new Compute(500,800);
computeobj2.substract();

// conclusions
// 1) the job of a constructor is just to construct the objects with the help of provided values 
// 2) methods inside the class works on those values later on and makes it easy for objects to do the task.



// this is a class 
class intro{
    constructor(name,address,phone){
        this.name=name;
        this.address=address;
        this.phone=phone;
    }
}

// these are objects created out of those classes 
const intro1=new intro("Amrit poudel","Chitwan","984050");
const intro2=new intro("Ashish","Itarahi","985060");

// this is an object 
const intro0={
    name:"Amrit poudel",
    address:"Ratnanagar Chitwan",
    phone:"9840505111",
}

console.log(intro0);
console.log(intro1);
console.log(intro2);
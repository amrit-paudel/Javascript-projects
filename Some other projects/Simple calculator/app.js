class Calculator{
    constructor(previousOperandNode,currentOperandNode){
        this.previousOperandNode=previousOperandNode;
        this.currentOperandNode=currentOperandNode;
        this.clear();
    }

    clear(){
     this.currentOperand='';
     this.previousOperand='';
     this.currentOperandNode.innerHTML=this.currentOperand;
     this.previousOperandNode.innerHTML=this.previousOperand;
     this.operator='';
    }

    delete(){
        this.currentOperandNode.innerHTML=this.currentOperandNode.innerHTML.slice(1);
    }

    appendNumber(number){
     this.currentOperand=number;
     if(this.currentOperand=='.' && this.currentOperandNode.innerHTML.includes('.')){
         return;
        }
     this.currentOperandNode.innerHTML+=this.currentOperand;
    }

    operation(operator){
      console.log(operator);
      this.operator=operator;
      if(this.previousOperandNode.innerHTML.length==0){
      this.previousOperandNode.innerHTML=this.currentOperandNode.innerHTML;
      }
      else{
        const previousOperandValue=parseFloat(this.previousOperandNode.innerHTML);
        const currentOperandValue=parseFloat(this.currentOperandNode.innerHTML);
          switch(this.operator){
              case '+':
                  this.previousOperandNode.innerHTML=previousOperandValue+currentOperandValue;
                  break;
              case '-':
                  this.previousOperandNode.innerHTML=previousOperandValue-currentOperandValue;
                  break;
              case '*':
                  this.previousOperandNode.innerHTML=previousOperandValue*currentOperandValue;
                  break;
              case '/':
                  this.previousOperandNode.innerHTML=previousOperandValue/currentOperandValue;
                  break;
          }
      }
      this.currentOperandNode.innerHTML='';
    }

    compute(){
        const previousOperandValue=parseFloat(this.previousOperandNode.innerHTML);
        const currentOperandValue=parseFloat(this.currentOperandNode.innerHTML);
      switch(this.operator){
          case '+':
              this.computeValue=previousOperandValue+currentOperandValue;
              console.log(this.computeValue);
              break;
          case '-':
              this.computeValue=previousOperandValue-currentOperandValue;
              break;
          case '*':
              this.computeValue=previousOperandValue*currentOperandValue;
              break;
          case '/':
              this.computeValue=previousOperandValue/currentOperandValue;
              break;
          default:
              console.log("Enter a value Operator");
      }

      this.updateDisplay(this.computeValue);
    }

    updateDisplay(computevalue){
      this.previousOperandNode.innerHTML='';
      this.currentOperandNode.innerHTML=computevalue;

    }
}

const currentOperandNode=document.querySelector('[data-current-operand]');
const previousOperandNode=document.querySelector('[data-previous-operand]');
const allClear=document.querySelector('[data-all-clear]');
const deleteButton=document.querySelector('[data-delete]');
const equals=document.querySelector('[data-equals]');
const numbers=document.querySelectorAll('[data-number]');
const operators=document.querySelectorAll('[data-operation]');


// creating an object from the class
const calculator=new Calculator(previousOperandNode,currentOperandNode);

console.log(calculator)

// appending numbers 
numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        calculator.appendNumber(e.currentTarget.innerHTML);
    })
})

// clearing everything through AC ( All Clear )
allClear.addEventListener("click",()=>{
    calculator.clear();
})

// deleting on pressing del button 
deleteButton.addEventListener("click",()=>{
    calculator.delete();
})

// passing the operator for the operation  
operators.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{
        calculator.operation(e.currentTarget.innerHTML);
    })
})


// computing on clicking the equals to button 
equals.addEventListener("click",()=>{
    calculator.compute();
})
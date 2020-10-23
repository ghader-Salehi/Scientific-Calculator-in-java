

// const buffer = []

// const opCallback = opName => () => {
//     let currentVal = parseFloat($input.value);
//     if (opName === "percent") {
//       currentVal *= 0.01;
//       $input.value = currentVal;
//     }
//     else {
//       if (buffer && buffer.length) {
//         buffer.push({ value: currentVal });

//         const result = evaluate(buffer);

//         buffer.push({ value: result });
//         buffer.push({ value: opName });

//         $input.value = "";
//       }
//       else {
//         buffer.push({ value: currentVal });
//         buffer.push({ value: opName });
//         $input.value = "";
//       }
//     }
//   }

// const evaluate = buffer => {
//   const secondOperand = buffer.pop().value;
//   const operator = buffer.pop().value;
//   const firstOperand = buffer.pop().value;

//   switch (operator) {
//     case "add":
//       return firstOperand + secondOperand;
//       break;
//     case "subtract":
//       return firstOperand - secondOperand;
//       break;
//     case "multiply":
//       return firstOperand * secondOperand;
//       break;
//     case "divide":
//       return firstOperand / secondOperand;
//       break;
//     default:
//       return secondOperand;
//   }
// }

// for (const opName of [ "add", "subtract", "multiply", "divide", "percent" ]) {
//   document.querySelector(`.op__key[op=${opName}]`).onclick =
//     opCallback(opName);
// }

// document.querySelector(".eq__key").onclick =
//   () => {
//     if (buffer && buffer.length) {
//       buffer.push({ value: parseFloat($input.value) });
//       $input.value = evaluate(buffer);
//     }
//   }




const input = document.querySelector('input')
const  OPERATORS = ['Sin' , 'Cos' , 'Tan' , 'Cot' ,'Sinh' , 'Cosh' , 'Tanh' , 'Coth','ln' , 'log' , 'ePx' , 'xP2', 'xPy','GHx' , 'Fx' , 'TwoPx' , 'e', 'p' , 'Sqrt', 'oneDIVx' ]


//add event on number keys to rigth number in input
document.querySelectorAll(".num__key").forEach(
 el =>
    el.onclick = () =>{
      input.value = input.value !=='0'? input.value+ el.innerHTML:el.innerHTML
    
    } 
 );


// change calculator to scientific calculator
 document.getElementById('sc-state').addEventListener('click' , function(e){
    if(e.target.innerText === 'SC'){
      //change to scientific
      document.querySelector('main').className = 'scientific-state'
      document.querySelector('main input').className = 'change-input-width'
      document.querySelectorAll('.more-buttons-hidden').forEach(function(item){
        item.className = 'more-buttons-shown'
        })
        activeAdditionalButtons()
        e.target.innerText = 'NS'
      }
      else{
        //return it to normal
        document.querySelector('main').classList.remove('scientific-state') 
        document.querySelector('main input').classList.remove('change-input-width')
        document.querySelectorAll('.more-buttons-shown').forEach(function(item){
          item.className = 'more-buttons-hidden'
          })
           e.target.innerText = 'SC'
           
        }
      }
 )
 //define clear button function
 document.querySelector(".op__key[op=clear]").onclick =
    () => input.value = 0

 //define negate button function
document.querySelector(".op__key[op=negate]").onclick = 
    () => input.value = -parseFloat(input.value)

// define dot(.) button
 document.querySelector(".dot__key").onclick = 
      () => input.value = input.value.includes('.')? input.value:input.value + "."

// printing 4 main operator      
document.querySelectorAll(".four_main_op").forEach(
  el =>{
    el.addEventListener('click' , function(e){
      input.value = input.value !=='0' && !checkForDuplicateOperations(input.value , e.target.innerHTML)?input.value + e.target.innerHTML:input.value
    })
  }
)
// define percent button 
document.querySelector('.op__key[op=percent]').onclick = 
  ()=>{
    let currentVal = parseFloat(input.value);
    currentVal *= 0.01;
    input.value = currentVal;
  }


document.querySelector('.eq__key').onclick = 
  ()=>{
    input.value = compute()
  }
   
  
 




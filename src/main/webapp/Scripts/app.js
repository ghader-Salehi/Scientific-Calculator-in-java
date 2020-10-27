
const input = document.querySelector('input')
const OPERATORS = ['sin' , 'cos' , 'tan' , 'cot' ,'ln' , 'log' , 'ePx' , 'xP2', 'xPy','GHx' , 'Fx' , 'TwoPx' , 'e', 'p' , 'Sqrt', 'oneDIVx' ]
const Main_Operators = ['+','-','*','/']
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
            //return to normal
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
    () =>{
        input.value = 0
        Parenthesis_Index = 0
    }

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
let Parenthesis_Swich = false
let Parenthesis_Index = 0

//Manage parenthesis
document.querySelector('.op__key[op=parenthesis]').onclick =
    ()=>{
        let CurrentValue = input.value
        ManageParenthesisForMainOperators(CurrentValue)
    }


document.querySelector('.eq__key').onclick =
    ()=>{

        try {
            input.value = compute()
        } catch (error) {
            alert('invalid input form')
            input.value = 0
            Parenthesis_Index = 0
        }

    }
   
  
 




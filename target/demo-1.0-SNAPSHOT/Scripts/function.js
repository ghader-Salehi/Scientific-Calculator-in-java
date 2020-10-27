const checkForDuplicateOperations = function(input , operation){
    const lastWord = input.slice(input.length-1 , input.length)

    if( isNaN(parseInt(lastWord)) && lastWord !==')')
        return true
    else
        return false
}

const activeAdditionalButtons = function(){
    for (const op of OPERATORS) {
        document.querySelector(`.more-buttons-shown[op=${op}]`).onclick = (e) =>
            opCallback(op);

    }
}
// ['Sin' , 'Cos' , 'Tan' , 'Cot' ,'ln' , 'log' , 'ePx' , 'xP2', 'xPy','GHx' , 'Fx' , 'TwoPx' , 'e', 'p' , 'Sqrt', 'oneDIVx' ]

const opCallback  = function(op){
    switch (op) {
        case 'sin':
            Manage_other_operators_parenthesis('sin(',true)
            break;
        case 'cos':
            Manage_other_operators_parenthesis('cos(',true)
            break;
        case 'tan':
            Manage_other_operators_parenthesis('tan(',true)
            break;
        case 'cot':
            Manage_other_operators_parenthesis('cot(',true)
            break;
        case 'ln':
            Manage_other_operators_parenthesis('ln(',true)
            break;
        case 'log':
            Manage_other_operators_parenthesis('log(',true)
            break;
        case 'ePx':
            Manage_other_operators_parenthesis('e^(',true)
            break;
        case 'xP2':
            if(input.value !=='0'){
                input.value += '^(2)'
            }
            else{
                alert('invalid format used')
                input.value = 0
                Parenthesis_Index = 0
            }
            break;
        case 'xPy':
            if(input.value !=='0'){
                Parenthesis_Index++
                input.value += '^('
            }
            else{
                alert('invalid format used')
                input.value = 0
                Parenthesis_Index = 0
            }
            break;
        case 'GHx':
            Manage_other_operators_parenthesis('abs(',true)
            break;
        case 'Fx':
            if(input.value !=='0'){
                input.value += '!'
            }
            else{
                alert('invalid format used')
                input.value = 0
                Parenthesis_Index = 0
            }
            break;
        case 'TwoPx':
            Manage_other_operators_parenthesis('2^(',true)
            break;
        case 'e':
            if(input.value !=='0'){
                if(checkLastChar(input.value.charAt(input.value.length-1)))
                    input.value += '2.7182818285'
                else
                    input.value += '*2.7182818285'
            }
            else{

                input.value = '2.7182818285'

            }
            break;
        case 'p':
            if(input.value !=='0'){
                if(checkLastChar(input.value.charAt(input.value.length-1)))
                    input.value += '3.1415926536'
                else
                    input.value += '*3.1415926536'
            }
            else{

                input.value = '3.1415926536'

            }
            break;
        case 'Sqrt':
            Manage_other_operators_parenthesis('sqrt(',true)
            break;
        case 'oneDIVx':
            Manage_other_operators_parenthesis('1/',false)
            break;
        default:
            break;
    }
}

const compute = function(){
    return eval(input.value)
}

const checkLastChar = (ch)=>{
    for (const op of Main_Operators) {
        if(ch === op)
            return true
    }
    return false
}
// || has english words
const ManageParenthesisForMainOperators = (CurrentValue)=>{
    if((!isNaN(CurrentValue.charAt(CurrentValue.length-1)) ||
        CurrentValue.charAt(CurrentValue.length-1) ===')' ||
        isWord(CurrentValue)) &&
        Parenthesis_Index !==0 &&
        CurrentValue !=="0"){
        Parenthesis_Swich = true
        Parenthesis_Index--
    }
    if(!Parenthesis_Swich){
        if( input.value !=='0'){
            if(CurrentValue.charAt(CurrentValue.length-1) !=='(' &&
                !checkLastChar(CurrentValue.charAt(CurrentValue.length-1)) ){
                input.value +='*('
                Parenthesis_Index++
            }
            else{
                input.value +='('
                Parenthesis_Index++
            }

        }
        else {
            input.value = '('
            Parenthesis_Index++
        }
    }
    else{
        input.value +=')'
        Parenthesis_Swich = false
    }
}


const Manage_other_operators_parenthesis = (operator,hasParethesis)=>{
    if(hasParethesis) Parenthesis_Index++
    if(input.value !=='0'){
        input.value += operator
    }
    else{
        input.value = operator
    }
}
const isWord = (CurrentValue)=>{
    let reg = new RegExp(/[a-z]/)
    if(reg.test(CurrentValue.charAt(CurrentValue.length - 1)))
        return true

}









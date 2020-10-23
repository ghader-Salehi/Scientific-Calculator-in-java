const checkForDuplicateOperations = function(input , operation){
    const lastWord = input.slice(input.length-1 , input.length)
    
    if( isNaN(parseInt(lastWord)) )
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
// ['Sin' , 'Cos' , 'Tan' , 'Cot' ,'Sinh' , 'Cosh' , 'Tanh' , 'Coth','ln' , 'log' , 'ePx' , 'xP2', 'xPy','GHx' , 'Fx' , 'TwoPx' , 'e', 'p' , 'Sqrt', 'oneDIVx' ]

const opCallback  = function(op){
    switch (op) {
        case 'Sin':
            input.value = Math.sin(parseInt(input.value))
            break;
        case 'Cos':
            console.log('Cos');
            break;  
        case 'Tan':
            console.log('Tan');
            break;     
        case 'Cot':
            console.log('Cot');
            break;    
        case 'Sinh':
            console.log('Sinh');
            break;
        case 'Cosh':
            console.log('Cosh');
            break;  
        case 'Tanh':
            console.log('Tanh');
            break;     
        case 'Coth':
            console.log('Coth');
            break; 
        case 'ln':
            console.log('ln');
            break;
        case 'log':
            console.log('log');
            break;  
        case 'ePx':
            console.log('ePx');
            break;     
        case 'xP2':
            console.log('xP2');
            break;    
        case 'xPy':
            console.log('xPy');
            break;
        case 'GHx':
            console.log('GHx');
            break;  
        case 'Fx':
            console.log('Fx');
            break;     
        case 'TwoPx':
            console.log('TwoPx');
            break; 
        case 'e':
            console.log('e');
            break;
        case 'p':
            console.log('p');
            break;  
        case 'Sqrt':
            console.log('Sqrt');
            break;     
        case 'oneDIVx':
            console.log('oneDIVx');
            break;     
        default:
            break;
    }
}

const compute = function(){
    return eval(input.value)
}
let result = 0;
let operator = null;
let operand1 = '0';
let display = document.getElementById("display");
function handlebutton(button){
    if(button>=0 && button<=9) {
        if(operand1.length<=12) {

            if(operand1=='0') {
            operand1 = button.toString();
            } else {
                operand1 = operand1 + button.toString();
             }
             updateDisplay(operand1);
        }
        
    } else { 
         if( button=='.') {
            if(!operand1.includes('.')) {
                operand1 = operand1 + button.toString();
                updateDisplay(operand1);
            }
        }
        else {
            if(button === '=') {
                if(operator !== null) {
                    result = Result(result, Number(operand1), operator);
                    updateDisplay(result);
                    // operand1 = '0';
                    // operator = null;
                }
            } else {
                if(operator !== null) {
                    result = Result(result, Number(operand1), operator);
                } else {
                    result = Number(operand1);
                }
                operator = button;
                operand1 = '0';
                updateDisplay(result);
            }

        }
    }

}

function Result(operand1, operand2, operator) {
    if(operator==='+') {
        return operand1 + operand2;
    } 
    else if(operator==='-') {
        return operand1 - operand2;
    } 
    else if(operator==='*') {
        return operand1 * operand2;
    }
     else if(operator==='/') {
        if (operand2 !== 0) {
            return operand1 / operand2;
        } else {
            return 'Error';
        }
     } else {
        return operand2;
     }
 
}

function reset(){
     result = 0;
     operator = null;
     operand1 = '0';
     updateDisplay(result);
}

function updateDisplay(result){
    display.innerText = result;
}

document.addEventListener('keydown',handleKeyboard);

function handleKeyboard(event) {
    if(event.key === 'c' || event.key === 'C') {
        reset();
        return;
    } else if(event.key==='Enter' || event.key==='=') {
        handlebutton("=");
    } else {
      handlebutton(event.key);
    }
}
let calculationDescription = '';
let currentResult = 0;

function getUserInput() { 
    return parseInt(userInput.value); 
}

function calc(operator) {
    
    let userInput = getUserInput();
    //Template literals (``) are string literals allowing embedded expressions. 
    //You can use multi-line strings and string interpolation features with them.
    calculationDescription = `${currentResult} ${operator} ${userInput}`;

    switch(operator) {
        case '+': { 
            currentResult += userInput; 
            break;
        }
        case '-': { 
            currentResult -= userInput; 
            break;
        }
        case '*': { 
            currentResult *= userInput;
            break;
        }
        case '/': { 
            currentResult /= userInput;
            break;
        }
    }
    outputResult(currentResult, calculationDescription);
}
function add() { calc('+'); }
function sub() { calc('-'); }
function mult() { calc('*');}
function div() { calc('/'); }

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mult);
divideBtn.addEventListener('click', div);

 
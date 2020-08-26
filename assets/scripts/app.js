let calculationDescription = '';
let currentResult = 0;
let calculationLogs = [];

function getUserInput() { 
    return parseInt(userInput.value); 
}

function calc(operator) {
    
    let userInput = getUserInput();
    //Template literals (``) are string literals allowing embedded expressions. 
    //You can use multi-line strings and string interpolation features with them.
    calculationDescription = `${currentResult} ${operator} ${userInput}`;
    
    let newLog = {
        prev: currentResult,
        input: userInput,
        operation: '',
        desc: calculationDescription,
        newResult: 0
    };

    switch(operator) {
        case '+': { 
            currentResult += userInput; 
            newLog.operation = 'ADD';
            break;
        }
        case '-': { 
            currentResult -= userInput; 
            newLog.operation = 'SUB';
            break;
        }
        case '*': { 
            currentResult *= userInput;
            newLog.operation = 'MULT';
            break;
        }
        case '/': {
            newLog.operation = 'DIV';
            if (userInput) {
                currentResult /= userInput;
                
            } else {
                newLog.desc = "Division by 0 not allowed"
            }
            break;
        }
    }
    outputResult(currentResult, newLog.desc);
    newLog.newResult = currentResult;
    logCalculation(newLog);
}

function logCalculation(log){
    calculationLogs.push(log);
    logHistory(log);
}

addBtn.addEventListener('click', calc.bind(this, '+'));
subtractBtn.addEventListener('click', calc.bind(this, '-'));
multiplyBtn.addEventListener('click', calc.bind(this, '*'));
divideBtn.addEventListener('click', calc.bind(this, '/'));

 
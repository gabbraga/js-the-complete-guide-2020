const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const historyLog = document.getElementById('log');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function logHistory(log) {
  let logListItem = document.createElement('li');
  if(log.operation == "DIV" && !log.input){
    logListItem.innerHTML = `${log.operation}:\t\t${log.desc}`;
  } else {
    logListItem.innerHTML = `${log.operation}:\t\t${log.desc} = ${log.newResult}`;
  }
  
  historyLog.appendChild(logListItem);
}

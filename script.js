let display = document.querySelector('.display-box');
let history = document.querySelector('.history');

let btnNum = document.querySelectorAll('.number');
let btnOperator = document.querySelectorAll('.operator');
let btnClear = document.querySelector('.clear');
let btnEqual = document.querySelector('.equal');
let btnZero = document.querySelector('.zero');


let opBtn = '';
let opSign = '';
let result = null;

btnNum.forEach(number => {
    number.addEventListener('click', (e) => {

        display.innerText += e.target.innerText;

    })
});

btnOperator.forEach(operation => {
    operation.addEventListener('click', (e) => {

        if (!op(display.innerText)) {
            opSign = e.target.innerText;
            display.innerText += opSign;
        }
    })
});

btnEqual.addEventListener('click', (e) => {
    if (!display.innerText) return;

    result = displayCalc(display.innerText);
    display.innerText = display.innerText + ' = ' + result;

    let ul = document.querySelector('.result-list');
    let listResult = document.createElement('li');
    let rmBtn = document.createElement('button');
    let line = document.createElement('hr')

    listResult.textContent = display.textContent;
    rmBtn.textContent = 'Delete';
    rmBtn.className = 'deleteHistory';
    line.className = 'line';

    ul.append(listResult);
    listResult.append(rmBtn);
    listResult.append(line);

    rmBtn.addEventListener('click', event => {
        listResult.remove();
        rmBtn.remove();
    });
    display.textContent = '';
})

btnClear.addEventListener('click', (e) => {
    display.innerText = '';
    displayNum1 = '';
    displayNum2 = '';
    result = '';

})

function op(displayContent) {

    let lastchar = displayContent.slice(-1);
    if (lastchar === '*' || lastchar === '+' || lastchar === '-') {
        if (lastchar === '*' && displayContent.innerText == '') {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

function displayCalc(displayContent) {
    result = eval(displayContent);
    return result;
}
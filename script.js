const result = document.getElementById('result');
const topDisplay = document.getElementById('top');
const buttons = document.querySelectorAll('button');

let firstNumber = '';
let operator = '';
let secondNumber = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    let value = btn.textContent;

    
    if (value >= '0' && value <= '9') {
      if (operator === '') {
        firstNumber += value;
        result.textContent = firstNumber;
      } else {
        secondNumber += value;
        result.textContent = secondNumber;
      }
    }

    
    else if (value === '+' || value === '-' || value === '*') {
      if (firstNumber !== '') {
        operator = value;
        topDisplay.textContent = firstNumber + ' ' + operator;
        result.textContent = '0';
      }
    }

    else if (value === '=') {
      let res = 0;
      if (operator === '+') {
        res = parseFloat(firstNumber) + parseFloat(secondNumber);
      } else if (operator === '-') {
        res = parseFloat(firstNumber) - parseFloat(secondNumber);
      } else if (operator === '*') {
        res = parseFloat(firstNumber) * parseFloat(secondNumber);
      }
      result.textContent = res;
      topDisplay.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
      firstNumber = res.toString();
      secondNumber = '';
      operator = '';
    }

    else if (value === 'C') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
      result.textContent = '0';
      topDisplay.textContent = '';
    }


    else if (value === '←') {
      if (operator === '') {
        firstNumber = firstNumber.slice(0, -1);
        result.textContent = firstNumber || '0';
      } else {
        secondNumber = secondNumber.slice(0, -1);
        result.textContent = secondNumber || '0';
      }
    }
  });
});

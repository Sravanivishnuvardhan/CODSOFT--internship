let currentInput = '';
    let previousInput = '';
    let operator = '';

    function appendNumber(number) {
      currentInput += number;
      updateDisplay(currentInput);
    }

    function setOperation(op) {
      if (currentInput === '') return;
      if (previousInput !== '') {
        calculateResult();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }

    function calculateResult() {
      if (currentInput === '' || previousInput === '' || operator === '') return;
      let result;
      const prev = parseFloat(previousInput);
      const curr = parseFloat(currentInput);
      switch (operator) {
        case '+':
          result = prev + curr;
          break;
        case '-':
          result = prev - curr;
          break;
        case '*':
          result = prev * curr;
          break;
        case '/':
          result = prev / curr;
          break;
        default:
          return;
      }
      currentInput = result.toString();
      operator = '';
      previousInput = '';
      updateDisplay(currentInput);
    }

    function clearDisplay() {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateDisplay('');
    }

    function updateDisplay(value) {
      document.getElementById('display').value = value;
    }

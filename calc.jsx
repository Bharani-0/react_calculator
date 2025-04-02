import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'C') {
      setCalculation('');
      setResult('');
    } else if (buttonValue === '=') {
      try {
        const result = eval(calculation);
        setResult(result);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setCalculation(calculation + buttonValue);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <p>{calculation}</p>
        <p>{result}</p>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('C')}>Clear</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

import './App.css';
import logo from './images/calculator.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');

  const isOperator = value => {
    return isNaN(value);
  };

  const addInput = value => {
    if (input === '0' && (!isOperator(value) || value === '-')){
      setInput(value);
    } else if (isOperator(value) && isOperator(input[input.length - 1])) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    if (input && !isOperator(input[input.length - 1]))
      setInput(evaluate(input).toString());
  };
  

  return (
    <div className="App">
      <div className='logo-container'>
        <h1>Calculator</h1>
        <img
          className='logo'
          src={logo}
          alt='Calculator logo' />
      </div>
      
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='fila'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={calculate}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton handleClear={() => setInput('0')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

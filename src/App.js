import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [result, setCount] = useState(['?', '??']);
  const [response, setResponse] = useState(['?', '??']);

  useEffect(()=>{
    document.title=`${result}`;
  });

  function answer(optionA, optionB){
    return Math.round(Math.random()) === 1 ? optionA : optionB;
  }
  function handleChange(){
    const result = answer(response[0], response[1]);
    setCount(result)
  }
  function handleRadioButton(e){
    const choices = e.target.value.split('-');
    setResponse([choices[0], choices[1]]);
  }
  return (
    <div className="App">
      <h1>Yes No Oracle</h1>
      <h1>{result}</h1>
      <h4>Choice: {response[0]} or {response[1]}</h4>
      <button onClick={handleChange}>Answer</button>
      <div>
        <input
        type="radio"
        name='choice'
        value="Yes-No"
        onChange={handleRadioButton}
        />
        <p>Yes or No</p>

        <input
        type="radio"
        name='choice'
        value="Stop-Go"
        onChange={handleRadioButton} />
        <p>Stop or Go</p>

        <input
        type="radio"
        name='choice'
        value="Heads-Tails"
        onChange={handleRadioButton} />
        <p>Heads or Tails</p>
      </div>

    </div>
  );

}

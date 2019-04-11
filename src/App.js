import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {key} from './secret';
import './App.css';

export default function App() {
  const [result, setAnswer] = useState(['?', '??']);
  const [response, setResponse] = useState(['Yes', 'No']);
  const [giph, setGiph] = useState('');

  const styles = {
    backgroundImage: `url(${giph})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  useEffect(()=>{
    document.title=`${result}`;
  });

  function answer(optionA, optionB){
    return Math.round(Math.random()) === 1 ? optionA : optionB;
  }
  function handleChange(){
    const result = answer(response[0], response[1]);
    setAnswer(result);
    // api call
    const giphyUrl =`http://api.giphy.com/v1/gifs/search?`;
    const randomGiph = Math.round(Math.random()*25);
    let gif ='';
    // 25 gifs
    axios.get(`${giphyUrl}q=${result}&api_key=${key}`)
      .then(response => {
        // gif = response.data.data[randomGiph].images.downsized_large.url;
        gif = response.data.data[randomGiph].images.fixed_width.url;
      })
      .catch(function (error) {
        console.log(error);
        // res.json({ answer, gif: 'images/broken.gif'})
     })
     .then(()=>{
       console.log({answer, gif});
       setGiph(gif);
       // res.json({ answer, gif });
     });
  }
  function handleRadioButton(e){
    const choices = e.target.value.split('-');
    setResponse([choices[0], choices[1]]);
  }
  return (
    <div className='App' style={styles}>
      <h1>Yes No Oracle</h1>
      <h1 className='answer'>{result}</h1>
      <h3>Choice: {response[0]} or {response[1]}</h3>
      <button onClick={handleChange}>Get Answer</button>
      <div className='choices'>
        <div className='choice'>
          <input
          type="radio"
          name='choice'
          value="Yes-No"
          onChange={handleRadioButton}
          />
          <p>Yes or No</p>
        </div>
        <div className='choice'>
          <input
          type="radio"
          name='choice'
          value="Stop-Go"
          onChange={handleRadioButton}
          />
          <p>Stop or Go</p>
        </div>
        <div className='choice'>
          <input
          type="radio"
          name='choice'
          value="Heads-Tails"
          onChange={handleRadioButton}
          />
          <p>Heads or Tails</p>
        </div>
      </div>
    </div>
  );

}

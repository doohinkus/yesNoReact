import React, { useState, useEffect } from "react";
import axios from "axios";
import { key } from "./secret.js";
import "./App.css";

export default function App() {
  const [result, setAnswer] = useState(["?", "??"]);
  const [response, setResponse] = useState(["Yes", "No"]);
  const [giph, setGiph] = useState("");
  const hashTags = ["rafaelIsCoding", "yesOrNoOracle", "yesNoOracle"];
  const url = "http://yesornooracle.com";
  const link = `https://twitter.com/intent/tweet?text=Your answer is ${result}&hashtags=${hashTags}&url=${url}`;
  const styles = {
    backgroundImage: `url(${giph})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    document.title = `😀: ${result[0] === "?" ? "???" : result}`;
  }, []);

  function answer(optionA, optionB) {
    return Math.round(Math.random()) === 1 ? optionA : optionB;
  }
  function handleChange() {
    const result = answer(response[0], response[1]);
    setAnswer(result);
    // api call
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?`;
    const randomGiph = Math.round(Math.random() * 25);
    // 25 gifs
    axios
      .get(`${giphyUrl}q=${result}&api_key=${key}`)
      .then((response) => {
        const gif = response.data.data[randomGiph].images.fixed_width.url;
        setGiph(gif);
      })
      .catch(function (error) {
        console.log(error);
        setGiph("");
      });
  }
  function handleRadioButton(e) {
    const choices = e.target.value.split("-");
    setResponse([choices[0], choices[1]]);
  }

  return (
    <div className="App" style={styles}>
      <h1>Yes No Oracle</h1>
      <h1 className="answer">{result}</h1>
      <h3>
        Choice: {response[0]} or {response[1]}
      </h3>
      <button onClick={handleChange}>Get Answer</button>
      <div className="choices">
        <div className="choice">
          <input
            type="radio"
            name="choice"
            value="Yes-No"
            onChange={handleRadioButton}
          />
          <p>Yes or No</p>
        </div>
        <div className="choice">
          <input
            type="radio"
            name="choice"
            value="Stop-Go"
            onChange={handleRadioButton}
          />
          <p>Stop or Go</p>
        </div>
        <div className="choice">
          <input
            type="radio"
            name="choice"
            value="Heads-Tails"
            onChange={handleRadioButton}
          />
          <p>Heads or Tails</p>
        </div>
      </div>
      <div className="footer">
        <a href={link} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            class="twtr-icon"
          >
            <path opacity="0" d="M0 0h24v24H0z"></path>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </svg>
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 266.893 266.895"
            class="fcbk-icon"
          >
            <path
              id="Blue_1_"
              fill="#3C5A99"
              d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812
            	c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225
            	H248.082z"
            />

            <path
              id="f"
              fill="#FFFFFF"
              d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
            	l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
            	v99.803H182.409z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

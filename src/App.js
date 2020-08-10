import React, { useState, useRef } from "react";
import { useTypeGame } from "./Components/useTypeGame";

import "./App.css";

function App() {
  const SUBTITLE = "How Fast Can You Type?";
  const SHOW_NUM_WORDS = "Word Count";
  const TIME_TEXT = "Time Remaining";
  const START_RESET="START/RESET";
  const PLACEHOLDER = "START TYPING HERE...";

  //controlled textarea
  const focusedArea = useRef(null);
  const [text, setText] = useState("");

  const {
    time,
    setTime,
    wordCount,
    setWordCount,
    isGameRunning,
    setIsGameRunning,
  } = useTypeGame(text);

  function startGame() {
    setIsGameRunning(true);
    setText("");
    setWordCount(0);
  }

  return (
    <div className="App">
      <div className="layout">
        <h1 className="subtitle">{SUBTITLE} </h1>
        <div className="time">
          <label htmlFor="time-list">Please choose a time</label>
          <select
            className="time-list"
            id="time-list"
            onChange={({ target: { value } }) => setTime(Number(value))}
          >
            <option selected value={10}>10s</option>
            <option value={30}>30s</option>
            <option value={60}>1min</option>
            <option value={180}>3min</option>
            <option value={300}>5min</option>
          </select>

        </div>
        <div className="time-words-position">
          <div className="time-words-layout">
            <span className="time-text">{TIME_TEXT}</span>
            <span className="time-number">{time}s</span>
          </div>

          <div className="time-words-layout">
            <span className="words-text">{SHOW_NUM_WORDS}</span>

            <span className="words-number">{wordCount}</span>
          </div>
        </div>
        <textarea
          className="textarea"
          onChange={({ target: { value } }) => setText((prevText) => value)}
          value={text}
          placeholder={PLACEHOLDER}
          onFocus={() => startGame()}
          ref={focusedArea}
        />

        <button
          onClick={() => focusedArea.current.focus()}
          disabled={isGameRunning}
        >
          {START_RESET}
        </button>
      </div>
    </div>
  );
}

export default App;

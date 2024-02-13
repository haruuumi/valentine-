import React, { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "bae please",
  "DON'T DO ME LIKE THIS",
  "I'm bawling my eyes out.",
  "You're crushing my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      <div className="content">
        {yesPressed ? (
          <>
            <img
              alt="bears kissing"
              src="https://media.tenor.com/images/gUi1zyxfzYAAAAi/tenor.gif"
            />
            <div className="text">Yippie!!!</div>
          </>
        ) : (
          <>
            <img
              alt="bear with hearts"
              src="https://gifdb.com/image/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />

            <div>Will you be my valentine?</div>
            <div className="button-container">
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize, color: "green" }} // Change color to green
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="notButton"
                style={{ color: "red" }} // Change color to red
              >
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


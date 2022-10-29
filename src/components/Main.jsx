import React from "react";

const Main = ({ wrongLetter }) => {
  return (
    <div className="main">
      <svg height="250" width="200" className="figure-container">
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        <circle
          cx="140"
          cy="70"
          r="20"
          className={`figure-part ${
            wrongLetter.length > 0 ? "show-figure-part" : ""
          }`}
        />

        <line
          x1="140"
          y1="90"
          x2="140"
          y2="150"
          className={`figure-part ${
            wrongLetter.length > 1 ? "show-figure-part" : ""
          }`}
        />

        <line
          x1="140"
          y1="120"
          x2="120"
          y2="100"
          className={`figure-part ${
            wrongLetter.length > 2 ? "show-figure-part" : ""
          }`}
        />
        <line
          x1="140"
          y1="120"
          x2="160"
          y2="100"
          className={`figure-part ${
            wrongLetter.length > 3 ? "show-figure-part" : ""
          }`}
        />

        <line
          x1="140"
          y1="150"
          x2="120"
          y2="180"
          className={`figure-part ${
            wrongLetter.length > 4 ? "show-figure-part" : ""
          }`}
        />
        <line
          x1="140"
          y1="150"
          x2="160"
          y2="180"
          className={`figure-part ${
            wrongLetter.length > 5 ? "show-figure-part" : ""
          }`}
        />
      </svg>
      <div
        className={`wrong-container ${
          wrongLetter.length > 0 ? "show-wrong-container" : ""
        }`}
      >
        <p>Wrong</p>
        <div className="wrong-letters">
          {wrongLetter.map((letter, index) => (
            <span className="wrong-letter" key={index}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

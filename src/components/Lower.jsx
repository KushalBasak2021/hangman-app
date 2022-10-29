import React from "react";

const Lower = ({ selectedWord, correctLetter, setPlayable }) => {
  selectedWord = selectedWord.split("");

  return (
    <div className="correct-letters">
      {selectedWord.map((letter, index) =>
        correctLetter.includes(letter) ? (
          <span className="correct-letter" key={index}>
            {letter}
          </span>
        ) : (
          <span className="correct-letter" key={index}></span>
        )
      )}
    </div>
  );
};

export default Lower;

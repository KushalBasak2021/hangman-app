import React from "react";

const Popup = ({
  playable,
  playAgain,
  wrongLetter,
  correctLetter,
  selectedWord,
}) => {
  return (
    <div
      className={`popup-container ${!playable ? "show-popup-container" : ""}`}
    >
      <div className="popup">
        {wrongLetter.length === 6 ? (
          <h2>Unfortunately You lost!</h2>
        ) : (
          <h2>Congratulation! You won!</h2>
        )}

        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Lower from "./components/Lower";
import Main from "./components/Main";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { showNotification as show } from "./helper/helper";

let words = ["abroad", "accept", "active", "center", "choice"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  let [wrongLetter, setWrongLetter] = useState([]);
  let [correctLetter, setCorrectLetter] = useState([]);
  let [playable, setPlayable] = useState(true);
  let [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const detectKeyDown = (e) => {
      const { key } = e;
      if (playable) {
        if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) {
          if (selectedWord.includes(key)) {
            if (!correctLetter.includes(key)) {
              const newCorrectLetter = [...correctLetter, key];
              setCorrectLetter(newCorrectLetter);
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetter.includes(key)) {
              const newWrongtLetter = [...wrongLetter, key];
              setWrongLetter(newWrongtLetter);
            } else {
              show(setShowNotification);
            }
          }
        }
      }
    };

    if (wrongLetter.length >= 6) {
      setPlayable(false);
    }

    let selectedLetter = selectedWord.split("");
    let correctLetters = new Set(correctLetter);
    selectedLetter = new Set(selectedLetter);
    if (
      Array.from(selectedLetter).every((ele) => {
        return correctLetters.has(ele);
      })
    ) {
      setPlayable(false);
    }

    window.addEventListener("keydown", detectKeyDown);
    return () => window.removeEventListener("keydown", detectKeyDown);
  }, [correctLetter, wrongLetter, playable]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetter([]);
    setWrongLetter([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
  }

  return (
    <div className="hangman">
      <Header />
      <Main wrongLetter={wrongLetter} />
      <Lower
        selectedWord={selectedWord}
        correctLetter={correctLetter}
        setPlayable={setPlayable}
      />
      <Popup
        playable={playable}
        playAgain={playAgain}
        wrongLetter={wrongLetter}
        correctLetter={correctLetter}
        selectedWord={selectedWord}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;

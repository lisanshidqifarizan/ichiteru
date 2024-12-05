import React, { useState, useEffect } from "react";
import "./App.css";
import Popup from "./components/Popup";
import Digital from "./components/Digital";
import BirthdayAnimation from "./components/BirthdayAnimation";

import wrong from "./assets/wrong.mp3";

function App() {
  const [popup, setPopup] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setPopup(true);
    setCountdown(false);
  }, []);

  const PlayMusic = () => {
    return (
      <audio autoplay>
        <source src={wrong} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    );
  };

  return (
    <div className="App">
      {popup && (
        <Popup
          onClose={() => {
            PlayMusic();
            setPopup(false);
            alert('Lmao Merah tanda berhenti ;P Ijo tanda jalan');
            window.location.reload()
          }}
          onGo={() => {
            setCountdown(true);
            setPopup(false);
          }}
        />
      )}
      {countdown && !animation && (
        <Digital
          onComplete={() => {
            setCountdown(false);
            setAnimation(true);
          }}
        />
      )}
      {animation && <BirthdayAnimation />}
    </div>
  );
}

export default App;

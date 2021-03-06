import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [second, setsecond] = useState(0);
  const [mintues, setmintues] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setsecond(second + 1);
      if (second === 50) {
        setmintues(mintues + 1);
        setsecond(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const restart = () => {
    setsecond(0);
    setmintues(0);
  };
  const stop = () => {
    clearInterval(timer);
  };

  return (
    <>
      <div className="timer">
        <div className="container">
          <div className="timer-container">
            <h2>timer</h2>
            <h2>
              {mintues < 10 ? "0" + mintues : mintues}:
              {second < 10 ? "0" + second : second}
            </h2>
          </div>
          <button
            onClick={restart}
            style={{
              backgroundColor: "black",
              width: "100px",
              height: "50px",
              fontSize: "20px",
              color: "white",
            }}
          >
            Restart
          </button>
          <button
            onClick={stop}
            style={{
              backgroundColor: "black",
              width: "100px",
              height: "50px",
              fontSize: "20px",
              marginLeft: "20px",
              color: "white",
            }}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;

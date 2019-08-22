import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  // idx 0 => home, idx 1 => away
  const [scores, updateScores] = useState([0,0]);
  const [teamNames, updateNames] = useState(['Lions', 'Tigers']);
  const [inPossession, updateInPossession] = useState(0);
  const [clock, updateClock] = useState([59,59]);  // minutes, seconds

  const changeScore = (team, amount) => {
    const [home, away] = scores;
    if (team === 0) updateScores([home + amount, away]);
    else updateScores([home, away + amount]);
  }


  const homeTD = () => changeScore(0, 7);
  const awayTD = () => changeScore(1, 7);
  const homeFG = () => changeScore(0, 3);
  const awayFG = () => changeScore(1, 3);


/*
  setInterval(() => {
    let [minutes, seconds] = clock;
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    updateClock([minutes, seconds]);
  }, 1000);
*/


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{teamNames[0]}</h2>
            <div className="home__score">{scores[0]}</div>
          </div>

          <div className="timer">{`${clock[0]}:${clock[1]}`}</div>

          <div className="away">
            <h2 className="away__name">{teamNames[1]}</h2>
            <div className="away__score">{scores[1]}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={homeTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

import { useState } from 'react'
import Grow from '@mui/material/Grow';
import './Scoreboard.css'

function Scoreboard({ selectedQuestion, onComplete, checked }) {
  const [players, setPlayers] = useState([
    { name: 'Team 1', score: 1 },
    { name: 'Team 2', score: 2 }
  ]);

  const updateScore = (index, amount) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].score += amount;
    setPlayers(updatedPlayers);
  };

  return (
    <Grow in={!selectedQuestion && checked} timeout={500}>
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        {players.map((player, index) => (
          <div key={index} className="player">
            <h3>{player.name}</h3>
            <p>{player.score}</p>
            <div className="score-buttons">
              <button onClick={() => updateScore(index, 100)}>+100</button>
              <button onClick={() => updateScore(index, -100)}>-100</button>
            </div>
          </div>
        ))}
        <button onClick={onComplete}>End Game</button>
      </div>
    </Grow>
  );
}

export default Scoreboard
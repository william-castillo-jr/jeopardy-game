import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard/GameBoard.jsx'
import Scoreboard from './components/Scoreboard/Scoreboard.jsx'
import GameComplete from './components/GameComplete/GameComplete.jsx'

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewMode, setViewMode] = useState('game')
  const [checked, setChecked] = useState(true);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setChecked(false);
  }

  const handleBackToBoard = () => {
    if (selectedQuestion) {
      handleMarkAnswered(selectedQuestion.id);
    }
    setChecked(true);
    setSelectedQuestion(null);
    setTimeout(() => setSelectedQuestion(null), 500);
  }

  const handleMarkAnswered = (cardId) => {
    fetch(`http://localhost:3000/cards/${cardId}/answered`, {
      method: 'PATCH',
    });
  };

  const handleGameComplete = () => {
    setViewMode('complete');
  }

  return (
    <div className="app-container">
      {viewMode === 'game' && (
        <>
          <GameBoard selectedQuestion={selectedQuestion}
            onQuestionClick={handleQuestionClick}
            onClose={handleBackToBoard}
            checked={checked}
          />
          <Scoreboard onComplete={handleGameComplete} selectedQuestion={selectedQuestion} 
          checked={checked}/>
        </> 
      )}
      {viewMode === 'complete' && <GameComplete onReturnToGame={() => setViewMode('game')} />}
  </div>
  );
}

export default App

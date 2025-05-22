import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import Scoreboard from './components/Scoreboard/Scoreboard.jsx';
import GameComplete from './components/GameComplete/GameComplete.jsx';

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewMode, setViewMode] = useState('game');
  const [checked, setChecked] = useState(true);
  const [refreshGameDataKey, setRefreshGameDataKey] = useState(0); 

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setChecked(false);
  };

  const handleBackToBoard = () => {
    if (selectedQuestion) {
      handleMarkAnswered(selectedQuestion.id);
    }
    setChecked(true);
    setSelectedQuestion(null);
    setRefreshGameDataKey(prevKey => prevKey + 1);
    setTimeout(() => {
        setSelectedQuestion(null)
    }, 500); 
  };

  const handleMarkAnswered = (cardId) => {
    fetch(`http://localhost:3000/cards/${cardId}/answered`, {
      method: 'PATCH',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Card marked as answered:', data);
    })
    .catch(error => {
        console.error('Error marking card as answered:', error);
    });
  };

  const handleGameComplete = () => {
    setViewMode('complete');
  };

  return (
    <div className="app-container">
      {viewMode === 'game' && (
        <>
          <GameBoard
            selectedQuestion={selectedQuestion}
            onQuestionClick={handleQuestionClick}
            onClose={handleBackToBoard}
            checked={checked}
            refreshKey={refreshGameDataKey} 
          />
          <Scoreboard
            onComplete={handleGameComplete}
            selectedQuestion={selectedQuestion} 
            checked={checked}
            refreshKey={refreshGameDataKey}
          />
        </> 
      )}
      {viewMode === 'complete' && <GameComplete onReturnToGame={() => setViewMode('game')} />}
    </div>
  );
}

export default App;
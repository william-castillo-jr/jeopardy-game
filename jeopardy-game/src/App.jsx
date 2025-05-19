import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard/GameBoard.jsx'
import Scoreboard from './components/Scoreboard/Scoreboard.jsx'
import GameComplete from './components/GameComplete/GameComplete.jsx'

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewMode, setViewMode] = useState('game')

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  }

  const handleBackToBoard = () => {
    setSelectedQuestion(null);
  }

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
          />
        {!selectedQuestion && <Scoreboard onComplete={handleGameComplete} />}
      </>
      )} 

      {viewMode === 'complete' && <GameComplete />}
  </div>
  );
}

export default App

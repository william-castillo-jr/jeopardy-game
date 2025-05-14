import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard/GameBoard.jsx'
import Scoreboard from './components/Scoreboard/Scoreboard.jsx'

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  }
  const handleBackToBoard = () => {
    setSelectedQuestion(null);
  }

  return (
    <div className="app-container">
      <GameBoard selectedQuestion={selectedQuestion}
        onQuestionClick={handleQuestionClick}
        onClose={handleBackToBoard}
      />
      {!selectedQuestion && <Scoreboard />}
    </div>
  );
}

export default App

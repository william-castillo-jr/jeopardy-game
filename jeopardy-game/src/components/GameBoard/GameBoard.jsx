import React, { useState } from 'react';
import _questions from "./../../../public/data/questions.json";
import QuestionModal from '../QuestionModal/QuestionModal.jsx'
import Card from './../Card/Card.jsx'
import './GameBoard.css'

import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'


function GameBoard() {
  const [checked, setChecked] = React.useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setChecked(true)
  };

  const handleBackToBoard = () => {
    setChecked(false);
    setTimeout(() => setSelectedQuestion(null), 300);
  }

  return (
    <>
      <Grow in={!selectedQuestion} timeout={500}>
        <div className="categories">
          {_questions.map((category, index) => (
            <div key={index} className="category">
              <h2 className="category-name">{category.category}</h2>
              {category.questions.map((question, idx) => (
                <Card
                  key={idx}
                  question={question}
                  onClick={() => handleQuestionClick(question)}
                />
              ))}
            </div>
          ))}
        </div>
      </Grow>

      {selectedQuestion && (
        <Grow in={checked} timeout={500}>
          <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <QuestionModal question={selectedQuestion} onClose={handleBackToBoard} />
          </Box>
        </Grow>
      )}
    </>
  );
}

export default GameBoard;
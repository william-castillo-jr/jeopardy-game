import React, { useState } from 'react';
import _questions from "./../../../public/data/questions.json";
import QuestionModal from '../QuestionModal/QuestionModal.jsx'
import Card from './../Card/Card.jsx'
import './GameBoard.css'

import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'


function GameBoard({ selectedQuestion, onQuestionClick, onClose, checked }) {
  return (
    <>
      <Grow in={!selectedQuestion && checked} timeout={500}>
        <div className="categories">
          {_questions.map((category, index) => (
            <div key={index} className="category">
              <h2 className="category-name">{category.category}</h2>
              {category.questions.map((question, idx) => (
                <Card
                  key={idx}
                  question={question}
                  onClick={() => onQuestionClick(question)}
                />
              ))}
            </div>
          ))}
        </div>
      </Grow>

      {selectedQuestion && (
        <Grow in={!checked} timeout={500}>
          <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <QuestionModal question={selectedQuestion} onClose={onClose} />
          </Box>
        </Grow>
      )}
    </>
  );
}

export default GameBoard;
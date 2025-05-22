import React, { useState, useEffect } from 'react';
import QuestionModal from '../QuestionModal/QuestionModal.jsx';
import Card from './../Card/Card.jsx';
import './GameBoard.css';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

function GameBoard({ selectedQuestion, onQuestionClick, onClose, checked }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((res) => res.json())
      .then((data) => {
        const grouped = data.reduce((acc, card) => {
          const cat = card.category_name || 'Uncategorized';
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(card);
          return acc;
        }, {});

        const categoriesArray = Object.entries(grouped).map(([category, questions]) => ({
          category,
          questions,
        }));

        setCategories(categoriesArray);
      })
      .catch((err) => {
        console.error('Error fetching cards:', err);
      });
  }, []);

  return (
    <>
      <Grow in={!selectedQuestion && checked} timeout={500}>
          <div className="gameboard-container">
          <h1 className="gameboard-title">Will and James Jeopardy Game</h1>
          <div className="categories">
            {categories.map((category, index) => (
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
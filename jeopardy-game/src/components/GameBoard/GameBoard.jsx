import React, { useState } from 'react';
import _questions from "./../../../public/data/questions.json";
import QuestionModal from '../QuestionModal/QuestionModal.jsx'
import Card from './../Card/Card.jsx'
import './GameBoard.css'

function GameBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion(null);
  };

  return (
    <div className="categories">
      {_questions.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.category}</h2>
          {category.questions.map((question, idx) => (
            <Card
              key={idx}
              question={question}
              onClick={() => handleQuestionClick(question)}
            >
              ${question.value}
            </Card>
          ))}
        </div>
      ))}
      {isModalOpen && selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default GameBoard;
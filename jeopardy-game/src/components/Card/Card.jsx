import React from 'react';
import './Card.css';

const Card = ({ question, onClick }) => {
  return (
    <button className="card" onClick={() => onClick(question)}>
      ${question.value}
    </button>
  );
};

export default Card;
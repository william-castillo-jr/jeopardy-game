import React from 'react';
import './GameBoard.css';
import _questions from "./../../data/questions.json";

function GameBoard() {
    return (
    <div className="categories">
        {_questions.map((category, index) => (
            <div key={index} className="category"> 
                <h2>{category.category}</h2>
                {category.questions.map((question, index) => (
                <button key={index} className="question-button">
                    ${question.value}
                </button>
            ))}
        </div>
        ))}
    </div>
    )
}

export default GameBoard;
import React from 'react';

function GameBoard({ questions }) {
    return (
    <div className="categories">
        {questions.map((category, index) => (
            <div key={index} className="category"> 
                <h2>{category.category}</h2>
                {category.questions.map((q, idx) => (
                <button key={idx} className="question-button">
                    ${q.value}
                </button>
            ))}
        </div>
        ))}
    </div>
    )
}

export default GameBoard;
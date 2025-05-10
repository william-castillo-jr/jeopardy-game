import React from 'react';
import './QuestionModal.css'; 

function QuestionModal({ question, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{question.question}</h2>
            <p><strong>Answer:</strong> {question.answer}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
    );
}

export default QuestionModal;
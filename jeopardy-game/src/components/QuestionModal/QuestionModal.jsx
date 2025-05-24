import './QuestionModal.css'; 
import Answer from './Answer.jsx'
import { useState } from 'react'

function QuestionModal({ question, onClose }) {
  const [showContents, setShowContents] = useState(true);

  const handleToggleContents = () => setShowContents(!showContents);

    return (
        <div className="modal-overlay" onClick={onClose}> 
          <div className="modal-content" onClick={(e) => e.stopPropagation()} >
        {showContents ? (
  <>
    <p className="question-category">{question.category_name}</p>
    <button className="card-cost" disabled>{`$${question.value}`}</button>
    <p className="question">{question.answer}</p>
    
    <div className="question-button-group">
      <button onClick={onClose} className="close-button">Close</button>
      <button onClick={handleToggleContents} className="answer-button">Show Answer</button>
    </div>
  </>
) : (
  <Answer answer={question.question} onClose={onClose} question={question}/>
)}
        </div>
      </div>
    );
}

export default QuestionModal;
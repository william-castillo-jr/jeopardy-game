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
            <p className="question-category">Question Category</p>
            <button className="card-cost">Card button with cost</button>
            <p>{question.answer}</p>
            <button onClick={onClose}>Close</button>    
            <button className="answer" onClick={handleToggleContents}>Show Answer</button>
          </> ) : <Answer answer={question.question} onClose={onClose}/>}
        </div>
        
      </div>
    );
}

export default QuestionModal;
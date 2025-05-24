import './Answer.css'

function Answer({ question, answer, onClose }) {
    return (
        <div className="answer-container">
             <p className="question-category">{question.category_name}</p>
            <div className="answer-text-container">
                <button className="card-cost" disabled>{`$${question.value}`}</button>
                <p className="answer-text">{answer}</p>
            </div>
            <div className="answer-button-group" >
                <button className="close-button"onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Answer;
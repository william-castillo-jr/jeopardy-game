import './Answer.css'

function Answer({ answer, onClose }) {
    return (
        <div className="answer-container">
            <div className="answer-text-container">
  <p className="answer-text">{answer}</p>
</div>
            <div className="answer-button-group" >
<button className="close-button"onClick={onClose}>Close</button>
            <button className="winning-team-button">Choose Winning Team</button>
            </div>
        </div>
    )
}

export default Answer;
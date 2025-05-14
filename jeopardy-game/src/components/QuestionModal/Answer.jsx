import { useState } from 'react'
import './Answer.css'

function Answer({ answer, onClose }) {
    // const [isVisible, setIsVisible] = useState(false);

    // const handleShowAnswer = () => setIsVisible(true);

    return (
        <div className="answer-container">
            <p className="answer-text">{answer}</p>
            <button onClick={onClose}>Close</button>
            <button>Choose Winning Team</button>
        </div>
    )
}

export default Answer;
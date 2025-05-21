import './GameComplete.css'
import Grow from '@mui/material/Grow';

function GameComplete({ onReturnToGame }) {
    return (
        <div className="modal-overlay">
            <Grow in={true} timeout={700}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} >
            <p className="question-category">Question Category</p>
            <button onClick={onReturnToGame}>Return to Gameboard</button>
        </div>
        </Grow>
      </div>
    )
}

export default GameComplete;
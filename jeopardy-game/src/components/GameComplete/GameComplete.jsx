import './GameComplete.css'

function GameComplete() {
    return (
        <div className="modal-overlay"> 
          <div className="modal-content" onClick={(e) => e.stopPropagation()} >
            <p className="question-category">Question Category</p>
        </div>
      </div>
    )
}

export default GameComplete;
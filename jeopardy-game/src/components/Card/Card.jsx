import './Card.css';

const Card = ({ question, onClick }) => {
  return (
    <button
      className={`card ${question.isAnswered ? 'answered' : ''}`}
      onClick={() => onClick(question)}
      disabled={question.isAnswered}
    >
    {question.isAnswered ? '✓' : `$${question.value}`}
    </button>
  );
};

export default Card;
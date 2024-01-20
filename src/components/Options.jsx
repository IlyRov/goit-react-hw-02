
const Options = ({ onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {hasFeedback && <button type="button" onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;

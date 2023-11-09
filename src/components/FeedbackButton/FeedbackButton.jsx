import css from './FeedbackButton.module.css';
const FeedbackButton = ({ text, addFeedback }) => {
  return (
    <>
      {text && (
        <button className={css.button} onClick={() => addFeedback(text)}>
          {text}
        </button>
      )}
    </>
  );
};
export default FeedbackButton;

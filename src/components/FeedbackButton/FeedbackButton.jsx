import css from './FeedbackButton.module.css';

export const FeedbackButton = ({ text, type }) => (
  <button className={css.button} type={type} mark={text}>
    {text}
  </button>
);

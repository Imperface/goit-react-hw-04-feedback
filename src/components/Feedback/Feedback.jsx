import css from './Feedback.module.css';
import { FeedbackButton, dataButtonKey } from 'components';
const Feedback = ({ addFeedback }) => {
  const arrayFeedbackStatus = Object.keys(dataButtonKey());
  return (
    <ul className={css.buttonsList}>
      {arrayFeedbackStatus.map(item => (
        <li key={item}>
          <FeedbackButton text={item} addFeedback={addFeedback} />
        </li>
      ))}
    </ul>
  );
};
export default Feedback;

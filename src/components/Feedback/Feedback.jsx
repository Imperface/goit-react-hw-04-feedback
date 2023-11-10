import css from './Feedback.module.css';
import { FeedbackButton } from 'components';

export const Feedback = ({ onFeedbackClick }) => (
  <ul className={css.buttonsList} onClick={onFeedbackClick}>
    <li>
      <FeedbackButton text="Good" type="button" />
    </li>
    <li>
      <FeedbackButton text="Neutral" type="button" />
    </li>
    <li>
      <FeedbackButton text="Bad" type="button" />
    </li>
  </ul>
);

import {
  StatisticItem,
  countTotalFeedback,
  countFeedbackPercentage,
  Notifitation,
} from 'components';
import css from './Statistics.module.css';
const selectStatPercentage = 'Good';
const Statistics = data => {
  const keyArray = Object.keys(data.data);
  const checkFeedbackCount = countTotalFeedback(data.data);
  return checkFeedbackCount ? (
    <ul className={css.statisticsList}>
      {keyArray.map(item => {
        return (
          <li key={`${item}item`}>
            <StatisticItem itemKey={item} itemValue={data.data[item]} />
          </li>
        );
      })}
      <li>
        <p>Total: {countTotalFeedback(data.data)}</p>
      </li>
      <li>
        <p>
          Positive Feedback:{' '}
          {countFeedbackPercentage(selectStatPercentage, data.data)}%
        </p>
      </li>
    </ul>
  ) : (
    <Notifitation />
  );
};
export default Statistics;

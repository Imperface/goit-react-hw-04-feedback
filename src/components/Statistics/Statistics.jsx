import { StatisticItem } from 'components';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.statisticsList}>
    <StatisticItem itemName={'Good'} itemValue={good} />
    <StatisticItem itemName={'Neutral'} itemValue={neutral} />
    <StatisticItem itemName={'Bad'} itemValue={bad} />
    <StatisticItem itemName={'Total'} itemValue={total} />
    <StatisticItem
      itemName={'Positive feedback'}
      itemValue={`${positivePercentage}%`}
    />
  </ul>
);

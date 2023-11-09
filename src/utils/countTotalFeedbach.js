import sum from 'lodash.sum';
const countTotalFeedback = data => {
  return sum(Object.values(data));
};
export default countTotalFeedback;

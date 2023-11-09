import countTotalFeedback from 'components/utils/countTotalFeedbach';
const countFeedbackPercentage = (selectedStat, data) => {
  const countTotalStat = countTotalFeedback(data);
  const keyArray = Object.keys(data);
  const checkStat = keyArray.some(item => item === selectedStat);
  if (!countTotalStat || !checkStat) {
    return;
  }
  return Math.floor((data[selectedStat] / countTotalStat) * 100);
};
export default countFeedbackPercentage;

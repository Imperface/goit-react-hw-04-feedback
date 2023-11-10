import { Feedback, Section, Error, Statistics, Notification } from 'components';
import { useState } from 'react';
import { Notify } from 'notiflix';

Notify.init({
  borderRadius: '30px',
  clickToClose: true,
});

export const App = () => {
  const [good, setGood] = useState(null);
  const [neutral, setNeutral] = useState(null);
  const [bad, setBad] = useState(null);

  const [error, setError] = useState(null);

  const [isFeedback, setIsFeedback] = useState(false);

  const onFeedbackClick = e => {
    // check is target a button

    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    // get mark from button

    const value = e.target.getAttribute('mark');

    // check is button has attribute mark

    if (!value) {
      return;
    }

    // update hook with name 'value'

    switch (value) {
      case 'Good': {
        setGood(prev => prev + 1);
        break;
      }
      case 'Neutral': {
        setNeutral(prev => prev + 1);
        break;
      }
      case 'Bad': {
        setBad(prev => prev + 1);
        break;
      }
      default: {
        Notify.failure('Oops. Something went wrong.');

        // set error message to hook

        setError('Error in switch');
        return;
      }
    }

    // some feedback is added
    // unblock Statistics

    setIsFeedback(true);

    Notify.success(
      `Great. Your feedback ${value} has been successfully added.`
    );
  };

  const getPositiveFeedbackPersentage = () =>
    Math.floor((good / (good + neutral + bad)) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback onFeedbackClick={onFeedbackClick} />
      </Section>

      {error && (
        <Section title="Error">
          <Error error={error} />
        </Section>
      )}

      {/* if isFeedback false, no feedback, show Notification*/}
      {/* if isFeedback true, some feedback added, show Statistics*/}

      <Section title="Statistics">
        {isFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={getPositiveFeedbackPersentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
};

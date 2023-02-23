// import { Component } from 'react';
import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import CountTotalFeedback from './Count/Total';
import { CountPositiveFeedbackPercentage } from './Count/Percent';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClick = name => {
    setState(prevState => {
      const value = prevState[name];
      return {
        ...prevState,
        [name]: value + 1,
      };
    });
  };

  const calcPercent = () => {
    const { good } = state;
    if (!total) {
      return 0;
    }
    const result = Math.round((good / total) * 100);
    return result;
  };
  const { good, neutral, bad } = state;
  const total = good + neutral + bad;

  const goodPercent = calcPercent();
  const keys = Object.keys(state);

  return (
    <>
      <Section title="Please,leave feedback">
        <Buttons keys={keys} click={onClick} />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <Statistics good={good} neutral={neutral} bad={bad} />
            <CountTotalFeedback total={total} />
            <CountPositiveFeedbackPercentage percent={goodPercent} />
          </>
        )}
      </Section>
    </>
  );
};
export default Feedback;
// 123

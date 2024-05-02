import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification'
import css from './App.module.css'

const App = () => {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem('feedback');
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setValues({
      ...values,
      good: 0,
    neutral: 0,
    bad: 0,
    });
  }

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  
  return (
    <div className={css.container}>
      <Description />
      <Options onClick={updateFeedback} total={totalFeedback} onReset={handleReset} />
      {totalFeedback > 0 ? <Feedback values={values} total={totalFeedback} positiveValue={positiveFeedback} /> : <Notification/>}
    </div>
  );
};

export default App;

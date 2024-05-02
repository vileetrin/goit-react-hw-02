import css from './Feedback.module.css'

export default function Feedback({ values: { good, neutral, bad }, total, positiveValue }) {
  return (
    <div>
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveValue}%</li>
      </ul>
    </div>
  );
}

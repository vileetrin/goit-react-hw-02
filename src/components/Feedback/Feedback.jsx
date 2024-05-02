export default function Feedback({ values: { good, neutral, bad }, total, positiveValue }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveValue}%</li>
      </ul>
    </div>
  );
}

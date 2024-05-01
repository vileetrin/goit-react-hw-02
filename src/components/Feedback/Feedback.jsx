export default function Feedback({ values: { good, neutral, bad }, total }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
      </ul>
    </div>
  );
}

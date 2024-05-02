import css from './Options.module.css'

export default function Options({ onClick, total, onReset }) {
  return (
    <div className={css.container}>
      <button onClick={() => onClick('good')}>Good</button>
      <button onClick={() => onClick('neutral')}>Neutral</button>
      <button onClick={() => onClick('bad')}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

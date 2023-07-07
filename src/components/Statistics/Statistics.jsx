import data from '../../data.json';
import css from './Statistics.module.css';
export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <li className="item">
          <span className="label">{data.label[0]}</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

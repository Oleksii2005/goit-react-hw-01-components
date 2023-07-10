import css from './Statistics.module.css';
// import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <span className={css.main_title}>Second task</span>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
// Statistics.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
// export default Statistics;

// import data from '../../data.json';

// import css from './Statistics.module.css';
// export const Statistics = () => {
//   return (
//     <section className={css.statistics}>
//       <h2 className={css.title}>Upload stats</h2>
//       <ul className={css.stat_list}>
//         <li key={data.id[0]} className={css.item}>
//           <span className="label">{data.label[0]}</span>
//           <span className="percentage">{data.percentage[1]}</span>
//         </li>
//         <li key={data.id[2]} className={css.item}>
//           <span className="label">{data.label[2]}</span>
//           <span className="percentage">{data.percentage[1]}</span>
//         </li>
//         <li key={data.id[4]} className={css.item}>
//           <span className="label">{data.label[4]}</span>
//           <span className="percentage">{data.percentage[1]}</span>
//         </li>
//         <li key={data.id[1]} className={css.item}>
//           <span className="label">{data.label[1]}</span>
//           <span className="percentage">{data.percentage[1]}</span>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Statistics;

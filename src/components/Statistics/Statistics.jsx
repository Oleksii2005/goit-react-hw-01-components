// import data from '../../data.json';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = props => {
  return props.products.map(product => (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.stat_list}>
        <li key={product.id[0]} className={css.item}>
          <span className="label">{product.label[0]}</span>
          <span className="percentage">{product.percentage[1]}</span>
        </li>
        <li key={product.id[2]} className={css.item}>
          <span className="label">{product.label[2]}</span>
          <span className="percentage">{product.percentage[1]}</span>
        </li>
        <li key={product.id[4]} className={css.item}>
          <span className="label">{product.label[4]}</span>
          <span className="percentage">{product.percentage[1]}</span>
        </li>
        <li key={product.id[1]} className={css.item}>
          <span className="label">{product.label[1]}</span>
          <span className="percentage">{product.percentage[1]}</span>
        </li>
      </ul>
    </section>
  ));
};
Statistics.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

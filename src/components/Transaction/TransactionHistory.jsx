import css from './Transaction.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.main_list}>
        <tr className={css.option_list}>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id} className={css.amounts}>
          <tr>
            <td className={css.first}>{type}</td>
            <td className={css.second}>{amount}</td>
            <td className={css.third}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

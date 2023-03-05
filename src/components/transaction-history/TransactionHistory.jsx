import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tableRow} key={item.id}>
            <td className={css.text}>{item.type}</td>
            <td className={css.text}>{item.amount}</td>
            <td className={css.text}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import s from './TrnascationHistoryItem.module.css'

const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
      <tr className={s.tr}>
        <td className={s.td}>{type}</td>
        <td className={s.td}>{amount}</td>
        <td className={s.td}>{currency}</td>
      </tr>
    );
  };
  
  export default TransactionHistoryItem;
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { deleteTransaction as deleteTransactionDB } from './../../services/transactions';

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  const deleteStateAndMongo = (id) => {
    deleteTransaction(id);
    deleteTransactionDB(id);
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}€{Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteStateAndMongo(transaction._id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;

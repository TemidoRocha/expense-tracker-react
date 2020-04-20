import React, { useContext } from 'react';
import { GlobalContext } from './../../context/GlobalState';
import Transaction from './../Transaction/index';

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;

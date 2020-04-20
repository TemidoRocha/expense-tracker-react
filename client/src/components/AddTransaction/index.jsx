import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import {
  transactions as transactionsDB,
  addTransaction as addTransactionDB,
} from './../../services/transactions';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  useEffect(() => {
    async function updateInitialState() {
      try {
        const results = await transactionsDB();
        results.map((result) => addTransaction(result));
      } catch (error) {
        console.log(error);
      }
    }
    if (transactions.length === 0) {
      updateInitialState();
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      _id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransactionDB(newTransaction);
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={onSubmit}>
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;

import React from 'react';
import Header from './components/Header/index';
import Balance from './components/Balance/index';
import IncomeExpenses from './components/IncomeExpenses/index';
import TransactionList from './components/TransactionList/index';
import AddTransaction from './components/AddTransaction/index';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header>Hello World</Header>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';


function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='container'>
        <Balance/>
      </div>
      <div>
        <IncomeExpenses/>
      </div>
      <div>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;

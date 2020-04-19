import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'

import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';


function App() {
  return (
    <GlobalProvider>
          <Header/>
        <div className='container'>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>
  );
}

export default App;

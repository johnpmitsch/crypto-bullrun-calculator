import React, { Fragment, useState } from 'react';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions(transactions.concat(transaction));
  };

  return (
    <Fragment>
      <TransactionForm addTransaction={addTransaction} />
      {transactions.map(({ name, price, amount }, i) => (
        <Transaction key={`${name}${i}`} {...{ name, price, amount }} />
      ))}
    </Fragment>
  );
};

export default Transactions;

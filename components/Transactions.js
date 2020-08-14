import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions(transactions.concat(transaction));
  };

  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full px-2">
        <div className="rounded border-2 border-border p-2 text-center items-center">
          <h3 className="text-lg font-bold">New Transaction</h3>
          <TransactionForm addTransaction={addTransaction} />
        </div>

        {transactions.map(({ name, price, amount }, i) => (
          <Transaction key={`${name}${i}`} {...{ name, price, amount }} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;

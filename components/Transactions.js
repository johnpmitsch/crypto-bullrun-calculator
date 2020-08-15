import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const date = new Date();
    transaction.created = date.toUTCString();
    setTransactions(transactions.concat(transaction));
  };

  const removeTransaction = (created) => {
    console.log(created);
    setTransactions(transactions.filter((item) => item.created !== created));
  };

  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full px-2">
        <div className="p-2 text-center items-center">
          <TransactionForm addTransaction={addTransaction} />
        </div>

        {transactions.map((transaction) => (
          <div key={transaction.created} className="w-full px-2 py-4">
            <Transaction {...{ transaction, removeTransaction }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

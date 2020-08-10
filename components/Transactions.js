import React, { Fragment, useState } from 'react';
import TransactionForm from './TransactionForm';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions(transactions.concat(transaction));
    }

    return (
        <Fragment>
            <TransactionForm addTransaction={addTransaction} />
            {transactions.map(({ name, price, amount}, i) => (
                <Fragment key={`${name}${i}`}>
                <div>{name}</div>
                <div>{price}</div>
                <div>{amount}</div>
                </Fragment>
            ))}
        </Fragment>
    )
}

export default Transactions;
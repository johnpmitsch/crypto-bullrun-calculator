import React, { Fragment } from 'react';

const Transaction = ({ transaction, removeTransaction }) => {
  const { name, price, amount, created } = transaction;
  return (
    <Fragment>
      <div className={'text-lg text-center'}>
        {amount} {name} was bought for {price}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          removeTransaction(created);
        }}
      >
        x
      </button>
    </Fragment>
  );
};

export default Transaction;

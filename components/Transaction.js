import React, { Fragment } from 'react';

const Transaction = ({ transaction, removeTransaction }) => {
  const { name, price, amount, created, currency } = transaction;
  const formattedPrice = new Intl.NumberFormat(window.navigator.language, {
    style: 'currency',
    currency,
  }).format(price);

  return (
    <Fragment>
      <div className={'w-full lg:w-1/3 p-2'}>
        <div
          className={
            'bg-secondaryBackground shadow-lg rounded text-lg text-center p-6'
          }
        >
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeTransaction(created);
              }}
            >
              {'Delete'}
            </button>
          </div>
          {amount} {name} was bought for {formattedPrice}
        </div>
      </div>
    </Fragment>
  );
};

export default Transaction;

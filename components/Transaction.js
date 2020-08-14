import React, { Fragment } from 'react';

const Transaction = ({ name, price, amount }) => {
  return (
    <Fragment>
      <div>{name}</div>
      <div>{price}</div>
      <div>{amount}</div>
    </Fragment>
  );
};

export default Transaction;

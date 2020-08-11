// name
// amount
// bought at

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const TransactionForm = ({ addTransaction }) => {
    const { errors, register, handleSubmit } = useForm();

    const onSubmit = ({ name, amount, price }) => {
      addTransaction({ name, amount, price })
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          I bought&nbsp;
          <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" placeholder="amount" name="amount" type="number" step="any" ref={register({ required: true, min: 0 })} />
          &nbsp;of&nbsp;
          <input placeholder="name of cryptocurrency" name="name" type="text" ref={register({ required: true })} />
          &nbsp;at&nbsp;
          <input placeholder="price at purchase" name="price" type="number"  step="any" ref={register({ required: true, min: 0 })} />
        </div>
        <div>
          { errors.name && "Name is required"}
          { errors.amount && "Amount is required and must be a valid number"}
          { errors.price && "Price is required and must be a valid number"}
        </div>
        <input type="submit" />
      </form>
    );
}

export default TransactionForm;
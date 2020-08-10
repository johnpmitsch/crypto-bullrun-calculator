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
          <label>
            Name of cryptocurrency:
            <input name="name" type="text" ref={register({ required: true })} />
          </label>
          { errors.name && "Name is required"}
        </div>
        <div>
          <label>
            Amount Purchased:
            <input name="amount" type="number" step="any" ref={register({ required: true, min: 0 })} />
          </label>
          { errors.amount && "Amount is required and must be a valid number"}
        </div>
        <div>
          <label>
            Price at purchase:
            <input name="price" type="number"  step="any" ref={register({ required: true, min: 0 })} />
            { errors.price && "Price is required and must be a valid number"}
          </label>
        </div>
        <input type="submit" />
      </form>
    );
}

export default TransactionForm;
// name
// amount
// bought at

import React from 'react';
import { useForm } from 'react-hook-form';

const TransactionForm = ({ addTransaction }) => {
  const { errors, register, handleSubmit } = useForm();
  const inputClass =
    'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none';

  const onSubmit = ({ name, amount, price }) => {
    addTransaction({ name, amount, price });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="items-center">I bought&nbsp;</div>
      <div className="items-center">
        <input
          className={inputClass}
          placeholder="amount"
          name="amount"
          type="number"
          step="any"
          ref={register({ required: true, min: 0 })}
        />
      </div>
      <div className="items-center">&nbsp;of&nbsp;</div>
      <div className="items-center">
        <input
          className={inputClass}
          placeholder="name of cryptocurrency"
          name="name"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div className="items-center">&nbsp;at&nbsp;</div>
      <div className="items-center">
        <input
          className={inputClass}
          placeholder="price at purchase"
          name="price"
          type="number"
          step="any"
          ref={register({ required: true, min: 0 })}
        />
      </div>
      <div className="items-center">
        {errors.name && (
          <div
            className="w-full bg-red-100 border border-red-400 text-red-700 my-1 p-2 rounded"
            role="alert"
          >
            Name is required
          </div>
        )}
        {errors.amount && (
          <div
            className="w-full bg-red-100 border border-red-400 text-red-700 my-1 p-2 rounded"
            role="alert"
          >
            Amount is required and must be a valid number
          </div>
        )}
        {errors.price && (
          <div
            className="w-full bg-red-100 border border-red-400 text-red-700 my-1 p-2 rounded"
            role="alert"
          >
            Price is required and must be a valid number
          </div>
        )}
      </div>
      <input
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
};

export default TransactionForm;

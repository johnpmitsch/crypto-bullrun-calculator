import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorAlert from './ErrorAlert';
import NumberInput from './inputs/NumberInput';

const TransactionForm = ({ addTransaction }) => {
  const { errors, register, setValue, handleSubmit } = useForm();
  const inputClass =
    'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none';

  const onSubmit = ({ name, amount, price }) => {
    addTransaction({ name, amount, price });
    setValue('name', '');
    setValue('amount', null);
    setValue('price', null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="items-center">I bought&nbsp;</div>
      <div className="items-center">
        <NumberInput
          ref={register({ required: true, min: 0 })}
          name={'amount'}
          placeholder={'amount'}
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
        <NumberInput
          ref={register({ required: true, min: 0 })}
          placeholder={'price at purchase'}
          name={'price'}
        />
      </div>
      <div className="items-center">
        {errors.amount && (
          <ErrorAlert
            message={'Amount is required and must be a valid number'}
          />
        )}
        {errors.name && (
          <ErrorAlert message={'Name of cryptocurrency is required'} />
        )}
        {errors.price && (
          <ErrorAlert
            message={'Price is required and must be a valid number'}
          />
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

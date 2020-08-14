import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorAlert from './ErrorAlert';
import NumberInput from './inputs/NumberInput';

const TransactionForm = ({ addTransaction }) => {
  const { errors, register, setValue, handleSubmit } = useForm();
  const inputClass =
    'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none text';
  const newTransactionClass = 'w-full lg:w-1/3 items-end';

  const onSubmit = ({ name, amount, price }) => {
    addTransaction({ name, amount, price });
    setValue('name', '');
    setValue('amount', null);
    setValue('price', null);
  };

  return (
    <div className="flex flex-wrap -mx-2 text-center items-center">
      {errors.amount && (
        <ErrorAlert message={'Amount is required and must be a valid number'} />
      )}
      {errors.name && (
        <ErrorAlert message={'Name of cryptocurrency is required'} />
      )}
      {errors.price && (
        <ErrorAlert message={'Price is required and must be a valid number'} />
      )}

      <div className="w-full px-2">
        <form className={'flex flex-wrap'} onSubmit={handleSubmit(onSubmit)}>
          <div className={newTransactionClass}>
            <span>I bought&nbsp;</span>
            <NumberInput
              ref={register({ required: true, min: 0 })}
              name={'amount'}
              placeholder={'amount'}
            />
          </div>
          <div className={newTransactionClass}>
            <span>&nbsp;of&nbsp;</span>
            <input
              className={`${inputClass} flex-grow`}
              placeholder="name of cryptocurrency"
              name="name"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div className={newTransactionClass}>
            <span>&nbsp;at&nbsp;</span>
            <NumberInput
              ref={register({ required: true, min: 0 })}
              placeholder={'price at purchase'}
              name={'price'}
            />
          </div>
          <input
            type="submit"
            className="bg-primary hover:bg-primaryHover text-background font-bold py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;

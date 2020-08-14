import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorAlert from './ErrorAlert';
import NumberInput from './inputs/NumberInput';

const TransactionForm = ({ addTransaction }) => {
  const { errors, register, setValue, handleSubmit } = useForm();
  const inputClass =
    'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none text';
  const transactionWordClass = 'w-full lg:w-1/12 text-xl';
  const transactionInputClass = 'w-full lg:w-3/12';

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

      <div className="w-full px-2 py-4">
        <form className={'flex flex-wrap'} onSubmit={handleSubmit(onSubmit)}>
          <div className={transactionWordClass}>
            <span>I bought&nbsp;</span>
          </div>
          <div className={transactionInputClass}>
            <NumberInput
              ref={register({ required: true, min: 0 })}
              name={'amount'}
              placeholder={'amount'}
            />
          </div>
          <div className={transactionWordClass}>
            <span>&nbsp;of&nbsp;</span>
          </div>
          <div className={transactionInputClass}>
            <input
              className={`${inputClass} flex-grow`}
              placeholder="cryptocurrency name"
              name="name"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div className={transactionWordClass}>
            <span>&nbsp;at&nbsp;</span>
          </div>
          <div className={transactionInputClass}>
            <NumberInput
              ref={register({ required: true, min: 0 })}
              placeholder={'price at purchase'}
              name={'price'}
            />
          </div>
          <div className="w-full py-4">
            <input
              type="submit"
              className="bg-primary hover:bg-primaryHover text-background font-bold py-2 px-4 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;

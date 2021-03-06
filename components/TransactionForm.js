import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorAlert from './ErrorAlert';
import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import CurrencySelector from './CurrencySelector';

const TransactionForm = ({ addTransaction }) => {
  const { errors, register, setValue, handleSubmit } = useForm();
  const transactionLabelClass = 'text-sm font-bold mb-2';

  const onSubmit = ({ name, amount, price, currency }) => {
    addTransaction({ name, amount, price, currency });
    setValue('name', '');
    setValue('amount', null);
    setValue('price', null);
  };

  return (
    <div className="flex flex-wrap -mx-2 text-center items-center">
      <div className="w-full lg:w-1/3 mr-auto ml-auto justify-center text-center items-center">
        <form
          className="bg-secondaryBackground shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="w-full mb-4 text-xl font-bold">Add Transaction</h3>
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
          <label className={transactionLabelClass} htmlFor="amount">
            Amount purchased
          </label>
          <NumberInput
            ref={register({ required: true, min: 0 })}
            name={'amount'}
            placeholder={0.25}
          />
          <label className={transactionLabelClass} htmlFor="name">
            Cryptocurrency name
          </label>
          <TextInput
            ref={register({ required: true })}
            name={'name'}
            placeholder={'Bitcoin'}
          />
          <label className={transactionLabelClass} htmlFor="price">
            Price purchased at
          </label>
          <NumberInput
            ref={register({ required: true, min: 0 })}
            name={'price'}
            placeholder={'2945.74'}
          />
          <label className={transactionLabelClass} htmlFor="price">
            Currency
          </label>
          <CurrencySelector ref={register({ required: true })} />
          <div className="py-4">
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

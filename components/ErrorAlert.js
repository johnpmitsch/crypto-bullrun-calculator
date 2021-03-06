import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div className={'w-full p-2'} role="alert">
      <div className={'rounded border border-red text-red p-2'}>{message}</div>
    </div>
  );
};

export default ErrorAlert;

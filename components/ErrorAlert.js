import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div
      className="w-full bg-red-100 border border-red-400 text-red-700 my-1 p-2 rounded"
      role="alert"
    >
      {message}
    </div>
  );
};

export default ErrorAlert;

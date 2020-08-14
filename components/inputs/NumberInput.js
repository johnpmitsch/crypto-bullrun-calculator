import React, { forwardRef } from 'react';
import basicInputClass from './classes';

const NumberInput = forwardRef(({ placeholder, name }, ref) => {
  return (
    <span className={'max-width-xs'}>
      <input
        className={basicInputClass}
        placeholder={placeholder}
        name={name}
        type="number"
        step="any"
        ref={ref}
      />
    </span>
  );
});

NumberInput.displayName = 'NumberInput';

export default NumberInput;

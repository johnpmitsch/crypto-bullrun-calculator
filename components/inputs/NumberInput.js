import React, { Fragment, forwardRef } from 'react';
import basicInputClass from './classes';

const NumberInput = forwardRef(({ placeholder, name }, ref) => {
  return (
    <Fragment>
      <input
        className={basicInputClass}
        placeholder={placeholder}
        name={name}
        type="number"
        step="any"
        ref={ref}
      />
    </Fragment>
  );
});

NumberInput.displayName = 'NumberInput';

export default NumberInput;

import React, { forwardRef } from 'react';
import basicInputClass from './classes';

const TextInput = forwardRef(({ placeholder, name }, ref) => {
  return (
    <span className={'max-width-xs'}>
      <input
        className={basicInputClass}
        placeholder={placeholder}
        name={name}
        type="text"
        ref={ref}
      />
    </span>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;

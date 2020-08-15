import React, { forwardRef } from 'react';
import basicInputClass from './inputs/classes';

const worldCurrencies = require('../lib/worldCurrencies.json');

const CurrencySelector = forwardRef((_, ref) => {
  return (
    <span className="max-width-xs">
      <select
        ref={ref}
        name={'currency'}
        className={`${basicInputClass} bg-white text-black`}
      >
        {Object.keys(worldCurrencies).map((currency) => {
          const currencyInfo = worldCurrencies[currency];
          const { symbol, name } = currencyInfo;
          return (
            <option
              key={currency}
              value={currency}
            >{`${name} - ${symbol}`}</option>
          );
        })}
      </select>
    </span>
  );
});

CurrencySelector.displayName = 'CurrencySelector';

export default CurrencySelector;

import React, { useState } from 'react';
import './style.scss';

interface RangeSelectorProps {
  number?: number;
}

const RangeSelector: React.FC<RangeSelectorProps> = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(10);
  const [stepValue, setStepValue] = useState(1);
  const [fromChecked, setFromChecked] = useState(false);
  const [toChecked, setToChecked] = useState(false);

  return (
    <div className="range-selector">
      <label>
        from
        <input
          type="number"
          value={fromValue}
          onChange={(e) => setFromValue(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={fromChecked}
          onChange={(e) => setFromChecked(e.target.checked)}
        />
      </label>
      <label>
        to
        <input
          type="number"
          value={toValue}
          onChange={(e) => setToValue(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={toChecked}
          onChange={(e) => setToChecked(e.target.checked)}
        />
      </label>
      <label>
        step
        <input
          type="number"
          value={stepValue}
          onChange={(e) => setStepValue(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default RangeSelector;

import React, { useState } from 'react';
import './style.scss';
import DropDown from '../DropDown';
import RangeSelector from '../RangeSelector';

const IntegerTable: React.FC = () => {
  const [numRange, setNumRange] = useState(0);
  const [numNumber, setNumNumber] = useState(0);

  const createRange = () => {
    setNumRange(numRange + 1);
  };
  const createNumber = () => {
    setNumNumber(numNumber + 1);
  }
  const [selectedType, setSelectedType] = useState<string>('range');
  const handleSelectedType = (selectedType: string) => {
    setSelectedType(selectedType);
  };

  return (
    <>
      <table className="row">
        <tr className="cell">
          <td className="property">value</td>
        </tr>
        <tr className="cell">
          <td className="value flexContainer">
            <DropDown
              options={['range', 'number']}
              value={selectedType}
              className="normal__dropdown"
              onOptionSelected={handleSelectedType}
            />
            {selectedType === 'range' && (
              <span
                className="clickable iconfont"
                onClick={createRange}
              >
                &#xed1b;
              </span>
            )}
            {selectedType === 'number' && (
              <span
                className="clickable iconfont"
                style={{ cursor: 'pointer' }}
                onClick={createNumber}
              >
                &#xed1b;
              </span>
            )}

          </td>
        </tr>
      </table>

      {Array.from({ length: numRange }).map((_, index) => (
        <table className="row sub-row">
          <tr className="cell">
            <td className="property">{`range-${index + 1}`}</td>
          </tr>
          <tr className="cell">
            <td className="value">
              <RangeSelector key={index} number={index + 1} />
            </td>
          </tr>
        </table>
      ))}

      {Array.from({ length: numNumber }).map((_, index) => (
        <table className="row sub-row">
          <tr className="cell">
            <td className="property">{`number-${index + 1}`}</td>
          </tr>
          <tr className="cell">
            <td className="value">
              <input type="number" style={{ width: '5em' }} />
            </td>
          </tr>
        </table>
      ))}
    </>
  );
};

export default IntegerTable;

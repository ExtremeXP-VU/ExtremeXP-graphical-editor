import React, { useState } from 'react';
import './style.scss';
import DropDown from '../DropDown';

const BooleanTable: React.FC = () => {
  const [numBool, setNumBool] = useState(0);
  const [selectedType, setSelectedType] = useState<string>('true');

  // Function to handle the selected type from DropDown
  const handleSelectedType = (selectedType: string) => {
    setSelectedType(selectedType);
  };

  const createString = () => {
    setNumBool(numBool + 1);
  };

  return (
    <>
      <table className="row">
        <tbody>
          <tr className="cell">
            <td className="property">value</td>
          </tr>
          <tr className="cell">
            <td className="value flexContainer">
              <DropDown
                options={['true', 'false']}
                defaultValue={selectedType}
                className="normal__dropdown"
                onOptionSelected={handleSelectedType}
              />
              <span className="clickable iconfont" onClick={createString}>
                &#xed1b;
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {Array.from({ length: numBool }).map((_, index) => (
        <table className="row sub-row" key={index}>
          <tbody>
            <tr className="cell">
              <td className="property">{`bool-${index + 1}`}</td>
            </tr>
            <tr className="cell">
              <td className="value">
                <DropDown
                  options={['true', 'false']}
                  defaultValue={selectedType}
                  className="normal__dropdown"
                />
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};

export default BooleanTable;

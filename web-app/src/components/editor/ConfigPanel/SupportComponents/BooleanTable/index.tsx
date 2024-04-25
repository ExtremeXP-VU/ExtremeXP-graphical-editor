import React, { useEffect, useState } from 'react';
import './style.scss';
import DropDown from '../DropDown';
import { Action, BooleanReducer } from './reducer';
import { useImmerReducer } from 'use-immer';

type TableProps = {
  onValueUpdated: (value: boolean[]) => void;
  booleans: boolean[];
};

const BooleanTable: React.FC<TableProps> = ({booleans, onValueUpdated}) => {
  
  const [selectedType, setSelectedType] = useState<string>('true');
  const [booleanState, booleanDispatch] = useImmerReducer(
    BooleanReducer,
    booleans
  );

  const handleSelectedType = (selectedType: string) => {
    setSelectedType(selectedType);
  };

  const addBoolean = (selectedType: string) => {
    let payload = false;
    if (selectedType === 'true') 
      payload = true;
    else payload = false;
    const action: Action = {
      type: 'ADD_BOOLEAN',
      payload: payload,
    };
    booleanDispatch(action);
  }

  // Function to handle the selected type from DropDown and update the state
  const handleSelectedBoolean = (index:number, selected: string) => {
    let value = false;
    if (selected === 'true') 
      value = true;
    else value = false;
    const action: Action = {
      type: 'UPDATE_BOOLEAN',
      payload: {index, value},
    };
    booleanDispatch(action);
  };


  useEffect(() => {
    onValueUpdated(booleanState);
  }, [booleanState]);

  return (
    <>
      <table className="row">
        <tbody className="cell">
          <tr>
            <td className="property">value</td>
          </tr>
        </tbody>
        <tbody className="cell">
          <tr>
            <td className="value flexContainer">
              <DropDown
                options={['true', 'false']}
                value={selectedType}
                className="normal__dropdown"
                onOptionSelected={handleSelectedType}
              />
              <span className="clickable iconfont" onClick={()=>addBoolean(selectedType)}>
                &#xed1b;
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {booleanState?.map((boolean, index) => (
        <table className="row sub-row" key={index}>
          <tbody className="cell">
            <tr>
              <td className="property">{`bool-${index + 1}`}</td>
            </tr>
          </tbody>
          <tbody className="cell">
            <tr>
              <td className="value">
                <DropDown
                  options={['true', 'false']}
                  value={String(boolean)}
                  className="normal__dropdown"
                  onOptionSelected={(value) => handleSelectedBoolean(index, value)}
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

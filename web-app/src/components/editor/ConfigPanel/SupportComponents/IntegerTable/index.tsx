import React, { useState } from 'react';
import './style.scss';
import DropDown from '../DropDown';
import RangeSelector from '../RangeSelector';
import { useImmerReducer } from 'use-immer';
import { Action, IntegerReducer } from './reducer';

type TableProps = {
  onValueUpdated: (value: unknown) => void;
  numbers: number[];
};

const IntegerTable: React.FC<TableProps> = ({numbers}) => {
  const [numRange, setNumRange] = useState(0);
  const [integerState, integerDispatch] = useImmerReducer(
    IntegerReducer,
    numbers
  );

  // if(numbers){
  //   console.log(numbers);
  // }

  const createRange = () => {
    setNumRange(numRange + 1);
  };
  const createNumber = () => {
    const action: Action = {
      type: 'ADD_NUMBER',
      payload: 1,
    };
    integerDispatch(action);
  }
  const [selectedType, setSelectedType] = useState<string>('range');
  const handleSelectedType = (selectedType: string) => {
    setSelectedType(selectedType);
  };

  const handleChangeInteger = (index:number, event: React.ChangeEvent<HTMLInputElement>) => {
    const action : Action = {
      type: 'UPDATE_NUMBER',
      payload: {index: index, value: parseInt(event.target.value)}
    }
    integerDispatch(action);
    console.log('integerState: ', integerState);
  }

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

      {integerState?.map((number, index) => (
        <table className="row sub-row">
          <tr className="cell">
            <td className="property">{`number-${index + 1}`}</td>
          </tr>
          <tr className="cell">
            <td className="value">
              <input key={index} type="number" style={{ width: '5em' }} value={number} onChange={(event)=>handleChangeInteger(index,event)}   />
            </td>
          </tr>
        </table>
      ))}
    </>
  );
};

export default IntegerTable;

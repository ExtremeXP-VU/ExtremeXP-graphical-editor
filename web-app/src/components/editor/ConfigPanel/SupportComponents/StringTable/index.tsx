import React, { useEffect } from 'react';
import './style.scss';
import { Action, BlobReducer } from './reducer';
import { useImmerReducer } from 'use-immer';


type TableProps = {
  onStringsUpdated: (value: string[]) => void;
  strings: string[];
};

const StringTable: React.FC<TableProps> = ({strings, onStringsUpdated}) => {
  
  const [blobState, blobDispatch] = useImmerReducer(
    BlobReducer,
    strings
  );

  const addBlob = () => {
    const action: Action = {
      type: 'ADD_BLOB',
      payload: 'New String',
    };
    blobDispatch(action);
  };

  const handleChangeBlob = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const action: Action = {
      type: 'UPDATE_BLOB',
      payload: { index: index, value: event.target.value },
    };
    blobDispatch(action);
  };

  useEffect(() => {
    // Invoke the function from props
    onStringsUpdated(blobState);
  }, [blobState, onStringsUpdated]);
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
              <span className="clickable iconfont" onClick={addBlob}>
                &#xed1b;
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {blobState.map((blob, index) => (
        <table className="row sub-row" key={index}>
        <tbody className="cell">
          <tr>
            <td className="property">{`string-${index + 1}`}</td>
          </tr>
        </tbody>
        <tbody className="cell">
          <tr>
            <td className="value">
              <input type="string" 
              key={index}
              value={blob}
              onChange={(event) => handleChangeBlob(index, event)} />
            </td>
          </tr>
        </tbody>
      </table>
      ))}
    </>
  );
};

export default StringTable;

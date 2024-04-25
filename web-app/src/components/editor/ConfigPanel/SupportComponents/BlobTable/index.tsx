import React, { useEffect } from 'react';
import './style.scss';
import { useImmerReducer } from 'use-immer';
import { Action, BlobReducer } from './reducer';

type TableProps = {
  onBlobsUpdated: (value: string[]) => void;
  blobs: string[];
};

const BooleanTable: React.FC<TableProps> = ({blobs, onBlobsUpdated}) => {

  const [blobState, blobDispatch] = useImmerReducer(
    BlobReducer,
    blobs
  );

  const addBlob = () => {
    const action: Action = {
      type: 'ADD_BLOB',
      payload: 'New Blob',
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
    onBlobsUpdated(blobState);
  }, [blobState, onBlobsUpdated]);


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
            <td className="property">{`blob-${index + 1}`}</td>
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

export default BooleanTable;

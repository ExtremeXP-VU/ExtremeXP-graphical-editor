import React, { useState } from 'react';
import './style.scss';

const BlobTable: React.FC = () => {
  const [numString, setNumString] = useState(0);


  const createString = () => {
    setNumString(numString + 1);
  }

  return (
    <>
      <table className="row">
        <tr className="cell">
          <td className="property">value</td>
        </tr>
        <tr className="cell">
          <td className="value">
           
          <span
                className="iconfont"
                style={{ cursor: 'pointer' }}
                onClick={createString}
              >
                &#xed1b;
              </span>

          </td>
        </tr>
      </table>

      {Array.from({ length: numString }).map((_, index) => (
        <table className="row sub-row">
          <tr className="cell">
            <td className="property">{`blob-${index + 1}`}</td>
          </tr>
          <tr className="cell">
            <td className="value">
              <input type="string" style={{ width: '10em' }} />
            </td>
          </tr>
        </table>
      ))}
    </>
  );
};

export default BlobTable;

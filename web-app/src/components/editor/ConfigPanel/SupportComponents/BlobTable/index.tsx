import React, { useState } from 'react';
import './style.scss';

const BlobTable: React.FC = () => {
  const [numString, setNumString] = useState(0);

  const createString = () => {
    setNumString(numString + 1);
  };

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
              <td className="value">
                <span className="clickable iconfont" onClick={createString}>
                  &#xed1b;
                </span>
              </td>
            </tr>
          </tbody>
      </table>

      {Array.from({ length: numString }).map((_, index) => (
        <table className="row sub-row" key={index} >
            <tbody className="cell">
              <tr>
                <td className="property">{`blob-${index + 1}`}</td>
              </tr>
            </tbody>
            <tbody className="cell">
              <tr>
                <td className="value">
                  <input type="string" style={{ width: '10em' }} />
                </td>
              </tr>
            </tbody>
        </table>
      ))}
    </>
  );
};

export default BlobTable;

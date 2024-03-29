import React, { useState } from 'react';
import './style.scss';

const StringTable: React.FC = () => {
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
                className="clickable iconfont"
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
            <td className="property">{`string-${index + 1}`}</td>
          </tr>
          <tr className="cell">
            <td className="value">
              <input type="string"/>
            </td>
          </tr>
        </table>
      ))}
    </>
  );
};

export default StringTable;

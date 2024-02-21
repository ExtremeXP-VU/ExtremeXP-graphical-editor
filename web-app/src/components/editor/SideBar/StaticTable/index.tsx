import React, { FC } from 'react';
import './style.scss';
// TODO finish the static TABLE and dynamic ones for different types.

type TableProps = {
  properties: {
    name: string;
    description: string;
    abstract?: JSX.Element; // For the radio buttons
    implementation?: JSX.Element; // For any custom element, like a link
    group?: JSX.Element; // For dropdown
    type?: JSX.Element; // For dropdown
  };
};

const StaticTable: FC<TableProps> = ({ properties }) => {
  const entries = Object.entries(properties); // Convert the properties object to an array of entries

  return (
    <div className="table-component">
      <div className="header-text">Generic Properties</div>
      {/* Header Row */}
      <table className="row odd header-row">
        <tr className="cell">
          <td className='property'>Property</td>
        </tr>
        <tr className="cell">
          <td className='value'>Value</td>
        </tr>
      </table>

      {/* Data row */}
      {entries.map(([key, value], index) => (
        <table className={`row ${index % 2 === 0 ? 'even' : 'odd'}`} key={key}>
          <tr className="cell">
          <td className='property'> {key}</td>
          </tr>
          <tr className="cell">
          <td className='value'> {value}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};

export default StaticTable;

import React from 'react';
import './style.scss';

type TableProps = {
  properties: {
    name: JSX.Element;
    description: JSX.Element;
    abstract?: JSX.Element; // For the radio buttons
    implementation?: string; // For custom element, like a link
    group?: JSX.Element; // For dropdown
    type?: JSX.Element; // For dropdown


    range?: JSX.Element; // For the range input
  };
};

const StaticTable: React.FC<TableProps> = ({ properties }) => {
  const entries = Object.entries(properties); // Convert the properties object to an array of entries

  return (
    <div className="table-component">
      <div className="header-text">Generic Properties</div>
      {/* Header Row */}
      <table className="row header-row">
        <tr className="cell">
          <td className='property'>property</td>
        </tr>
        <tr className="cell">
          <td className='value'>value</td>
        </tr>
      </table>

      {/* Data row */}
      {entries.map(([key, value]) => (
        <table className={`row `} key={key}>
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

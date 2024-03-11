import React, { useState } from 'react';
import './style.scss';
import DropDown from '../DropDown';
import RadioButton from '../RadioButton';
import IntegerTable from '../IntegerTable';
import RealTable from '../RealTable';
import StringTable from '../StringTable';
import BooleanTable from '../BooleanTable';
import BlobTable from '../BlobTable';

interface DynamicTableProps {
  number: number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({number}) => {
  const [selectedType, setSelectedType] = useState<string>('please select a type');

  // Function to handle the selected type from DropDown
  const handleSelectedType = (selectedType: string) => {
    setSelectedType(selectedType);
  };

  return (
    <div className="table-component">
      <div className="header-text">Parameter {number}</div>
      {/* Header Row */}
      <table className="row header-row">
        <tr className="cell">
          <td className="property">property</td>
        </tr>
        <tr className="cell">
          <td className="value">value</td>
        </tr>
      </table>

      {/* Data row */}
      <table className={`row `}>
        <tr className="cell">
          <td className="property"> name</td>
        </tr>
        <tr className="cell">
          <td className="value">
            <input type="text" className="transparent-input" defaultValue={`click to enter`} />
          </td>
        </tr>
      </table>
      <table className={`row `}>
        <tr className="cell">
          <td className="property"> type</td>
        </tr>
        <tr className="cell">
          <td className="value">
            <DropDown
              options={[
                'please select a type',
                'integer',
                'real',
                'blob',
                'string',
                'array',
                'boolean',
              ]}
              defaultValue={selectedType}
              className="normal__dropdown"
              onOptionSelected={handleSelectedType}
            />
          </td>
        </tr>
      </table>
      <table className={`row `}>
        <tr className="cell">
          <td className="property"> abstract</td>
        </tr>
        <tr className="cell">
          <td className="value">
            <RadioButton
              choices={[
                { label: 'yes', value: 'yes' },
                { label: 'no', value: 'no' },
              ]}
              defaultValue="no"
              name={`abstract-${number}`}
            />
          </td>
        </tr>
      </table>
      {selectedType === 'integer' && <IntegerTable />}
      {selectedType === 'real' && <RealTable />}
      {selectedType === 'blob' && <BlobTable />}
      {selectedType === 'string' && <StringTable />}
      {selectedType === 'array' && <div>array</div> }
      {selectedType === 'boolean' && <BooleanTable />}
    </div>
  );
};

export default DynamicTable;

import React from 'react';
import './style.scss';
import DropDown from './DropDown';
import RadioButton from './RadioButton';
// import RangeSelector from "./RangeSelector";
import StaticTable from './StaticTable';
import CustomButton from './CustomButton';
import DynamicTable from './DynamicTable';

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [numParameters, setNumParameters] = React.useState(0);

  const addParameter = () => {
    setNumParameters(numParameters + 1);
  };
  return (
    <div className="sidebar">
      <DropDown
        options={['variant 1', 'variant 2', 'variant 3']}
        defaultValue="variant 1"
        className="variant__dropdown"
      />
      <StaticTable
        properties={{
          name: 'name',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          abstract: (
            <RadioButton
              choices={[
                { label: 'yes', value: 'yes' },
                { label: 'no', value: 'no' },
              ]}
              defaultValue="no"
              name="abstract"
            />
          ),
          implementation: '<URI>',
          group: (
            <DropDown
              options={['group 1', 'group 2', 'group 3']}
              defaultValue="group 1"
              className="normal__dropdown"
            />
          ),
          type: (
            <DropDown
              options={['type 1', 'type 2', 'type 3']}
              defaultValue="type 1"
              className="normal__dropdown"
            />
          ),
        }}
      />

      {Array.from({ length: numParameters }).map((_, index) => (
        <DynamicTable key={index} number={index+1} />
      ))}


      <CustomButton buttonText="add parameter" handleClick={addParameter} />
    </div>
  );
};

export default SideBar;

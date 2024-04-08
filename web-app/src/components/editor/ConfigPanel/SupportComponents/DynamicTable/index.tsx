import React, { useEffect } from 'react';
import './style.scss';
import DropDown from '../DropDown';
import RadioButton from '../RadioButton';
import IntegerTable from '../IntegerTable';
import RealTable from '../RealTable';
import StringTable from '../StringTable';
import BooleanTable from '../BooleanTable';
import BlobTable from '../BlobTable';
import { useParamStore } from '../../../../../stores/configPanelStore';
import { useImmerReducer } from 'use-immer';
import { paramConfigReducer, Action } from '../../TaskConfigPanel/reducer';
import { TaskParameterType } from '../../../../../types/task';

interface DynamicTableProps {
  currentParam: TaskParameterType;
  onParamUpdate: (id: string, param: TaskParameterType) => void;
  onDelete: (id: string) => void;
}
const DynamicTable: React.FC<DynamicTableProps> = ({
  currentParam,
  onParamUpdate,
  onDelete,
}) => {
  const [paramState, paramDispatch] = useImmerReducer(
    paramConfigReducer,
    currentParam
  );

  // 4. at taskconfigpanel, use currentTaskVariant to map params.
  const handleParamNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const action: Action = {
      type: 'UPDATE_PARAM_NAME',
      payload: event.target.value,
    };
    paramDispatch(action);
  };

  const handleParamTypeChange = (option: string) => {
    const action: Action = {
      type: 'UPDATE_PARAM_TYPE',
      payload: option,
    };
    paramDispatch(action);
  };

  const handleParamArbitraryChange = (option: boolean) => {
    const action: Action = {
      type: 'UPDATE_PARAM_ABSTRACT',
      payload: option,
    };
    paramDispatch(action);
  };

  const handleEnterParam = (id: string) => {
    useParamStore.setState({ selectedParamId: id });
  };

  useEffect(() => {
    // Call the function passed from the parent to update the parameter state there
    onParamUpdate(currentParam.id, paramState);
  }, [paramState, currentParam.id, onParamUpdate]);

  return (
    <div
      className="table-component"
      onClick={() => handleEnterParam(currentParam.id)}
    >
      <div
        className="header-text"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>{paramState.name}</span>
        <span
          className="iconfont delete-param"
          onClick={() => {
            // Call the function passed from the parent to delete the parameter
            onDelete(currentParam.id);
          }}
        >
          &#xe600;
        </span>
      </div>
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
            <input
              type="text"
              className="transparent-input"
              onChange={handleParamNameChange}
              value={paramState.name}
            />
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
              value={paramState.type}
              className="normal__dropdown"
              onOptionSelected={handleParamTypeChange}
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
              defaultValue={paramState.abstract ? 'yes' : 'no'}
              onOptionSelected={handleParamArbitraryChange}
              name={`abstract-${paramState.id}`}
            />
          </td>
        </tr>
      </table>
      {paramState.type === 'integer' && <IntegerTable />}
      {paramState.type === 'real' && <RealTable />}
      {paramState.type === 'blob' && <BlobTable />}
      {paramState.type === 'string' && <StringTable />}
      {paramState.type === 'array' && <div>array</div>}
      {/* The array type is to be finished */}
      {paramState.type === 'boolean' && <BooleanTable />}
    </div>
  );
};

export default DynamicTable;

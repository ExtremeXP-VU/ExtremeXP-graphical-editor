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

  const handleIntegerValueUpdated = (updatedValue: number[]) => {
    const action: Action = {
      type: 'UPDATE_INTEGER_VALUE',
      payload: updatedValue,
    };
    paramDispatch(action);
  };

  const handleBlobValueUpdated = (updatedValue: string[]) => {
    const action: Action = {
      type: 'UPDATE_BLOB_VALUE',
      payload: updatedValue,
    };
    paramDispatch(action);
  };

  const handleStringValueUpdated = (updatedValue: string[]) => {
    const action: Action = {
      type: 'UPDATE_STRING_VALUE',
      payload: updatedValue,
    };
    paramDispatch(action);
  };

  const handleBooleanValueUpdated = (updatedValue: boolean[]) => {
    const action: Action = {
      type: 'UPDATE_BOOLEAN_VALUE',
      payload: updatedValue,
    };
    paramDispatch(action);
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
        <thead className="cell">
          <tr>
            <td className="property">property</td>
          </tr>
        </thead>
        <thead className="cell">
          <tr>
            <td className="value">value</td>
          </tr>
        </thead>
      </table>

      {/* Data row */}
      <table className={`row `}>
        <tbody className="cell">
          <tr>
            <td className="property"> name</td>
          </tr>
        </tbody>
        <tbody className="cell">
          <tr>
            <td className="value">
              <input
                type="text"
                className="transparent-input"
                onChange={handleParamNameChange}
                value={paramState.name}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className={`row `}>
        <tbody className="cell">
          <tr>
            <td className="property"> type</td>
          </tr>
        </tbody>
        <tbody className="cell">
          <tr>
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
        </tbody>
      </table>
      <table className={`row `}>
        <tbody className="cell">
          <tr>
            <td className="property"> abstract</td>
          </tr>
        </tbody>
        <tbody className="cell">
          <tr>
            <td className="value">
              <RadioButton
                key={`abstract-${paramState.id}`}
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
        </tbody>
      </table>
      {paramState.type === 'integer' && (
        <IntegerTable
          numbers={
            paramState.values.filter(
              (value) => typeof value === 'number'
            ) as number[]
          }
          key={`integer-${currentParam.id}`}
          onValueUpdated={handleIntegerValueUpdated}
        />
      )}
      {paramState.type === 'real' && (
        <RealTable key={`real-${currentParam.id}`} />
      )}
      {paramState.type === 'blob' && (
        <BlobTable
          blobs={
            paramState.values.filter(
              (value) => typeof value === 'string'
            ) as string[]
          }
          key={`blob-${currentParam.id}`}
          onBlobsUpdated={handleBlobValueUpdated}
        />
      )}
      {paramState.type === 'string' && (
        <StringTable
          key={`string-${currentParam.id}`}
          strings={
            paramState.values.filter(
              (value) => typeof value === 'string'
            ) as string[]
          }
          onStringsUpdated={handleStringValueUpdated}
        />
      )}
      {paramState.type === 'array' && (
        <div key={`array-${currentParam.id}`}>array</div>
      )}
      {paramState.type === 'boolean' && (
        <BooleanTable
          key={`boolean-${currentParam.id}`}
          booleans={
            paramState.values.filter(
              (value) => typeof value === 'boolean'
            ) as boolean[]
          }
          onValueUpdated={handleBooleanValueUpdated}
        />
      )}
    </div>
  );
};

export default DynamicTable;

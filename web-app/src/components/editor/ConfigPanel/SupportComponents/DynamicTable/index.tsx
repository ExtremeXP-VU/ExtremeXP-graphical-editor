import React, { useEffect, useState } from 'react';
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
import { TaskParameterType, TaskVariantType } from '../../../../../types/task';
import { useReactFlowInstanceStore } from '../../../../../stores/reactFlowInstanceStore';

interface DynamicTableProps {
  id: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ id }) => {
  const selectedParamId = useParamStore((state) => state.selectedParamId);
  const selectedParamData = useParamStore((state) => state.selectedParamData);

  const selectedNode = useReactFlowInstanceStore((state) => state.selectedNode);
  const currentTaskVariantId = selectedNode?.data.currentVariant;
  const currentTaskVariant: TaskVariantType = selectedNode?.data.variants.find(
    (variant: TaskVariantType) => variant.id_task === currentTaskVariantId
  );

  const [paramIndex, setParamIndex] = useState<number>(-1);

  useEffect(() => {
    const Index = currentTaskVariant.parameters.findIndex(
      (param: TaskParameterType) => param.id === selectedParamId
    );
    setParamIndex(Index);
    useParamStore.setState({
      selectedParamData: currentTaskVariant.parameters[paramIndex],
    });
    // console.log('selectedParamData', selectedParamData);
  }, [selectedParamId]);

  const [paramState, paramDispatch] = useImmerReducer<
    TaskParameterType,
    Action
  >(paramConfigReducer, selectedParamData);

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

  useEffect(() => {
    useParamStore.setState({ selectedParamData: paramState });
  }, [paramState]);

  const handleEnterParam = (id: string) => {
    // console.log('entering param', id);
    useParamStore.setState({ selectedParamId: id });
  };

  return (
    <div className="table-component" onClick={() => handleEnterParam(id)}>
      <div className="header-text">{paramState.name}</div>
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
              defaultValue={`click to enter`}
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
              defaultValue={paramState.type}
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
              defaultValue="no"
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
      {paramState.type === 'boolean' && <BooleanTable />}
    </div>
  );
};

export default DynamicTable;

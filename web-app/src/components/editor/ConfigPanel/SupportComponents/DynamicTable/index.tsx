import React, { useEffect, useState } from 'react';
import './style.scss';
import DropDown from '../DropDown';
import RadioButton from '../RadioButton';
import IntegerTable from '../IntegerTable';
import RealTable from '../RealTable';
import StringTable from '../StringTable';
import BooleanTable from '../BooleanTable';
import BlobTable from '../BlobTable';
import {
  useConfigPanelStore,
  useParamStore,
} from '../../../../../stores/configPanelStore';
import { useImmerReducer } from 'use-immer';
import { paramConfigReducer, Action } from '../../TaskConfigPanel/reducer';
import { ParameterType, TaskDataType } from '../../../../../types/task';
import { useReactFlowInstanceStore } from '../../../../../stores/reactFlowInstanceStore';

interface DynamicTableProps {
  id: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ id }) => {
  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);

  const selectedParamId = useParamStore((state) => state.selectedParamId);
  const selectedParamData = useParamStore((state) => state.selectedParamData);

  const nodes = useReactFlowInstanceStore((state) => state.nodes);
  const currentNode = nodes.find((node) => node.id === selectedNodeId);
  const selectedVariant = useConfigPanelStore(
    (state) => state.selectedTaskVariant
  );

  const variantIndex = currentNode?.data.variants.findIndex(
    (variant: TaskDataType) => variant.id_task === selectedVariant
  );
  const [paramIndex, setParamIndex] = useState<number>(-1);

  useEffect(() => {
    const Index = currentNode?.data.variants[variantIndex].parameters.findIndex(
      (param: ParameterType) => param.id === selectedParamId
    );
    setParamIndex(Index);
    useParamStore.setState({
      selectedParamData:
        currentNode?.data?.variants[variantIndex]?.parameters[paramIndex],
    });
    // console.log('selectedParamData', selectedParamData);
  }, [selectedParamId]);

  const [paramState, paramDispatch] = useImmerReducer<ParameterType, Action>(
    paramConfigReducer,
    selectedParamData
  );

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

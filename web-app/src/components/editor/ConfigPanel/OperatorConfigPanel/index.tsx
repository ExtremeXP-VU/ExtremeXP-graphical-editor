import './style.scss';
import React, { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import { operatorConfigReducer, Action } from './reducer';
import { shallow } from 'zustand/shallow';
import { useConfigPanelStore } from '../../../../stores/configPanelStore';
// import { useReactFlowInstanceStore } from '../../../../stores/reactFlowInstanceStore';

// import DropDown from '../SupportComponents/DropDown';
// import RadioButton from '../SupportComponents/RadioButton';
import {
  ConditionType,
  defaultCondition,
  OperatorDataType,
} from '../../../../types/operator';
import ConditionTable from '../SupportComponents/ConditionTable';
import {
  RFState,
  useReactFlowInstanceStore,
} from '../../../../stores/reactFlowInstanceStore';
import CustomButton from '../SupportComponents/CustomButton';
import { nanoid } from 'nanoid';

interface OperatorConfigPanelProps {
  updateSideBar: () => void;
}

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  updateNodeData: state.updateNodeData,
  selectedNode: state.selectedNode,
  updateEdgeData: state.updateEdgeData,
});

const OperatorConfigPanel: React.FC<OperatorConfigPanelProps> = () => {
  const { updateNodeData, selectedNode } = useReactFlowInstanceStore(
    selector,
    shallow
  );

  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);
  const selectedOperatorData: OperatorDataType =
    selectedNode?.data as OperatorDataType;

  const edges = useReactFlowInstanceStore((state) => state.edges);
  const outgoingLinks = useConfigPanelStore((state) => state.outgoingLinks);
  const outgoingEdges = edges.filter((edge) =>
    outgoingLinks.some((link) => link.linkId === edge.id)
  );

  const validConditionalOperator = outgoingEdges.length > 1;

  const [operatorState, dispatch] = useImmerReducer(
    operatorConfigReducer,
    selectedOperatorData
  );

  function updateSelectedNodeData(operatorData: OperatorDataType) {
    updateNodeData(
      {
        ...selectedNode?.data,
        conditions: operatorData.conditions,
      },
      selectedNodeId
    );
  }

  useEffect(() => {
    updateSelectedNodeData(operatorState);
  }, [operatorState]);

  const handleUpdateCondition = (
    updatedCondition: ConditionType,
    condition_id: string
  ) => {
    const action: Action = {
      type: 'UPDATE_CONDITION',
      payload: { condition_id, updatedCondition },
    };
    dispatch(action);
  };

  const handleAddCondition = () => {
    const newCondition = {
      ...defaultCondition,
      condition_id: 'condition-' + nanoid(),
      name: 'New Condition',
    };
    const action: Action = {
      type: 'ADD_CONDITION',
      payload: newCondition,
    };
    dispatch(action);
  };

  const onDelete = (condition_id: string) => {
    const action: Action = { type: 'DELETE_CONDITION', payload: condition_id };
    dispatch(action);
  };

  const selectedNodeType = useConfigPanelStore(
    (state) => state.selectedNodeType
  );

  const handleClosePanel = () => {
    useConfigPanelStore.getState().clearConfigStore();
  };

  return (
    <div className="sidebar">
      <span className="iconfont close-button" onClick={handleClosePanel}>
        &#xe600;
      </span>
      <div className="table-component">
        <div className="header-text">Outgoing Links</div>
        {outgoingEdges.map((edge, index) => {
          return (
            <table className={`row `} key={index}>
              <tbody className="cell">
                <tr>
                  <td className="property"> {`Link ${index + 1}`} </td>
                </tr>
              </tbody>
              <tbody className="cell">
                <tr>
                  <td className="value"> {edge.data.label}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>

      {operatorState?.conditions?.map((condition: ConditionType) => (
        <ConditionTable
          currentCondition={condition}
          key={condition.condition_id}
          opType={selectedNodeType}
          onUpdateCondition={handleUpdateCondition}
          onDelete={onDelete}
        />
      ))}

      {selectedNodeType === 'opInclusive' && validConditionalOperator && (
        <CustomButton
          buttonText="add condition"
          handleClick={handleAddCondition}
        />
      )}
    </div>
  );
};

export default OperatorConfigPanel;

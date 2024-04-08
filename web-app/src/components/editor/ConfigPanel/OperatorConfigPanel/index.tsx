import './style.scss';
import React, { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import {operatorConfigReducer,  Action } from './reducer';
import { shallow } from 'zustand/shallow';
import {
  useConfigPanelStore,
} from '../../../../stores/configPanelStore';
// import { useReactFlowInstanceStore } from '../../../../stores/reactFlowInstanceStore';

// import DropDown from '../SupportComponents/DropDown';
// import RadioButton from '../SupportComponents/RadioButton';
import {
  ConditionType,
  OperatorDataType,
} from '../../../../types/operator';
import ConditionTable from '../SupportComponents/ConditionTable';
import {
  RFState,
  useReactFlowInstanceStore,
} from '../../../../stores/reactFlowInstanceStore';

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
  const selectedOperatorData : OperatorDataType = selectedNode?.data as OperatorDataType;

  const [operatorState, dispatch] = useImmerReducer(
    operatorConfigReducer,
    selectedOperatorData
  );

  function updateSelectedNodeData(operatorData: OperatorDataType) {
    updateNodeData(
      {
        ...selectedNode?.data,
        conditions : operatorData.conditions,
      },
      selectedNodeId
    );
  }

  useEffect(() => {
    updateSelectedNodeData(operatorState);
  }, [operatorState]);

  const handleUpdateCondition = (updatedCondition: ConditionType, condition_id: string) => {
    const action: Action = {
      type: 'UPDATE_CONDITION',
      payload: { condition_id, updatedCondition},
    };
    dispatch(action);
  }



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

      {operatorState?.conditions?.map((condition: ConditionType) => (
        <ConditionTable
          currentCondition={condition}
          key={condition.condition_id}
          opType={selectedNodeType}
          onUpdateCondition={handleUpdateCondition}
        />
      ))}
    </div>
  );
};

export default OperatorConfigPanel;

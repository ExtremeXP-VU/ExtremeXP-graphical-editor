import './style.scss';
import React, { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import operatorConfigReducer, { Action } from './reducer';

import {
  useConfigOperatorPanelStore,
  useConfigPanelStore,
} from '../../../../stores/configPanelStore';
// import { useReactFlowInstanceStore } from '../../../../stores/reactFlowInstanceStore';

// import DropDown from '../SupportComponents/DropDown';
// import RadioButton from '../SupportComponents/RadioButton';
import StaticTable from '../SupportComponents/StaticTable';
import { defaultOperatorData } from '../../../../types/operator';
import OperatorTable from '../SupportComponents/ConditionTable';

interface TaskConfigPanelProps {
  updateSideBar: () => void;
}

const OperatorConfigPanel: React.FC<TaskConfigPanelProps> = () => {
  const selectedOperatorData = useConfigOperatorPanelStore(
    (state) => state.selectedOperatorData
  );

  const [operatorState, dispatch] = useImmerReducer(
    operatorConfigReducer,
    selectedOperatorData
  );

  const handleSetCondition = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action: Action = {
      type: 'UPDATE_CONDITION',
      payload: event.target.value,
    };
    dispatch(action);
  };

  const handleSetConditions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action: Action = {
      type: 'UPDATE_CONDITIONS',
      payload: event.target.value.split('||'),
    };
    dispatch(action);
  }

  useEffect(() => {
    useConfigOperatorPanelStore.setState({
      selectedOperatorData: operatorState,
    });
  }, [operatorState]);

  const selectedNodeType = useConfigPanelStore((state) => state.selectedNodeType);

  const handleClosePanel = () => {
    useConfigPanelStore.getState().clearConfigStore();
  };

  return (
    <div className="sidebar">
      <span className="iconfont close-button" onClick={handleClosePanel}>
        &#xe600;
      </span>
      

      {selectedNodeType === 'opExclusive' && (
        <OperatorTable
          properties={{
            condition: (
              <input
                type="text"
                className="transparent-input"
                defaultValue={defaultOperatorData.condition}
                onChange={handleSetCondition}
                value={operatorState.condition}
              />
            ),
          }
        
        }
        />
      )}

{selectedNodeType === 'opInclusive' && (
        <StaticTable
          properties={{
            conditions: (
              <input
                type="text"
                className="transparent-input"
                defaultValue={defaultOperatorData.conditions}
                onChange={handleSetConditions}
                value={operatorState.conditions}
              />
            ),
          }
        
        }
        />
      )}
    </div>
  );
};

export default OperatorConfigPanel;

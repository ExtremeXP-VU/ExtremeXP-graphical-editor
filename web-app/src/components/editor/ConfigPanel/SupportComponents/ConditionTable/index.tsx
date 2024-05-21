import React, { useEffect } from 'react';
import './style.scss';
import { useConfigPanelStore } from '../../../../../stores/configPanelStore';
import { useReactFlowInstanceStore } from '../../../../../stores/reactFlowInstanceStore';
import DropDown from '../DropDown';
import { ConditionType } from '../../../../../types/operator';
import { useImmerReducer } from 'use-immer';
import {
  Action,
  conditionConfigReducer,
} from '../../OperatorConfigPanel/reducer';

type TableProps = {
  currentCondition: ConditionType;
  opType: string;
  onUpdateCondition: (condition: ConditionType, condition_id: string) => void;
  key: string;
  onDelete: (condition_id: string) => void;
};

const ConditionTable: React.FC<TableProps> = ({
  currentCondition,
  opType,
  onUpdateCondition,
  onDelete,
}) => {
  const edges = useReactFlowInstanceStore((state) => state.edges);
  const outgoingLinks = useConfigPanelStore((state) => state.outgoingLinks);
  const outgoingEdges = edges.filter((edge) =>
    outgoingLinks.some((link) => link.linkId === edge.id)
  );

  const [conditionState, conditionDispatch] = useImmerReducer(
    conditionConfigReducer,
    currentCondition
  );

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action: Action = {
      type: 'UPDATE_CONDITION_NAME',
      payload: event.target.value,
    };
    conditionDispatch(action);
  };

  const handleConditionContentChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const action: Action = {
      type: 'UPDATE_CONDITION_CONTENT',
      payload: { index, content: event.target.value },
    };
    conditionDispatch(action);
  };

  const handleCaseTargetLinkChange = (
    index: number,
    targetLinkName: string
  ) => {
    console.log(index);
    if (targetLinkName === 'select a link') {
      return;
    }
    const action: Action = {
      type: 'UPDATE_CASE_TARGET',
      payload: { index, targetLinkName, edges: outgoingEdges },
    };
    conditionDispatch(action);
  };

  const validConditionalOperator = outgoingEdges.length > 1;

  useEffect(() => {
    onUpdateCondition(conditionState, currentCondition.condition_id);
  }, [conditionState]);

  return (
    <div className="table-component">
      {validConditionalOperator && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            type="text"
            className="transparent-input header-text"
            value={conditionState.name || ''}
            onChange={handleNameChange}
          />
          {opType === 'opInclusive' && (
            <span
              className="iconfont delete-param"
              onClick={() => {
                onDelete(conditionState.condition_id);
              }}
            >
              &#xe600;
            </span>
          )}
        </div>
      )}

      {validConditionalOperator &&
        outgoingEdges.map((_, index) => {
          return (
            <table className={`row `} key={index}>
              <tbody className="cell">
                <tr>
                  <td className="property"> {`Case ${index + 1}`} </td>
                </tr>
              </tbody>
              <tbody className="cell">
                <tr>
                  <td className="value">
                    <input
                      type="text"
                      className="transparent-input italic-placeholder"
                      placeholder="e.g., x == y"
                      value={conditionState?.cases[index]?.condition || ''}
                      onChange={(event) =>
                        handleConditionContentChange(index, event)
                      }
                    />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <DropDown
                      key={index}
                      options={[
                        'select a link',
                        ...outgoingEdges.map((_, index) => `Link ${index + 1}`),
                      ]}
                      value={conditionState?.cases[index]?.targetLinkName}
                      className="normal__dropdown"
                      index={index}
                      onCaseTargetLinkChange={handleCaseTargetLinkChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
    </div>
  );
};

export default ConditionTable;

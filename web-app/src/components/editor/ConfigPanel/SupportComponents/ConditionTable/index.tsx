import React, { useEffect } from 'react';
import './style.scss';
import { useConfigPanelStore } from '../../../../../stores/configPanelStore';
import { useReactFlowInstanceStore } from '../../../../../stores/reactFlowInstanceStore';
import DropDown from '../DropDown';
import { ConditionType } from '../../../../../types/operator';
import { useImmerReducer } from 'use-immer';
import { Action, conditionConfigReducer } from '../../OperatorConfigPanel/reducer';

type TableProps = {
  currentCondition: ConditionType;
  opType: string;
  onUpdateCondition: (condition: ConditionType, condition_id: string) => void;
  key: string;
};

const ConditionTable: React.FC<TableProps> = ({ currentCondition,  onUpdateCondition }) => {
  
  const selectedNodeType = useConfigPanelStore(
    (state) => state.selectedNodeType
  );

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
  }

  const handleConditionContentChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const action: Action = {
      type: 'UPDATE_CONDITION_CONTENT',
      payload: {index, content: event.target.value},
    };
    conditionDispatch(action);
  }



  useEffect(() => {
    onUpdateCondition(conditionState, currentCondition.condition_id);
  }, [conditionState]);


  return (
    <div className="table-component">

<div className="header-text">Outgoing Links</div>
      {outgoingEdges.map((edge, index) => {
        return (
          <table className={`row `}>
            <tr className="cell">
              <td className="property"> {`Link ${index + 1}`} </td>
            </tr>
            <tr className="cell">
              <td className="value"> {edge.data.label}</td>
            </tr>
          </table>
        );
      })}


      {selectedNodeType === 'opExclusive' && (
        <div className="top-padding">
          <input
                type="text"
                className="transparent-input header-text"
                value={conditionState.name}
                onChange={handleNameChange}
              />
        </div>
      )}

      

{outgoingEdges.map((_, index) => {
        return (
          <table className={`row `}>
            <tr className="cell">
              <td className="property"> {`Case ${index + 1}`} </td>
            </tr>
            <tr className="cell">
              <td className="value"> 
              <input
                type="text"
                className="transparent-input italic-placeholder"
                placeholder="e.g., x == y"
                value={conditionState?.cases[index]?.condition}
                onChange={(event) => handleConditionContentChange(index, event)}
              />
              </td>
            </tr>
            <DropDown
              options= {
                outgoingEdges.map((_, index) => `Link ${index + 1}`)
              }
              defaultValue='please select a type'
              className="normal__dropdown"
            />
          </table>
          
          
        );
      })}


    </div>
  );
};

export default ConditionTable;

import { Edge } from 'reactflow';
import { ConditionType, OperatorDataType } from '../../../../types/operator';

export type Action =
  | { type: 'ADD_CONDITION'; payload: ConditionType }
  | {
      type: 'UPDATE_CONDITION';
      payload: { condition_id: string; updatedCondition: ConditionType };
    }
  | { type: 'DELETE_CONDITION'; payload: string }
  | { type: 'UPDATE_CONDITION_NAME'; payload: string }
  | {
      type: 'UPDATE_CONDITION_CONTENT';
      payload: { index: number; content: string };
    }
  | {
      type: 'UPDATE_CASE_TARGET';
      payload: { index: number; targetLinkName: string; edges: Edge[] };
    };

export function operatorConfigReducer(draft: OperatorDataType, action: Action) {
  switch (action.type) {
    case 'ADD_CONDITION':
      draft.conditions.push(action.payload);
      return draft;
    case 'UPDATE_CONDITION': {
      const index = draft.conditions.findIndex(
        (condition) => condition.condition_id === action.payload.condition_id
      );
      if (index !== -1) {
        draft.conditions[index] = action.payload.updatedCondition;
      }
      return draft;
    }
    case 'DELETE_CONDITION': {
      const index = draft.conditions.findIndex(
        (condition) => condition.condition_id === action.payload
      );
      if (index !== -1) {
        draft.conditions.splice(index, 1);
      }
      return draft;
    }
    default:
      return draft;
  }
}

export function conditionConfigReducer(draft: ConditionType, action: Action) {
  switch (action.type) {
    case 'UPDATE_CONDITION_NAME':
      draft.name = action.payload;
      return draft;
    case 'UPDATE_CONDITION_CONTENT': {
      // Ensure the cases array exists
      if (!draft.cases) {
        draft.cases = [];
      }
      // Ensure the specific case at index exists
      if (!draft.cases[action.payload.index]) {
        draft.cases[action.payload.index] = {
          condition: '',
          targetLinkId: '',
          targetNodeId: '',
          targetLinkName: 'Select Target Link',
        };
      }
      draft.cases[action.payload.index].condition = action.payload.content;
      return draft;
    }
    case 'UPDATE_CASE_TARGET': {
      const { index, edges } = action.payload;
      // Ensure the cases array exists
      if (!draft.cases) {
        draft.cases = [];
      }
      // Ensure the specific case at index exists
      if (!draft.cases[index]) {
        draft.cases[index] = {
          condition: '',
          targetLinkId: '',
          targetNodeId: '',
          targetLinkName: 'Select Target Link',
        };
      }
      draft.cases[index].targetLinkName = action.payload.targetLinkName;
      const targetLinkName = action.payload.targetLinkName;
      const Link_index: string = targetLinkName.split(' ')[1];
      const id = Number(Link_index);
      draft.cases[index].targetLinkId = edges[id - 1].id;
      draft.cases[index].targetNodeId = edges[id - 1].target;
      return draft;
    }

    default:
      return draft;
  }
}

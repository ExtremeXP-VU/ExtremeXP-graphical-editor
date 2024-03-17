import { OperatorDataType } from '../../../../types/operator';

export type Action =
  | { type: 'UPDATE_CONDITION'; payload: string }
  | { type: 'UPDATE_CONDITIONS'; payload: string[]};

function operatorConfigReducer(draft: OperatorDataType, action: Action) {
  switch (action.type) {
    case 'UPDATE_CONDITION':
      draft.condition = action.payload;
      return draft;
    case 'UPDATE_CONDITIONS':
      draft.conditions = action.payload;
      return draft;
    default:
      return draft;
  }
}

export default operatorConfigReducer;

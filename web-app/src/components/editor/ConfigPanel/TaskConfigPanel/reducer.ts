import { TaskDataType } from '../../../../types/task';

export type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_DESCRIPTION'; payload: string };

function taskConfigReducer(draft: TaskDataType, action: Action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      draft.name = action.payload;
      return draft;
    case 'UPDATE_DESCRIPTION':
      draft.description = action.payload;
      return draft;
    default:
      return draft;
  }
}

export default taskConfigReducer;

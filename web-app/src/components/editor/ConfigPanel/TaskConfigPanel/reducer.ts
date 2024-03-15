import { ParameterType, TaskDataType } from '../../../../types/task';



export type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_DESCRIPTION'; payload: string }
  | { type: 'UPDATE_PARAM_NAME'; payload: string }
  | { type: 'UPDATE_PARAM_TYPE'; payload: string }
  | { type: 'UPDATE_PARAM_ABSTRACT'; payload: boolean }

export function taskConfigReducer(draft: TaskDataType, action: Action) {
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

export function paramConfigReducer(
  draft: ParameterType,
  action: Action
) {
  switch (action.type) {
    case 'UPDATE_PARAM_NAME':
      draft.name = action.payload;
      return draft;
    case 'UPDATE_PARAM_TYPE':
      draft.type = action.payload;
      return draft;
    case 'UPDATE_PARAM_ABSTRACT':
      draft.abstract = action.payload;
      return draft;
    default:
      return draft;
  }
}

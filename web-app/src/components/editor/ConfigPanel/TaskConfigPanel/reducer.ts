import { TaskParameterType, TaskVariantType } from '../../../../types/task';

export type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_DESCRIPTION'; payload: string }
  | { type: 'UPDATE_ABSTRACT'; payload: boolean}
  | { type: 'CREATE_PARAM'; payload: TaskParameterType }
  | { type: 'UPDATE_PARAM'; payload: { id: string; updatedParam: TaskParameterType } }
  | { type: 'DELETE_PARAM'; payload: string }
  | { type: 'UPDATE_PARAM_NAME'; payload: string }
  | { type: 'UPDATE_PARAM_TYPE'; payload: string }
  | { type: 'UPDATE_PARAM_ABSTRACT'; payload: boolean };

export function taskConfigReducer(draft: TaskVariantType, action: Action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      draft.name = action.payload;
      return draft;
    case 'UPDATE_DESCRIPTION':
      draft.description = action.payload;
      return draft;
    case 'UPDATE_ABSTRACT':
      draft.isAbstract = action.payload;
      return draft;
    case 'UPDATE_PARAM':{
      const { id, updatedParam } = action.payload;
      const index = draft.parameters.findIndex((param) => param.id === id);
      if (index !== -1) {
        draft.parameters[index] = updatedParam;
      }
      return draft;}
    case 'CREATE_PARAM':{
      if (!draft.parameters) {
        draft.parameters = [];
      }
      draft.parameters.push(action.payload);
      return draft;
    }
    case 'DELETE_PARAM':{
      const index = draft.parameters.findIndex((param) => param.id === action.payload);
      if (index !== -1) {
        draft.parameters.splice(index, 1);
      }
      return draft;}
    default:
      return draft;
  }
}

export function paramConfigReducer(draft: TaskParameterType, action: Action) {
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

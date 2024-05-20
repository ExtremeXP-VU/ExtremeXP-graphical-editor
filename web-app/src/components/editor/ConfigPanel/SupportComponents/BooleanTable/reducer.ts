export type Action =
  | { type: 'ADD_BOOLEAN'; payload: boolean }
  | { type: 'UPDATE_BOOLEAN'; payload: { index: number; value: boolean } };

export function BooleanReducer(draft: boolean[], action: Action) {
  switch (action.type) {
    case 'ADD_BOOLEAN': {
      draft.push(action.payload);
      return draft;
    }
    case 'UPDATE_BOOLEAN': {
      draft[action.payload.index] = action.payload.value;
      return draft;
    }
    default:
      return draft;
  }
}

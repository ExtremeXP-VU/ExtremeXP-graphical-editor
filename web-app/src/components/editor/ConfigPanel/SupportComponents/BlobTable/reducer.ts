export type Action =
  | { type: 'ADD_BLOB'; payload: string }
  | { type: 'UPDATE_BLOB'; payload: {index: number; value: string}; };

export function BlobReducer(draft: string[], action: Action) {
  switch (action.type) {
    case 'ADD_BLOB': {
      draft.push(action.payload);
      return draft;
    }
    case 'UPDATE_BLOB':
      draft[action.payload.index] = action.payload.value;
      return draft;
    default:
      return draft;
  }
}

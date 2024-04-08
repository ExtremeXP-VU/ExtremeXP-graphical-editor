type NumberAction = |{
  type: 'ADD_NUMBER';
  payload: number;
}
  |{type: 'UPDATE_NUMBER'; payload: {index: number; value: number};}

type RangeAction = {
  type: 'ADD_RANGE';
  payload: {
    min: number;
    max: number;
    step: number;
    minInclusive: boolean;
    maxInclusive: boolean;
  };
};

export interface Range {
  min: number;
  max: number;
  step: number;
  minInclusive: boolean;
  maxInclusive: boolean;
}

export type Action = NumberAction | RangeAction;

export function IntegerReducer(draft: number[], action: Action) {
  switch (action.type) {
    case 'ADD_NUMBER': 
      draft.push(action.payload);
      return draft;
    case 'UPDATE_NUMBER':
      draft[action.payload.index] = action.payload.value;
      return draft;
    default:
      return draft;
  }
}

export function RangeReducer(draft: Range[], action: Action) {
  switch (action.type) {
    case 'ADD_RANGE':
      draft.push(action.payload);
      return draft;
    default:
      return draft;
  }
}
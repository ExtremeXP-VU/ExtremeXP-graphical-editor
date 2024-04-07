export interface OperatorDataType {
  conditions: ConditionType[];
}
  export interface ConditionType {
    condition_id: string;
    name: string;
    cases: CaseType[];
  }

  export interface CaseType {
    condition: string;
    targetLinkId: string; // outgoinglink ID
    targetNodeId: string; // target node ID
  }

  export const defaultCondition: ConditionType = {
    condition_id: '',
    name: 'default',
    cases: [],
  };

  export const defaultOperatorData: OperatorDataType = {
    conditions: [defaultCondition],
    };

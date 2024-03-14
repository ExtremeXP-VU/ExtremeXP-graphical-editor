import { Node, Edge } from 'reactflow';

export interface GraphicalModelType {
    nodes: Array<Node>;
    edges: Array<Edge>;
  }


export interface OperatorDataType {
  condition: string;
  conditions: string[];
  graphical_model: GraphicalModelType | null;
}

export const defaultOperatorData: OperatorDataType = {
    condition: 'the condition of the operator',
    conditions: ['condition 1', 'condition 2', 'condition 3'],
    graphical_model: {
        nodes: [],
        edges: [],
      },
  };
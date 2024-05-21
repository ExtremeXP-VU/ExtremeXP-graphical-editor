import { GraphicalModelType } from './experiment';
import { MarkerType } from 'reactflow';

export interface CategoryType {
  id_category: string;
  name: string;
  is_official: boolean;
  owner: string;
}

export const defaultCategory: CategoryType = {
  id_category: 'default',
  name: '',
  is_official: false,
  owner: '',
};

export interface TaskType {
  id_task: string;
  name: string;
  category_id: string;
  is_user_defined: boolean;
  owner: string;
  provider: string;
  description: string;
  create_at: number;
  update_at: number;
  graphical_model: GraphicalModelType;
}

export const defaultTask: TaskType = {
  id_task: 'default',
  name: '',
  category_id: '',
  is_user_defined: false,
  owner: '',
  provider: '',
  description: '',
  create_at: 0,
  update_at: 0,
  graphical_model: {
    nodes: [],
    edges: [],
  },
};

export interface TaskNodeType {
  id: string;
  type: 'task';
  data: {
    currentVariant: string; // <id_task>
    variants: TaskVariantType[];
  };
}

export interface TaskVariantType {
  id_task: string;
  name: string;
  variant: number;
  is_composite: boolean;
  description: string;
  isAbstract: boolean;
  implementationRef: string;
  graphical_model: GraphicalModelType | null;
  parameters: TaskParameterType[];
}

export interface TaskParameterType {
  name: string;
  type: string;
  abstract: boolean;
  values: (
    | number
    | string
    | boolean
    | {
        min: number;
        max: number;
        step: number;
        minInclusive: boolean;
        maxInclusive: boolean;
      }
  )[];
  id: string;
}

export const defaultParameter: TaskParameterType = {
  name: 'Parameter Name',
  type: 'integer',
  abstract: false,
  values: [],
  id: '',
};

export const defaultTaskVariant: TaskVariantType = {
  id_task: 'default',
  name: 'task',
  description: 'no description',
  implementationRef: '',
  variant: 1,
  isAbstract: true,
  is_composite: false,
  graphical_model: {
    nodes: [],
    edges: [],
  },
  parameters: [],
};

export const genericTask: TaskType = {
  id_task: 'task-generic',
  name: 'generic task',
  category_id: '',
  is_user_defined: false,
  owner: 'ExtremeXP',
  provider: 'ExtremeXP',
  description: 'a generic task',
  create_at: 0,
  update_at: 0,
  graphical_model: {
    edges: [
      {
        data: {},
        id: 'n9rgUYrI3v4MIdxqlmL5X',
        markerEnd: {
          color: '#000',
          height: 20,
          type: 'arrow' as MarkerType,
          width: 20,
        },
        source: 'start-ByGL5VPXc-nt1FCFvfR9p',
        sourceHandle: null,
        style: {
          stroke: '#000',
          strokeWidth: 1.5,
        },
        target: 'task-mDtzBp0thidem7mN7l1Tn',
        targetHandle: 't-top',
        type: 'regular',
      },
      {
        data: {},
        id: 'BtI37llMQ9KCeqNC0Tsks',
        markerEnd: {
          color: '#000',
          height: 20,
          type: 'arrow' as MarkerType,
          width: 20,
        },
        source: 'task-mDtzBp0thidem7mN7l1Tn',
        sourceHandle: 's-bottom',
        style: {
          stroke: '#000',
          strokeWidth: 1.5,
        },
        target: 'end-O5OF6FMQ6k5IPrxJVb6zl',
        targetHandle: null,
        type: 'regular',
      },
    ],
    nodes: [
      {
        data: {},
        height: 36,
        id: 'start-ByGL5VPXc-nt1FCFvfR9p',
        position: {
          x: 358,
          y: 134,
        },
        type: 'start',
        width: 31,
      },
      {
        data: {
          currentVariant: 'variant-1-5p7Af-UByzwnGdS7CSDsW',
          variants: [
            {
              description: 'no description',
              graphical_model: {
                edges: [],
                nodes: [],
              },
              id_task: 'variant-1-5p7Af-UByzwnGdS7CSDsW',
              implementationRef: '',
              isAbstract: true,
              is_composite: false,
              name: 'task',
              parameters: [],
              variant: 1,
            },
          ],
        },
        dragging: false,
        height: 44,
        id: 'task-mDtzBp0thidem7mN7l1Tn',
        position: {
          x: 322.2776598454062,
          y: 249.78988658918223,
        },
        positionAbsolute: {
          x: 322.2776598454062,
          y: 249.78988658918223,
        },
        selected: true,
        type: 'task',
        width: 102,
      },
      {
        data: {},
        dragging: false,
        height: 37,
        id: 'end-O5OF6FMQ6k5IPrxJVb6zl',
        position: {
          x: 357.1145489851613,
          y: 397.100160665861,
        },
        positionAbsolute: {
          x: 357.1145489851613,
          y: 397.100160665861,
        },
        selected: false,
        type: 'end',
        width: 32,
      },
    ],
  },
};

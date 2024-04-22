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
        id: 'jGYvi31VLvoVRdf764pX7',
        markerEnd: {
          color: '#000',
          height: 20,
          type: 'arrow' as MarkerType,
          width: 20,
        },
        source: 'WpCKsm_EhMhVbm94rATGi',
        sourceHandle: null,
        style: {
          stroke: '#000',
          strokeWidth: 1.5,
        },
        target: '2n1-buIzyFCEuZTnwMoWs',
        targetHandle: 't-top',
        type: 'regular',
      },
      {
        data: {},
        id: 'Rg1fs_qmOghUj4N7NSs3g',
        markerEnd: {
          color: '#000',
          height: 20,
          type: 'arrow' as MarkerType,
          width: 20,
        },
        source: '2n1-buIzyFCEuZTnwMoWs',
        sourceHandle: 's-bottom',
        style: {
          stroke: '#000',
          strokeWidth: 1.5,
        },
        target: '5JwJLdaPiJWoKmhyzZSYB',
        targetHandle: null,
        type: 'regular',
      },
    ],
    nodes: [
      {
        data: {},
        height: 36,
        id: 'WpCKsm_EhMhVbm94rATGi',
        position: {
          x: 431,
          y: 147,
        },
        type: 'start',
        width: 31,
      },
      {
        data: {
          currentVariant: 'variant-1-6R6_4JYfOUMXX1GEhgWep',
          variants: [
            {
              description: 'no description',
              graphical_model: {
                edges: [],
                nodes: [],
              },
              id_task: 'variant-1-6R6_4JYfOUMXX1GEhgWep',
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
        id: '2n1-buIzyFCEuZTnwMoWs',
        position: {
          x: 396.0727852759328,
          y: 264.0498671393759,
        },
        positionAbsolute: {
          x: 396.0727852759328,
          y: 264.0498671393759,
        },
        selected: false,
        type: 'task',
        width: 102,
      },
      {
        data: {},
        dragging: false,
        height: 37,
        id: '5JwJLdaPiJWoKmhyzZSYB',
        position: {
          x: 431.3286942099479,
          y: 386.8769047159443,
        },
        positionAbsolute: {
          x: 431.3286942099479,
          y: 386.8769047159443,
        },
        selected: true,
        type: 'end',
        width: 32,
      },
    ],
  },
};

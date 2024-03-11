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
        id: 'bNIQpYBO_LOCDorWBo04Y',
        markerEnd: {
          color: '#000',
          height: 20,
          type: 'arrow' as MarkerType,
          width: 20,
        },
        source: 'LaFsZGftwmpE8ig1SOANO',
        sourceHandle: null,
        style: {
          stroke: '#000',
          strokeWidth: 1.5,
        },
        target: '2Eye5v8E6fwzbGgZEiX0C',
        targetHandle: 't-top',
        type: 'regular',
      },
      {
        data: {},
        id: 'hlG8PFr5T_PN4WNVh7E10',
        markerEnd: {
          color: '#000',
          height: 20,
          type: 'arrow' as MarkerType,
          width: 20,
        },
        source: '2Eye5v8E6fwzbGgZEiX0C',
        sourceHandle: 's-bottom',
        style: {
          stroke: '#000',
          strokeWidth: 1.5,
        },
        target: 'rZPqStJlSCD13cG_E6nfM',
        targetHandle: null,
        type: 'regular',
      },
    ],
    nodes: [
      {
        data: {},
        dragging: false,
        height: 36,
        id: 'LaFsZGftwmpE8ig1SOANO',
        position: {
          x: 383.5841294843202,
          y: 171.7079352578399,
        },
        positionAbsolute: {
          x: 383.5841294843202,
          y: 171.7079352578399,
        },
        selected: true,
        type: 'start',
        width: 31,
      },
      {
        data: {
          currentVariant: 'JNxVx_pK_BFW_30VshVeG-variant-1',
          variants: [
            {
              id_task: 'JNxVx_pK_BFW_30VshVeG-variant-1',
              is_composite: false,
              name: 'task',
              description: 'generic task',
            },
          ],
        },
        dragging: false,
        height: 67,
        id: '2Eye5v8E6fwzbGgZEiX0C',
        position: {
          x: 348.95408576305164,
          y: 289.589833801375,
        },
        positionAbsolute: {
          x: 348.95408576305164,
          y: 289.589833801375,
        },
        selected: false,
        type: 'task',
        width: 102,
      },
      {
        data: {},
        dragging: false,
        height: 37,
        id: 'rZPqStJlSCD13cG_E6nfM',
        position: {
          x: 383.83983380137494,
          y: 439.46934389194934,
        },
        positionAbsolute: {
          x: 383.83983380137494,
          y: 439.46934389194934,
        },
        selected: false,
        type: 'end',
        width: 32,
      },
    ],
  },
};

export interface TaskDataType {
  id_task: string;
  name: string;
  description: string;
  variant: number;
  is_composite: boolean;
  graphical_model: GraphicalModelType | null;
}

export const defaultTaskData: TaskDataType = {
  id_task: 'default',
  name: 'task',
  description: 'no description',
  variant: 1,
  is_composite: false,
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
    variants: TaskDataType[];
  };
}

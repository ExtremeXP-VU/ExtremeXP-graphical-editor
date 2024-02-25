import { GraphicalModelType } from "./experiment";
import { MarkerType } from "reactflow";

export interface CategoryType {
  id_category: string;
  name: string;
  is_official: boolean;
  owner: string;
}

export const defaultCategory: CategoryType = {
  id_category: "default",
  name: "",
  is_official: false,
  owner: "",
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
  id_task: "default",
  name: "",
  category_id: "",
  is_user_defined: false,
  owner: "",
  provider: "",
  description: "",
  create_at: 0,
  update_at: 0,
  graphical_model: {
    nodes: [],
    edges: [],
  },
};

export const genericTask: TaskType = {
  id_task: "task-generic",
  name: "generic task",
  category_id: "",
  is_user_defined: false,
  owner: "ExtremeXP",
  provider: "ExtremeXP",
  description: "a generic task",
  create_at: 0,
  update_at: 0,
  graphical_model: {
    nodes: [
      {
        data: {},
        dragging: false,
        height: 36,
        id: "lpwvojP4061Ui5QQWeLma",
        position: {
          x: 503,
          y: 129.25132188380704,
        },
        positionAbsolute: {
          x: 503,
          y: 129.25132188380704,
        },
        selected: true,
        type: "start",
        width: 31,
      },
      {
        data: {},
        dragging: false,
        height: 52,
        id: "D6VSy5It5_bdeeZ2ngZcN",
        position: {
          x: 467.2645407218773,
          y: 228.29890970086024,
        },
        positionAbsolute: {
          x: 467.2645407218773,
          y: 228.29890970086024,
        },
        selected: false,
        type: "task",
        width: 102,
      },
      {
        data: {},
        dragging: false,
        height: 37,
        id: "wb7K30XMOmUjCRGiD__w-",
        position: {
          x: 502.30155346847437,
          y: 343.4205230111074,
        },
        positionAbsolute: {
          x: 502.30155346847437,
          y: 343.4205230111074,
        },
        selected: false,
        type: "end",
        width: 32,
      },
    ],
    edges: [
      {
        id: "aD5v7SSlzu9mkEW_Y_z3c",
        markerEnd: {
          color: "#000",
          height: 20,
          type: "arrow" as MarkerType,
          width: 20,
        },
        source: "lpwvojP4061Ui5QQWeLma",
        sourceHandle: null,
        style: {
          stroke: "#000",
          strokeWidth: 1.5,
        },
        target: "D6VSy5It5_bdeeZ2ngZcN",
        targetHandle: null,
        type: "regular",
      },
      {
        id: "gtW4MNMNHc8P5LW50uNa_",
        markerEnd: {
          color: "#000",
          height: 20,
          type: "arrow" as MarkerType,
          width: 20,
        },
        source: "D6VSy5It5_bdeeZ2ngZcN",
        sourceHandle: null,
        style: {
          stroke: "#000",
          strokeWidth: 1.5,
        },
        target: "wb7K30XMOmUjCRGiD__w-",
        targetHandle: null,
        type: "regular",
      },
    ],
  },
};

export interface TaskDataType {
  id_task: string;
  name: string;
  variant: number;
  is_composite: boolean;
  graphical_model: GraphicalModelType;
}

export const defaultTaskData: TaskDataType = {
  id_task: "default",
  name: "task",
  variant: 0,
  is_composite: false,
  graphical_model: {
    nodes: [],
    edges: [],
  },
};

export interface TaskNodeType {
  id: string;
  type: "task";
  data: {
    currentVariant: string; // <id_task>
    variants: TaskType[];
  };
}

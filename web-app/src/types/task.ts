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
    edges: [
      {
        id: "-iKLeRt6FfCcVRZDrzNQT",
        markerEnd: {
          color: "#000",
          height: 20,
          type: "arrow" as MarkerType,
          width: 20,
        },
        source: "dfSFjRdU979Z8rEd6Gx7D",
        sourceHandle: null,
        style: {
          stroke: "#000",
          strokeWidth: 1.5,
        },
        target: "7ttyZQxAiHqMn0zSsT8ZT",
        targetHandle: null,
        type: "regular",
      },
      {
        id: "D0kii1B45s_crLGYQchiQ",
        markerEnd: {
          color: "#000",
          height: 20,
          type: "arrow" as MarkerType,
          width: 20,
        },
        source: "7ttyZQxAiHqMn0zSsT8ZT",
        sourceHandle: null,
        style: {
          stroke: "#000",
          strokeWidth: 1.5,
        },
        target: "nsCOmOK6ur8zxTaUZh-Vk",
        targetHandle: null,
        type: "regular",
      },
    ],
    nodes: [
      {
        data: {},
        dragging: false,
        height: 36,
        id: "dfSFjRdU979Z8rEd6Gx7D",
        position: {
          x: 293,
          y: 191.5158727519472,
        },
        positionAbsolute: {
          x: 293,
          y: 191.5158727519472,
        },
        selected: false,
        type: "start",
        width: 31,
      },
      {
        data: {
          currentVariant: "9N4sTYwV3wtKwXX5Nd-fI-variant-1",
          variants: [
            {
              id_task: "9N4sTYwV3wtKwXX5Nd-fI-variant-1",
              is_composite: false,
              name: "task",
            },
          ],
        },
        dragging: false,
        height: 67,
        id: "7ttyZQxAiHqMn0zSsT8ZT",
        position: {
          x: 257.2142738376227,
          y: 279.00924940602766,
        },
        positionAbsolute: {
          x: 257.2142738376227,
          y: 279.00924940602766,
        },
        selected: false,
        type: "task",
        width: 102,
      },
      {
        data: {},
        dragging: false,
        height: 37,
        id: "nsCOmOK6ur8zxTaUZh-Vk",
        position: {
          x: 292.3730013570943,
          y: 393.86109263630186,
        },
        positionAbsolute: {
          x: 292.3730013570943,
          y: 393.86109263630186,
        },
        selected: false,
        type: "end",
        width: 32,
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

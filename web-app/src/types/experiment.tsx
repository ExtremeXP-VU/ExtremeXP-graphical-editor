import { timeNow } from "../utils/timeToDate";
import { Node, Edge } from "reactflow";

export interface Experiment {
  id_experiment: string;
  name: string;
  description: string;
  create_at: number;
  update_at: number;
}

export interface GraphicalModelType {
  nodes: Array<Node>;
  edges: Array<Edge>;
}

export interface SpecificationType {
  id_specification: string;
  experiment_id: string;
  name: string;
  create_at: number;
  update_at: number;
  graphical_model: GraphicalModelType;
}

export const defaultExperiment = {
  id_experiment: "default",
  name: "",
  description: "",
  create_at: timeNow(),
  update_at: timeNow(),
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export const defaultGraphicalModel = {
  nodes: initialNodes,
  edges: initialEdges,
};

export const defaultSpecification = {
  id_specification: "",
  experiment_id: "",
  name: "",
  create_at: NaN,
  update_at: NaN,
  graphical_model: defaultGraphicalModel,
};

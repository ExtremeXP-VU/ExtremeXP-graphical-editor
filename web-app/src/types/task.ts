import { GraphicalModelType } from "./experiment";

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

import { ExperimentType } from "./experiment";

export type LoginResponseType = {
  message: string;
  data: {
    jwt: string;
  };
};

export type RegisterResponseType = {
  message: string;
};

export type ProjectsResponseType = {
  message: string;
  data: {
    projects: [];
  };
};

export type CreateProjectResponseType = {
  message: string;
  data: {
    id_project: string;
  };
};

export type UpdateProjectResponseType = {
  message: string;
};

export type DeleteProjectResponseType = {
  message: string;
};

export type ExperimentResponseType = {
  message: string;
  data: {
    experiment: ExperimentType;
  };
};

export type ExperimentsResponseType = {
  message: string;
  data: {
    experiments: Array<ExperimentType>;
  };
};

export type CreateExperimentResponseType = {
  message: string;
  data: {
    id_experiment: string;
  };
};

export type UpdateExperimentNameResponseType = {
  message: string;
};

export type UpdateGraphicalModelResponseType = {
  message: string;
};

export type DeleteExperimentResponseType = {
  message: string;
};

// FIXME: Temporary Execution Demo
export type ExecutionResponseType = {
  message: string;
  data: {
    file: string;
    result: string;
  };
};

export type CategoriesResponseType = {
  message: string;
  data: {
    categories: [];
  };
};

export type CreateCategoryResponseType = {
  message: string;
  data: {
    id_category: string;
  };
};

export type UpdateCategoryResponseType = {
  message: string;
};

export type DeleteCategoryResponseType = {
  message: string;
};

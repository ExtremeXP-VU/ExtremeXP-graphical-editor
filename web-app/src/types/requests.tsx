import { SpecificationType } from "./experiment";

export type LoginResponseType = {
  message: string;
  data: {
    jwt: string;
  };
};

export type RegisterResponseType = {
  message: string;
};

export type ExperimentsResponseType = {
  message: string;
  data: {
    experiments: [];
  };
};

export type CreateExperimentResponseType = {
  message: string;
  data: {
    id_experiment: string;
  };
};

export type UpdateExperimentResponseType = {
  message: string;
};

export type DeleteExperimentResponseType = {
  message: string;
};

export type SpecificationResponseType = {
  message: string;
  data: {
    specification: SpecificationType;
  };
};

export type SpecificationsResponseType = {
  message: string;
  data: {
    specifications: Array<SpecificationType>;
  };
};

export type CreateSpecificationResponseType = {
  message: string;
  data: {
    id_specification: string;
  };
};

export type UpdateSpecificationNameResponseType = {
  message: string;
};

export type UpdateGraphicalModelResponseType = {
  message: string;
};

export type DeleteSpecificationResponseType = {
  message: string;
};

import { create } from 'zustand';
import ValidationText from '../assets/texts/validation.json';
import { GraphicalModelType } from '../types/experiment';

export type ValidationCodeType =
  | 'START_EVENT_MISSING'
  | 'END_EVENT_MISSING'
  | 'MULTIPLE_START_EVENTS'
  | 'MULTIPLE_END_EVENTS'
  | 'EXCLUSIVE_OP_MULTIPLE_INPUTS';

export type ValidationMessageType = {
  code: ValidationCodeType;
  type: string;
  message: string;
};

export type ValidationType = {
  valid: boolean;
  messages: ValidationMessageType[];
};

const initialValidationState: ValidationType = {
  valid: true,
  messages: [],
};

const getValidationMessage = (
  code: ValidationCodeType
): ValidationMessageType => {
  return {
    code: code,
    type: ValidationText[code].type,
    message: ValidationText[code].message,
  };
};

const setValidationStatus = (valid: boolean) => {
  useValidationStore.setState({ valid: valid });
};

export const useValidationStore = create<typeof initialValidationState>()(
  () => initialValidationState
);

export const clearValidation = () => {
  useValidationStore.setState(initialValidationState);
};

export const validateGraphicalModel = (model: GraphicalModelType): void => {
  const validationMessages: ValidationMessageType[] = [];
  const startEvents = model.nodes.filter((node) => node.type === 'start');
  const endEvents = model.nodes.filter((node) => node.type === 'end');
  const exclusiveOps = model.nodes.filter(
    (node) => node.type === 'opExclusive'
  );

  if (startEvents.length === 0) {
    validationMessages.push(getValidationMessage('START_EVENT_MISSING'));
  }

  if (endEvents.length === 0) {
    validationMessages.push(getValidationMessage('END_EVENT_MISSING'));
  }

  if (startEvents.length > 1) {
    validationMessages.push(getValidationMessage('MULTIPLE_START_EVENTS'));
  }

  if (endEvents.length > 1) {
    validationMessages.push(getValidationMessage('MULTIPLE_END_EVENTS'));
  }

  exclusiveOps.forEach((op) => {
    const edges = model.edges.filter((edge) => edge.target === op.id);
    if (edges.length > 1) {
      validationMessages.push(
        getValidationMessage('EXCLUSIVE_OP_MULTIPLE_INPUTS')
      );
    }
  });

  if (validationMessages.length > 0) {
    setValidationStatus(false);
  } else {
    setValidationStatus(true);
  }

  useValidationStore.setState({ messages: validationMessages });
};

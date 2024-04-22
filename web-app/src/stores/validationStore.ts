import { create } from 'zustand';
import ValidationText from '../assets/texts/validation.json';
import { GraphicalModelType } from '../types/experiment';
import { Node } from 'reactflow';

export type ValidationCodeType =
  | 'START_EVENT_MISSING'
  | 'END_EVENT_MISSING'
  | 'MULTIPLE_START_EVENTS'
  | 'MULTIPLE_END_EVENTS'
  | 'START_EVENT_OUTPUT_MISSING'
  | 'END_EVENT_INPUT_MISSING'
  | 'JOINT_OP_MULTIPLE_OUTPUTS';

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
  const parallelOps = model.nodes.filter((node) => node.type === 'opParallel');
  const exclusiveOps = model.nodes.filter(
    (node) => node.type === 'opExclusive'
  );
  const inclusiveOps = model.nodes.filter(
    (node) => node.type === 'opInclusive'
  );
  const complexOps = model.nodes.filter((node) => node.type === 'opComplex');

  function nrOfincomingLinks(nodeID: string) {
    const edges = model.edges.filter((edge) => edge.target === nodeID);
    return edges.length;
  }

  function nrOfoutgoingLinks(nodeID: string) {
    const edges = model.edges.filter((edge) => edge.source === nodeID);
    return edges.length;
  }

  function isJointOperator(opID: string) {
    return nrOfincomingLinks(opID) > 1;
  }

  function checkJointOperatorsOutgoingLinks(operators: Node[]) {
    operators.forEach((op) => {
      if (isJointOperator(op.id) && nrOfoutgoingLinks(op.id) > 1) {
        validationMessages.push(
          getValidationMessage('JOINT_OP_MULTIPLE_OUTPUTS')
        );
      }
    });
  }

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

  startEvents.forEach((event) => {
    if (nrOfoutgoingLinks(event.id) < 1) {
      validationMessages.push(
        getValidationMessage('START_EVENT_OUTPUT_MISSING')
      );
    }
  });

  endEvents.forEach((event) => {
    if (nrOfincomingLinks(event.id) < 1) {
      validationMessages.push(getValidationMessage('END_EVENT_INPUT_MISSING'));
    }
  });

  checkJointOperatorsOutgoingLinks(exclusiveOps);
  checkJointOperatorsOutgoingLinks(parallelOps);
  checkJointOperatorsOutgoingLinks(inclusiveOps);
  checkJointOperatorsOutgoingLinks(complexOps);

  if (validationMessages.length > 0) {
    setValidationStatus(false);
  } else {
    setValidationStatus(true);
  }

  useValidationStore.setState({ messages: validationMessages });
};

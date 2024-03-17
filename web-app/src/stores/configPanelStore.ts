import { create } from 'zustand';
import {
  TaskVariantType,
  defaultTaskVariant,
  TaskParameterType,
  defaultParameter,
} from '../types/task';
import { OperatorDataType, defaultOperatorData } from '../types/operator';

export type OutgoingLinkType = {
  index: number;
  linkId: string;
  target: string;
};

type ConfigPanelState = {
  // This is originally for the TaskConfigPanel, but it is also used for the overall control
  // of the ConfigPanel
  isOpenConfig: boolean;

  // For Node in general
  selectedNodeType: string;
  selectedNodeId: string;
  outgoingLinks: OutgoingLinkType[];
  clearConfigStore: () => void;

  // For Task Node
  selectedTaskVariant: TaskVariantType;
  selectedTaskVariantID: string;
  setSelectedTaskData: (newData: TaskVariantType) => void;
};

type ConfigOperatorPanelState = {
  selectedOperatorData: OperatorDataType;
  opExclusiveCondition: string;
  onInclusiveConditions: string[];
  setSelectedOperatorData: (newData: OperatorDataType) => void;
  setOpExclusiveCondition: (newCondition: string) => void;
  setOpInclusiveConditions: (newConditions: string[]) => void;
};

export const useConfigOperatorPanelStore = create<ConfigOperatorPanelState>(
  (set) => ({
    opExclusiveCondition: '',
    onInclusiveConditions: [],
    selectedOperatorData: defaultOperatorData,
    setSelectedOperatorData: (newData: OperatorDataType) =>
      set({ selectedOperatorData: newData }),
    setOpExclusiveCondition: (newCondition: string) =>
      set({ opExclusiveCondition: newCondition }),
    setOpInclusiveConditions: (newConditions: string[]) =>
      set({ onInclusiveConditions: newConditions }),
  })
);

export const useConfigPanelStore = create<ConfigPanelState>((set) => ({
  isOpenConfig: false,
  setIsOpenConfig: (newState: boolean) => set({ isOpenConfig: newState }),
  selectedTaskVariant: defaultTaskVariant,
  setSelectedTaskData: (newData: TaskVariantType) =>
    set({ selectedTaskVariant: newData }),
  selectedNodeId: '',
  setSelectedNodeId: (newId: string) => set({ selectedNodeId: newId }),
  selectedNodeType: '',
  setSelectedNodeType: (newType: string) => set({ selectedNodeType: newType }),
  selectedTaskVariantID: '',
  setSelectedTaskVariant: (newVariant: string) =>
    set({ selectedTaskVariantID: newVariant }),
  outgoingLinks: [],
  setOutgoingLinks: (newLinks: OutgoingLinkType[]) =>
    set({ outgoingLinks: newLinks }),
  clearConfigStore: () => {
    set({
      isOpenConfig: false,
      selectedTaskVariant: defaultTaskVariant,
      selectedNodeId: '',
      selectedTaskVariantID: '',
    });
  },
}));

type ParamState = {
  numParams: number;
  selectedParamId: string;
  selectedParamData: TaskParameterType;
};

export const useParamStore = create<ParamState>((set) => ({
  numParams: 0,
  selectedParamId: '',
  setNumParams: (newNum: number) => set({ numParams: newNum }),
  setSelectedParamId: (newId: string) => set({ selectedParamId: newId }),

  selectedParamData: defaultParameter,
  setSelectedParamData: (newData: TaskParameterType) =>
    set({ selectedParamData: newData }),
}));

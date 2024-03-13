import { create } from 'zustand';
import { TaskDataType, defaultTaskData } from '../types/task';

export type OutgoingLinkType = {
  index: number;
  linkId: string;
  target: string;
};

type ConfigPanelState = {
  // This is originally for the TaskConfigPanel, but it is also used for the overall control 
  // of the ConfigPanel
  isOpenConfig: boolean;
  selectedNodeType: string;
  selectedNodeId: string;
  selectedTaskData: TaskDataType;
  selectedTaskVariant: string;
  outgoingLinks: OutgoingLinkType[];
  setSelectedTaskData: (newData: TaskDataType) => void;
  clearConfigStore: () => void;
};

type ConfigOperatorPanelState = {
  selectedOperatorType: string;
  opExclusiveCondition: string;
  onInclusiveConditions: string[];
  setOpExclusiveCondition: (newCondition: string) => void;
  setOpInclusiveConditions: (newConditions: string[]) => void;
}

export const useConfigOperatorPanelStore = create<ConfigOperatorPanelState>((set) => ({
  selectedOperatorType: '',
  opExclusiveCondition: '',
  onInclusiveConditions: [],
  setOpExclusiveCondition: (newCondition: string) => set({ opExclusiveCondition: newCondition }),
  setOpInclusiveConditions: (newConditions: string[]) => set({ onInclusiveConditions: newConditions }),
}));

export const useConfigPanelStore = create<ConfigPanelState>((set) => ({
  isOpenConfig: false,
  setIsOpenConfig: (newState: boolean) => set({ isOpenConfig: newState }),
  selectedTaskData: defaultTaskData,
  setSelectedTaskData: (newData: TaskDataType) =>
    set({ selectedTaskData: newData }),
  selectedNodeId: '',
  setSelectedNodeId: (newId: string) => set({ selectedNodeId: newId }),
  selectedNodeType: '',
  setSelectedNodeType: (newType: string) => set({ selectedNodeType: newType }),
  selectedTaskVariant: '',
  setSelectedTaskVariant: (newVariant: string) =>
    set({ selectedTaskVariant: newVariant }),
  outgoingLinks: [],
  setOutgoingLinks: (newLinks: OutgoingLinkType[]) =>
    set({ outgoingLinks: newLinks }),
  clearConfigStore: () => {
    set({
      isOpenConfig: false,
      selectedTaskData: defaultTaskData,
      selectedNodeId: '',
      selectedTaskVariant: '',
    });
  },
}));

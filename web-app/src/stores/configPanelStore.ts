import { create } from 'zustand';
import { TaskDataType, defaultTaskData } from '../types/task';

type ConfigPanelState = {
  isOpenConfig: boolean;
  selectedNodeId: string;
  selectedTaskData: TaskDataType;
  selectedTaskVariant: string;
  setSelectedTaskData: (newData: TaskDataType) => void;
  clearConfigStore: () => void;
};

export const useConfigPanelStore = create<ConfigPanelState>((set) => ({
  isOpenConfig: false,
  setIsOpenConfig: (newState: boolean) => set({ isOpenConfig: newState }),
  selectedTaskData: defaultTaskData,
  setSelectedTaskData: (newData: TaskDataType) =>
    set({ selectedTaskData: newData }),
  selectedNodeId: '',
  setSelectedNodeId: (newId: string) => set({ selectedNodeId: newId }),
  selectedTaskVariant: '',
  setSelectedTaskVariant: (newVariant: string) =>
    set({ selectedTaskVariant: newVariant }),
  clearConfigStore: () => {
    set({
      isOpenConfig: false,
      selectedTaskData: defaultTaskData,
      selectedNodeId: '',
      selectedTaskVariant: '',
    });
  },
}));

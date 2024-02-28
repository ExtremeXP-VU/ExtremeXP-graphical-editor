import { create } from "zustand";
import { TaskDataType, defaultTaskData } from "../types/task";

type ConfigPanelState = {
  isOpenConfig: boolean;
  selectedTaskData: TaskDataType;
  selectedNodeId: string;
  selectedVariant: string;
  setSelectedTaskData: (newData: TaskDataType) => void;
};

export const useConfigPanelStore = create<ConfigPanelState>((set) => ({
  isOpenConfig: false,
  setIsOpenConfig: (newState: boolean) => set({ isOpenConfig: newState }),
  selectedTaskData: defaultTaskData,
  setSelectedTaskData: (newData: TaskDataType) =>
    set({ selectedTaskData: newData }),
  selectedNodeId: "",
  setSelectedNodeId: (newId: string) => set({ selectedNodeId: newId }),
  selectedVariant: "",
  setSelectedVariant: (newVariant: string) =>
    set({ selectedVariant: newVariant }),
}));

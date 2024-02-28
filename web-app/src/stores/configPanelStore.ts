import { create } from "zustand";
// import { TaskDataType, defaultTaskData } from "../types/task";

type ConfigPanelState = {
  isOpenConfig: boolean;
  selectedTaskName: string;
  selectedNodeId: string;
  selectedVariant: string;
  setSelectedTaskName: (newName: string) => void;
};

export const useConfigPanelStore = create<ConfigPanelState>((set) => ({
  isOpenConfig: false,
  setIsOpenConfig: (newState: boolean) => set({ isOpenConfig: newState }),
  selectedTaskName: "task",
  setSelectedTaskName: (newName: string) => set({ selectedTaskName: newName }),
  selectedNodeId: "",
  setSelectedNodeId: (newId: string) => set({ selectedNodeId: newId }),
  selectedVariant: "",
  setSelectedVariant: (newVariant: string) =>
    set({ selectedVariant: newVariant }),
}));

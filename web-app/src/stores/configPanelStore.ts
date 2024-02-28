import {create} from "zustand";

type ConfigPanelState = {
    isOpenConfig: boolean;
    selectedNodeName: string;
    selectedNodeId: string;
    selectedVariant: string;
    setSelectedNodeName: (newName: string) => void;
};

export const useConfigPanelStore = create<ConfigPanelState>((set) => ({
    isOpenConfig: false,
    setIsOpenConfig: (newState: boolean) => set({isOpenConfig: newState}),
    selectedNodeName: "task",
    setSelectedNodeName: (newName: string) => set({selectedNodeName: newName}),
    selectedNodeId: "",
    setSelectedNodeId: (newId: string) => set({selectedNodeId: newId}),
    selectedVariant: "",
    setSelectedVariant: (newVariant: string) => set({selectedVariant: newVariant}),
}));
import { create } from 'zustand';
import { TaskParameterType, defaultParameter } from '../types/task';
import { OperatorDataType, defaultOperatorData } from '../types/operator';
import { Edge, Node } from 'reactflow';

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
  setOutgoingLinks: (node: Node, edges: Edge[]) => void;
  clearConfigStore: () => void;
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
  selectedNodeId: '',
  setSelectedNodeId: (newId: string) => set({ selectedNodeId: newId }),
  selectedNodeType: '',
  setSelectedNodeType: (newType: string) => set({ selectedNodeType: newType }),
  outgoingLinks: [],
  setOutgoingLinks: (node: Node, edges: Edge[]) => {
    const links = edges.filter((edge) => edge.source === node.id);
    const outgoingLinks: OutgoingLinkType[] = [];

    for (let i = 0; i < links.length; i++) {
      const link: OutgoingLinkType = {
        index: i + 1,
        linkId: links[i].id,
        target: links[i].target,
      };
      outgoingLinks.push(link);
    }
    set({ outgoingLinks: outgoingLinks });
  },
  clearConfigStore: () => {
    set({
      isOpenConfig: false,
      // selectedTaskVariant: defaultTaskVariant,
      selectedNodeId: '',
      // selectedTaskVariantID: '',
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

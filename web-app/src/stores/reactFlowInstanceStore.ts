import React from 'react';
import { create } from 'zustand';
import { nanoid } from 'nanoid';
import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
  Connection,
} from 'reactflow';

import {
  linkProps,
  LinksPropsType,
} from '../components/editor/notations/notationConfigs/linkProps';

import { validateGraphicalModel } from './validationStore';

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeData: (data: object, nodeId: string) => void;
  updateEdgeData: (data: object, edgeId: string) => void;

  selectedNode: Node | null;
  setSelectedNode: (nodeId: string) => void;

  selectedLinkType: LinksPropsType;
  setSelectedLinkType: (link: LinksPropsType) => void;

  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addNode: (
    type: string,
    position: { x: number; y: number },
    data: object
  ) => void;
  onConnect: (params: Edge | Connection) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
};

export const useReactFlowInstanceStore = create<RFState>((set, get) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes: Node[]) => {
    set({
      ...get().nodes,
      nodes,
    });
  },
  setEdges: (edges: Edge[]) => {
    set({
      ...get().edges,
      edges,
    });
  },
  updateNodeData: (data: object, nodeId: string) => {
    const nodes = get().nodes.map((n) =>
      n.id === nodeId ? { ...n, data } : n
    );
    set({ nodes });
  },
  updateEdgeData: (data: object, edgeId: string) => {
    const edges = get().edges.map((e) =>
      e.id === edgeId ? { ...e, data } : e
    );
    set({ edges });
  },

  selectedLinkType: 'regular',
  setSelectedLinkType: (link: LinksPropsType) => {
    set({
      selectedLinkType: link,
    });
  },

  selectedNode: null,
  setSelectedNode: (nodeId: string) => {
    const node = get().nodes.find((n) => n.id === nodeId);
    set({
      selectedNode: node || null,
    });
  },
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });

    if (changes[0].type !== 'position' && changes[0].type !== 'select') {
      validateGraphicalModel({
        nodes: get().nodes,
        edges: get().edges,
      });
    }
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });

    if (changes[0].type === 'remove') {
      validateGraphicalModel({
        nodes: get().nodes,
        edges: get().edges,
      });
    }
  },

  addNode: (type: string, position: { x: number; y: number }, data: object) => {
    const newNode = {
      id: type + '-' + nanoid(),
      type,
      position,
      data: data,
    };

    if (type === 'task') {
      newNode.data = {
        ...newNode.data,
      };
    }

    set({
      nodes: [...get().nodes, newNode],
    });
  },
  onConnect: (params: Edge | Connection) => {
    const props = linkProps[get().selectedLinkType];
    const data = { ...params, ...(props as Edge) };
    const edge = {
      ...data,
      data: {},
      id: nanoid(),
    };
    set({
      edges: [...get().edges, edge],
    });

    validateGraphicalModel({
      nodes: get().nodes,
      edges: get().edges,
    });
  },
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  },
}));

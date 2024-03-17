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

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNode: (data: object, nodeId: string) => void;
  updateEdge: (edge: Edge) => void;

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
  updateNode: (data: object, nodeId: string) => {
    const nodes = get().nodes.map((n) =>
      n.id === nodeId ? { ...n, data } : n
    );
    set({ nodes });
  },
  updateEdge: (edge: Edge) => {
    const edges = get().edges.map((e) => (e.id === edge.id ? edge : e));
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
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addNode: (type: string, position: { x: number; y: number }, data: object) => {
    const newNode = {
      id: nanoid(),
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
  },
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  },
}));

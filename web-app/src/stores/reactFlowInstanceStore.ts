import React from "react";
import { create } from "zustand";
import { nanoid } from "nanoid";
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
} from "reactflow";

import {
  linkProps,
  LinksPropsType,
} from "../components/editor/notations/notationConfigs/linkProps";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  selectedLink: LinksPropsType;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  addNode: (
    type: string,
    position: { x: number; y: number },
    data: object
  ) => void;
  onConnect: (params: Edge | Connection) => void;
  setSelectedLink: (link: LinksPropsType) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
};

export const useReactFlowInstanceStore = create<RFState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedLink: "regular",
  setSelectedLink: (link: LinksPropsType) => {
    set({
      selectedLink: link,
    });
  },
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

    if (type === "subflow") {
      newNode.data = {
        ...newNode.data,
        id: newNode.id,
      };
    }

    set({
      nodes: [...get().nodes, newNode],
    });
  },
  onConnect: (params: Edge | Connection) => {
    const props = linkProps[get().selectedLink];
    const data = { ...params, ...(props as Edge) };
    const edge = {
      ...data,
      id: nanoid(),
    };
    set({
      edges: [...get().edges, edge],
    });
  },
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  },
}));

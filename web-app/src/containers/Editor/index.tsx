import React from 'react';
import Header from '../../components/editor/Header';
import Panel from '../../components/editor/Panel';
import SideBar from '../../components/editor/SideBar';

import ReactFlow, {
  ReactFlowProvider,
  // addEdge,
  // useNodesState,
  // useEdgesState,
  // Controls,
  Background
} from 'reactflow';

import 'reactflow/dist/style.css';
import './style.scss'


const Editor = () => {
  // const fileContent = localStorage.getItem('fileContent');

  return (
    <div className="editor">
      <div className="editor__top"><Header/></div>
      <ReactFlowProvider>
        <div className="editor__bottom">
          <div className="editor__bottom__left"><Panel/></div>
          <div className="editor__bottom__middle">
            <ReactFlow>
              <Background />
            </ReactFlow>
          </div>
          <div className="editor__bottom__right"><SideBar/></div>
        </div>
      </ReactFlowProvider>
    </div>
  )
};

export default Editor;

import './style.scss';

import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';

import { nodeImageSrc } from '../../../assets/nodes';
import { linkImageSrc } from '../../../assets/links';
import { LinksPropsType } from '../notations/notationConfigs/linkProps';
import { notationList } from '../notations/notationConfigs/notationList';

import { genericTask, defaultTaskVariant } from '../../../types/task';

import SubTask from './SubTask';
import { useCategoryStore, setCategories } from '../../../stores/categoryStore';

import useRequest from '../../../hooks/useRequest';
import { message } from '../../../utils/message';
import { CategoriesResponseType } from '../../../types/requests';

import NodeDescription from '../../../assets/texts/node_description.json';

interface PanelProps {
  selectedLink: string;
  onLinkSelection: (linkType: LinksPropsType) => void;
}

const nodesList = notationList.nodes;
const edgesList = notationList.edges;

type WindowNodeType =
  | 'start'
  | 'end'
  | 'data'
  | 'task'
  | 'subflow'
  | 'opParallel'
  | 'opExclusive'
  | 'opInclusive'
  | 'opComplex';

const Panel: React.FC<PanelProps> = ({ selectedLink, onLinkSelection }) => {
  const [windowNode, setWindowNode] = useState('start');
  const categories = useCategoryStore((state) => state.categories);
  const { request: categoriesRequest } = useRequest<CategoriesResponseType>();

  const getCategories = useCallback(() => {
    categoriesRequest({
      url: `task/categories`,
    })
      .then((data) => {
        if (data.data.categories) {
          setCategories(data.data.categories);
        }
      })
      .catch((error) => {
        if (error.name === 'AxiosError') {
          message('Please login first');
        }
      });
  }, [categoriesRequest, categories]);

  useEffect(() => {
    getCategories();
  }, []);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    setWindowNode(nodeType);
    let data = {};
    const id = 'variant-1-' + nanoid();
    if (nodeType === 'task') {
      data = {
        currentVariant: id,
        variants: [
          {
            ...defaultTaskVariant,
            id_task: id,
          },
        ],
      };
    }

    if (nodeType === 'subflow') {
      data = {
        currentVariant: id,
        variants: [
          {
            ...defaultTaskVariant,
            id_task: id,
            name: genericTask.name,
            is_composite: true,
            graphical_model: genericTask.graphical_model,
          },
        ],
      };
      nodeType = 'task';
    }

    const nodeData = { nodeType: nodeType, data: data };
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(nodeData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleLinkSelection = (linkType: LinksPropsType) => {
    onLinkSelection(linkType);
  };

  return (
    <div className="panel">
      <div className="panel__info">
        <div className="panel__info__window">
          <div className="panel__info__window__notation">
            <img src={nodeImageSrc(windowNode)} alt={windowNode} />
          </div>
          <div className="panel__info__window__title">
            <p>{windowNode}</p>
          </div>
        </div>
        <div className="panel__info__description">
          <p className="panel__info__description__description">
            {NodeDescription[windowNode as WindowNodeType].description}{' '}
          </p>
          <p className="panel__info__description__usage">
            {NodeDescription[windowNode as WindowNodeType].usage}
          </p>
        </div>
      </div>
      <div className="panel__nodes">
        <div className="panel__nodes__title">
          <p className="panel__nodes__title__name">nodes</p>
          <p className="panel__nodes__title__tutorial">
            Click to check the node description or drag the node onto the board
            on the right.
          </p>
        </div>
        <div className="panel__nodes__content">
          {nodesList.map((nodeType, index) => {
            return (
              <div
                key={index}
                className="panel__nodes__content__node"
                onDragStart={(event) => onDragStart(event, nodeType)}
                draggable
                onClick={() => {
                  setWindowNode(nodeType);
                }}
              >
                <img src={nodeImageSrc(nodeType)} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel__links">
        <div className="panel__links__title">
          <p className="panel__links__title__name">{`${selectedLink} link`}</p>
        </div>
        <div className="panel__links__window">
          <img src={linkImageSrc(selectedLink)} alt={selectedLink} />
        </div>
        <div className="panel__links__content">
          {edgesList.map((edgeType, index) => {
            return (
              <div
                key={index}
                className={`panel__links__content__link ${
                  selectedLink === edgeType ? 'selected' : ''
                }`}
                onClick={() => {
                  handleLinkSelection(edgeType as LinksPropsType);
                }}
              >
                {edgeType.toUpperCase().charAt(0)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel__subtasks">
        <div className="panel__subtasks__title">
          <p className="panel__subtasks__title__name">composite tasks</p>
        </div>
        <div className="panel__subtasks__content">
          <div
            className="panel__subtasks__content__generic__task"
            onDragStart={(event) => onDragStart(event, 'subflow')}
            onClick={() => setWindowNode('subflow')}
            draggable
          >
            <span className="iconfont">&#xe608;</span>
            <p>Generic Task</p>
          </div>
          <div className="panel__subtasks__content__predefined">
            {categories.map((category, index) => {
              return (
                <SubTask
                  key={index}
                  category={category}
                  setWindow={setWindowNode}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;

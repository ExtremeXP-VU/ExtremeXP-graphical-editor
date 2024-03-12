import './style.scss';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';
import XMLViewer from 'react-xml-viewer';

import { genericTask } from '../../types/task';

const Execution = () => {
  const navigate = useNavigate();
  const projID = useLocation().pathname.split('/')[3];
  const experimentID = useLocation().pathname.split('/')[4];

  const [xmlData, setXmlData] = useState('');

  const handleGoBack = () => {
    navigate(`/editor/experiment/${projID}/${experimentID}`);
  };

  // use fetch to get the xmi file
  const xmi = fetch(
    'http://localhost/api/v2/models?modeluri=Generic.workflow&format=xmi'
  ).then((response) => response.json());

  let xml = '';
  const result = xmi.then((data) => {
    // console.log(data);
    xml = data.data;
    setXmlData(xml);
  });

  console.log(result);

  return (
    <div className="convertor">
      <div className="convertor__header">
        <button className="convertor__header__back" onClick={handleGoBack}>
          <div className="convertor__header__back__arrow">
            <span className="iconfont">&#xe79b;</span>
          </div>
          <p>editor</p>
        </button>
        <p className="convertor__header__title">Converting Results</p>
      </div>
      <div className="convertor__content">
        <div className="convertor__content__wrapper convertor__content__wrapper__left">
          <div className="convertor__content__wrapper__type"> JSON </div>
          <div className="convertor__content__wrapper__viewer">
            <JsonView src={genericTask} />
          </div>
        </div>
        <div className="convertor__content__wrapper convertor__content__wrapper__right">
          <div className="convertor__content__wrapper__type"> XMI </div>
          <div className="convertor__content__wrapper__viewer">
            <XMLViewer xml={xmlData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execution;

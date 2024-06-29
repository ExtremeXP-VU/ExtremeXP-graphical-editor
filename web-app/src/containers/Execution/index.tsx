import './style.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';
import XMLViewer from 'react-xml-viewer';
import useRequest from '../../hooks/useRequest';
import { message } from '../../utils/message';
import { ConvertorResponseType } from '../../types/requests';

const Execution = () => {
  const navigate = useNavigate();
  const projID = useLocation().pathname.split('/')[3];
  const experimentID = useLocation().pathname.split('/')[4];

  const { request: convertRequest } = useRequest<ConvertorResponseType>();

  const [json, setJson] = useState({});
  const [xmlData, setXmlData] = useState('');

  const handleGoBack = () => {
    navigate(`/editor/experiment/${projID}/${experimentID}`);
  };

  useEffect(() => {
    convertRequest({
      url: `/exp/execute/convert/${experimentID}`,
      method: 'POST',
    })
      .then((response) => {
        setJson(response.data.json);
        setXmlData(response.data.xmi);
      })
      .catch((error) => {
        message(error.message || 'Failed to convert the model');
      });
  }, [convertRequest]);

  return (
    <div className="convertor">
      <div className="convertor__header">
        <button className="convertor__header__back" onClick={handleGoBack}>
          <div className="convertor__header__back__arrow">
            <span className="iconfont">&#xe79b;</span>
          </div>
          <p>editor</p>
        </button>
        <p className="convertor__header__title">{`Graphical Model to EMF Model Convertor`}</p>
      </div>
      <div className="convertor__content">
        <div className="convertor__content__wrapper convertor__content__wrapper__left">
          <div className="convertor__content__wrapper__type"> JSON </div>
          <div className="convertor__content__wrapper__viewer">
            <JsonView src={json} />
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

import './style.scss';
import { useEffect, useState } from 'react';

import { useValidationStore } from '../../../stores/validationStore';

const Validation = () => {
  const validation = useValidationStore.getState();
  const { valid, messages } = validation;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (valid) {
      setShow(false);
    }
  }, [valid]);

  return (
    <div className="validation">
      {show && (
        <div className="validation__window">
          <div
            className="validation__window__header"
            onClick={() => setShow(false)}
          >
            <span className="close iconfont">&#xe679;</span>
          </div>
          <div className="validation__window__content">
            {messages.map((message, index) => (
              <div key={index} className="validation__message">
                <div className="validation__message__type">{message.type}</div>
                <div className="validation__message__code">{`[${message.code}]`}</div>
                <div className="validation__message__text">
                  {message.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {valid && (
        <div className="validation__ball">
          <div className="validation__ball__content">
            <p className="iconfont">&#xe69a;</p>
          </div>
        </div>
      )}
      {!show && !valid && (
        <div className="validation__ball" onClick={() => setShow(true)}>
          <div className="validation__ball__content validation__ball__content--invalid">
            <p> {messages.length} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Validation;

import './style.scss';
import React, { useEffect } from 'react';

import { useValidationStore } from '../../../stores/validationStore';

const Validation = () => {
  const validation = useValidationStore.getState();
  const { valid, messages } = validation;

  useEffect(() => {
    console.log('valid:', valid);
    console.log('messages:', messages);
  }, [validation]);

  return <div className="validation">Validation</div>;
};

export default Validation;

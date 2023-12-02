import React from 'react';

const Editor = () => {
  const fileName = localStorage.getItem('fileName');
  const fileContent = localStorage.getItem('fileContent');

  return (
    <div>
      <h1>{fileName}</h1>
      <pre>{fileContent}</pre>
    </div>
  )
};

export default Editor;

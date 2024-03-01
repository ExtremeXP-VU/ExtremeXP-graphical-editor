import ReactDOM from 'react-dom/client';

const mondalStyle = {
  display: 'table',
  position: 'absolute' as const,
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '3rem',
  height: '1rem',
  boxSizing: 'border-box' as const,
  padding: '0.2rem',
  borderRadius: '0.08rem',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
};

const modalTextStyle = {
  display: 'table-cell',
  fontSize: '1.3em',
  fontWeight: '600',
  color: 'white',
  verticalAlign: 'middle',
  textAlign: 'center' as const,
};

const element = document.createElement('div');

const root = ReactDOM.createRoot(element);

export const message = (message: string, timeout = 1500) => {
  root.render(
    <div style={mondalStyle}>
      <div style={modalTextStyle}>{message}</div>
    </div>
  );
  if (!element.parentNode) {
    document.body.appendChild(element);
    setTimeout(() => {
      document.body.removeChild(element);
    }, timeout);
  }
};

export default message;

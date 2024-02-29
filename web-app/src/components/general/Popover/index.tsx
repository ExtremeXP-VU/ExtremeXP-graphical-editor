import './style.scss';
import { ReactNode } from 'react';

function Popover(props: {
  show: boolean;
  blankClickCallback: () => void;
  children: ReactNode;
}) {
  const { show, blankClickCallback, children } = props;
  return show ? (
    <>
      <div className="popover__mask" onClick={blankClickCallback}></div>
      <div className="popover__content">{children}</div>
    </>
  ) : null;
}

export default Popover;

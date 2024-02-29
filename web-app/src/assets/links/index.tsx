import regular from './svg/regular.svg';
import conditional from './svg/conditional.svg';
import exceptional from './svg/exceptional.svg';
import dataflow from './svg/dataflow.svg';

const linkImageMap: { [key: string]: string } = {
  regular,
  conditional,
  exceptional,
  dataflow,
};

const linkImageSrc = (linkType: string) => {
  return linkImageMap[linkType];
};

export { linkImageSrc };

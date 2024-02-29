import task from './svg/task.svg';
import subflow from './svg/subflow.svg';
import start from './svg/start.svg';
import end from './svg/end.svg';
import data from './svg/data.svg';
import opParallel from './svg/operator-parallel.svg';
import opExclusive from './svg/operator-exclusive.svg';
import opInclusive from './svg/operator-inclusive.svg';
import opComplex from './svg/operator-complex.svg';

// nodeImageMap is a map of nodeType to image src
const nodeImageMap: { [key: string]: string } = {
  task,
  subflow,
  start,
  end,
  data,
  opParallel,
  opExclusive,
  opInclusive,
  opComplex,
};

// nodeImageSrc returns the image src for a given nodeType
const nodeImageSrc = (nodeType: string) => {
  return nodeImageMap[nodeType];
};

export { nodeImageSrc };

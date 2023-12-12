import task from "./task.svg";
import start from "./start.svg";
import end from "./end.svg";
import data from "./data.svg";

const nodeImageMap: { [key: string]: string } = {
  task,
  start,
  end,
  data,
};

const nodeImageSrc = (nodeType: string) => {
  return nodeImageMap[nodeType];
};

export { nodeImageSrc };

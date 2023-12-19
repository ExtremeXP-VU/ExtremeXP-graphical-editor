import EventStart from "../../components/editor/notations/nodes/EventStart";
import EventEnd from "../../components/editor/notations/nodes/EventEnd";
import Task from "../../components/editor/notations/nodes/Task";
import Data from "../../components/editor/notations/nodes/Data";

import RegularLink from "../../components/editor/notations/edges/RegularLink";
import ConditionalLink from "../../components/editor/notations/edges/ConditionalLink";
import ExceptionalLink from "../../components/editor/notations/edges/ExceptionalLink";
import DataflowLink from "../../components/editor/notations/edges/DataflowLink";

export const nodeTypes = {
  start: EventStart,
  end: EventEnd,
  task: Task,
  data: Data,
};

export const edgeTypes = {
  regular: RegularLink,
  conditional: ConditionalLink,
  exceptional: ExceptionalLink,
  dataflow: DataflowLink,
};

import "./style.scss";

const nodesList = ["input", "default", "output"];

const Panel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="panel">
      <div className="panel__info">
        <div className="panel__info__window">
          <div className="panel__info__window__notation">
            <img src="./nodes/task.svg" alt="task" />
          </div>
          <div className="panel__info__window__title">
            <p>Task</p>
          </div>
        </div>
        <div className="panel__info__description">
          <p>
            Task node description: fjsklf dklfj fdsjkflsdj dsklf sfjks skdsfsd
            sdfsf fsfs s fd ksjkslfjsklfds sdfds sdsf s sds fdssdfs fdsk
            sfdsfsfs fjsklf dklfj fdsjkflsdj dsklf sfjks skdsfsd sdfsf fsfs s fd
            ksjkslfjsklfds sdfds sdsf s sds fdssdfs fdsk sfdsfsfs fjsklf dklfj
            fdsjkflsdj dsklf sfjks skdsfsd sdfsf fsfs s fd ksjkslfjsklfds sdfds
            sdsf s sds fdssdfs fdsk sfdsfsfs fjsklf dklfj fdsjkflsdj dsklf sfjks
            skdsfsd sdfsf fsfs s fd ksjkslfjsklfds sdfds sdsf s sds fdssdfs fdsk
            sfdsfsfs
          </p>
        </div>
      </div>
      <div className="panel__nodes">
        <div className="panel__nodes__title">
          <p className="panel__nodes__title__name">Nodes</p>
          <p className="panel__nodes__title__tutorial">
            Click to check the description of the node or drag the node onto the
            board on the right
          </p>
        </div>
        <div className="panel__nodes__content">
          {nodesList.map((nodeType) => {
            return (
              <div
                className="panel__nodes__content__node"
                onDragStart={(event) => onDragStart(event, nodeType)}
                draggable
              >
                {nodeType}
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel__links"></div>
    </div>
  );
};

export default Panel;

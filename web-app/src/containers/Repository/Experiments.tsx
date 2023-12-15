const Experiments = () => {
  // const handleNewDeployment = async () => {
  //   try {
  //     // Sample JSON content for a new deployment
  //     const diagram = { nodes: [], edges: [] };

  //     const fileHandle = await window.showSaveFilePicker();
  //     const writable = await fileHandle.createWritable();

  //     await writable.write(JSON.stringify(diagram, null, 2));
  //     await writable.close();

  //     const file = await fileHandle.getFile();
  //     const fileName = file.name;
  //     const fileNameWithoutExtension = fileName.split(".")[0];
  //     const content = await file.text();

  //     localStorage.setItem("fileName", fileNameWithoutExtension);
  //     localStorage.setItem("diagram", content);
  //   } catch (error) {
  //     console.error("Error creating file:", error);
  //   }
  // };

  // const handleImportDeployment = async () => {
  //   try {
  //     const [fileHandle] = await window.showOpenFilePicker();
  //     const file = await fileHandle.getFile();
  //     const diagram = await file.text();

  //     const fileName = file.name;
  //     const fileNameWithoutExtension = fileName.split(".")[0];

  //     localStorage.setItem("fileName", fileNameWithoutExtension);
  //     localStorage.setItem("diagram", diagram);
  //   } catch (error) {
  //     console.error("Error importing file:", error);
  //   }
  // };
  return (
    <>
      <div className="page experiments">
        <div className="experiments__folders">
          <div className="experiments__folders__new">
            <input
              type="text"
              placeholder="enter the experiment name"
              className="experiments__folders__new__input"
            />
            <button className="experiments__folders__new__button">
              create
            </button>
          </div>
          <div className="experiments__folders__search">
            <span className="iconfont">&#xe60a;</span>
            <input type="text" />
          </div>
          <div className="experiments__folders__list">
            <ul className="experiments__folders__list__item"></ul>
          </div>
        </div>
        <div className="experiments__experiment"></div>
      </div>
    </>
  );
};

export default Experiments;

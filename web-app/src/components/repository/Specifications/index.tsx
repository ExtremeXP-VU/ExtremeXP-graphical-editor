import "./style.scss";

const Specifications = () => {
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
    <div className="specification">
      <h1>Specificaiton</h1>
    </div>
  );
};

export default Specifications;

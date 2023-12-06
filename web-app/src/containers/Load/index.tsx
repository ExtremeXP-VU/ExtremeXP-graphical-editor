import "./style.scss";
import { useNavigate } from "react-router-dom";

const Load = () => {
  const navigate = useNavigate();

  const handleNewDeployment = async () => {
    try {
      // Sample JSON content for a new deployment
      const diagram = { nodes: [], edges: [] };

      const fileHandle = await window.showSaveFilePicker();
      const writable = await fileHandle.createWritable();

      await writable.write(JSON.stringify(diagram, null, 2));
      await writable.close();

      const file = await fileHandle.getFile();
      const fileName = file.name;
      const fileNameWithoutExtension = fileName.split(".")[0];
      const content = await file.text();

      localStorage.setItem("fileName", fileNameWithoutExtension);
      localStorage.setItem("diagram", content);

      navigate(`/editor/${fileName}`);
    } catch (error) {
      console.error("Error creating file:", error);
    }
  };

  const handleImportDeployment = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const diagram = await file.text();

      const fileName = file.name;
      const fileNameWithoutExtension = fileName.split(".")[0];

      localStorage.setItem("fileName", fileNameWithoutExtension);
      localStorage.setItem("diagram", diagram);

      navigate(`/editor/${fileNameWithoutExtension}`);
    } catch (error) {
      console.error("Error importing file:", error);
    }
  };

  return (
    <div className="load">
      <div className="load__banner">
        <img
          src="./extremeXP_logo.png"
          alt="logo"
          className="load__banner__logo"
        />
        <div className="load__banner__title">ExtremeXP Graphical Editor</div>
      </div>
      <div className="load__file">
        <div className="load__file__button" onClick={handleNewDeployment}>
          New Deployment
        </div>
        <div className="load__file__button" onClick={handleImportDeployment}>
          Import Deployment from ...
        </div>
      </div>
    </div>
  );
};

export default Load;

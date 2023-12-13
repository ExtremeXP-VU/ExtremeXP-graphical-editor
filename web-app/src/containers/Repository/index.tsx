import "./style.scss";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import logo from "../../assets/extremeXP_logo.png";

const Repository = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("username")) {
      navigate(`/repository/${localStorage.getItem("username")}`);
    } else {
      navigate("/account/login");
    }
  }, [navigate]);

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
      window.location.reload();
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
      window.location.reload();
    } catch (error) {
      console.error("Error importing file:", error);
    }
  };

  return (
    <div className="page repository">
      <div className="repository__panel"></div>
      <div className="repository__content"></div>
    </div>
  );
};

export default Repository;

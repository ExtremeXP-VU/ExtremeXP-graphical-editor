import "./style.scss";
import React from "react";

interface ExperimentProps {
  expID: string;
}

const Experiment: React.FC<ExperimentProps> = ({ expID }) => {
  return (
    <div>
      <h1>Experiment : {expID}</h1>
    </div>
  );
};

export default Experiment;

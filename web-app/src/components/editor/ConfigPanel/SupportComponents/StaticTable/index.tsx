import React from 'react';
import './style.scss';
import { useConfigPanelStore } from '../../../../../stores/configPanelStore';
import { useReactFlowInstanceStore } from '../../../../../stores/reactFlowInstanceStore';

type TableProps = {
  properties: {
    name?: JSX.Element;
    description?: JSX.Element;
    abstract?: JSX.Element; // For the radio buttons
    implementation?: JSX.Element; // For custom element, like a link
    category?: JSX.Element; // For dropdown
    type?: JSX.Element; // For dropdown
    condition?: JSX.Element; // For the condition input
    conditions?: JSX.Element; // For the conditions input
    range?: JSX.Element; // For the range input
  };
};

const StaticTable: React.FC<TableProps> = ({ properties }) => {
  const entries = Object.entries(properties); // Convert the properties object to an array of entries
  const selectedNodeType = useConfigPanelStore(
    (state) => state.selectedNodeType
  );

  const edges = useReactFlowInstanceStore((state) => state.edges);
  const outgoingLinks = useConfigPanelStore((state) => state.outgoingLinks);
  const outgoingEdges = edges.filter((edge) =>
    outgoingLinks.some((link) => link.linkId === edge.id)
  );
  return (
    <div className="table-component">
      {selectedNodeType === 'task' && (
        <div className="header-text">Generic Properties</div>
      )}
      {/* Header Row */}
      <table className="row header-row">
        <thead className="cell">
          <tr>
            <td className="property">property</td>
          </tr>
        </thead>
        <thead className="cell">
          <tr>
            <td className="value">value</td>
          </tr>
        </thead>
      </table>

      {/* Data row */}
      {entries.map(([key, value]) => (
        <table className={`row `} key={key}>
          <tbody className="cell">
            <tr>
              <td className="property"> {key}</td>
            </tr>
          </tbody>
          <tbody className="cell">
            <tr>
              <td className="value"> {value}</td>
            </tr>
          </tbody>
        </table>
      ))}
      {outgoingEdges.length > 0 && (
        <div className="header-text top-padding">Outgoing Links</div>
      )}
      {outgoingEdges.map((edge, index) => {
        return (
          <table className={`row `}>
            <tbody className="cell">
              <tr>
                <td className="property"> {`Link ${index + 1}`} </td>
              </tr>
            </tbody>
            <tbody className="cell">
              <tr>
                <td className="value"> {edge.data.label}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default StaticTable;

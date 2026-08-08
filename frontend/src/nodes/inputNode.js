import { NodeField } from "../components/nodes/NodeField";
import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "../components/nodes/BaseNode";
import { Input } from "../components/ui/input";
import { NODE_ICONS } from "../components/node-icons";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState(data?.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-value`,
    },
  ];

  return (
    <BaseNode title="Input" icon={NODE_ICONS.customInput} handles={handles}>
      <div className="space-y-3">
        <NodeField label="Name" htmlFor={`${id}-name`}>
          <Input
            id={`${id}-name`}
            value={currName}
            onChange={handleNameChange}
          />
        </NodeField>

        <NodeField label="Type" htmlFor={`${id}-type`}>
          <select
            id={`${id}-type`}
            value={inputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </NodeField>
      </div>
    </BaseNode>
  );
};

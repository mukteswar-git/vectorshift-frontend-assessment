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
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Name
          </label>

          <Input value={currName} onChange={handleNameChange} className="h-8" />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Type
          </label>

          <select
            value={inputType}
            onChange={handleTypeChange}
            className="h-8 w-full rounded-md border border-border bg-surface px-2 text-xs text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};

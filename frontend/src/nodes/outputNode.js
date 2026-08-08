import { useState } from 'react';
import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Input } from '../components/ui/input';
import { NODE_ICONS } from '../components/node-icons';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-value`,
    },
  ];

  return (
    <BaseNode
      title="Output"
      icon={NODE_ICONS.customOutput}
      handles={handles}
    >
      <div className="space-y-3">
        <NodeField label="Name">
          <Input
            value={currName}
            onChange={handleNameChange}
            className="h-8"
          />
        </NodeField>

        <NodeField label="Type">
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="h-8 w-full rounded-md border border-border bg-surface px-2 text-xs text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </NodeField>
      </div>
    </BaseNode>
  );
};
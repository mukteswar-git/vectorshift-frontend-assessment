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

  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

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
    <BaseNode title="Output" icon={NODE_ICONS.customOutput} handles={handles}>
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
            value={outputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </NodeField>
      </div>
    </BaseNode>
  );
};

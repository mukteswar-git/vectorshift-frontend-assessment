import { useState } from 'react';
import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Textarea } from '../components/ui/textarea';
import { NODE_ICONS } from '../components/node-icons';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      title="Text"
      icon={NODE_ICONS.text}
      handles={handles}
    >
      <NodeField label="Text">
        <Textarea
          value={currText}
          onChange={handleTextChange}
          className="min-h-[80px]"
        />
      </NodeField>
    </BaseNode>
  );
};
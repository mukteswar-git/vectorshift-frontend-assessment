import { useState } from 'react';
import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
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
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground">
          Text
        </label>

        <Textarea
          value={currText}
          onChange={handleTextChange}
          className="min-h-[80px]"
        />
      </div>
    </BaseNode>
  );
};
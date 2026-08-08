import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Textarea } from '../components/ui/textarea';
import { NODE_ICONS } from '../components/node-icons';

export const TransformNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      title="Transform"
      icon={NODE_ICONS.transform}
      handles={handles}
    >
      <NodeField label="Expression">
        <Textarea
          placeholder="value.toUpperCase()"
          className="min-h-[70px]"
        />
      </NodeField>
    </BaseNode>
  );
};
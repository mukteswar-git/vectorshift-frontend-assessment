import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Input } from '../components/ui/input';
import { NODE_ICONS } from '../components/node-icons';

export const ConditionNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-true`,
      style: {
        top: '35%',
      },
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-false`,
      style: {
        top: '65%',
      },
    },
  ];

  return (
    <BaseNode title="Condition" icon={NODE_ICONS.condition} handles={handles}>
      <NodeField label="Condition">
        <Input placeholder="value > 10" className="h-8" />
      </NodeField>
    </BaseNode>
  );
};

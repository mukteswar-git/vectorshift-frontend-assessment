import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Input } from '../components/ui/input';
import { NODE_ICONS } from '../components/node-icons';

export const FilterNode = ({ id }) => {
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
    <BaseNode title="Filter" icon={NODE_ICONS.filter} handles={handles}>
      <NodeField label="Condition">
        <Input placeholder="status === active" className="h-8" />
      </NodeField>
    </BaseNode>
  );
};

import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Input } from '../components/ui/input';
import { NODE_ICONS } from '../components/node-icons';

export const DatabaseNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-query`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-result`,
    },
  ];

  return (
    <BaseNode
      title="Database"
      icon={NODE_ICONS.database}
      handles={handles}
    >
      <div className="space-y-3">
        <NodeField label="Operation">
          <select
            defaultValue="SELECT"
            className="h-8 w-full rounded-md border border-border bg-surface px-2 text-xs text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="SELECT">SELECT</option>
            <option value="INSERT">INSERT</option>
            <option value="UPDATE">UPDATE</option>
            <option value="DELETE">DELETE</option>
          </select>
        </NodeField>

        <NodeField label="Query">
          <Input
            placeholder="SELECT * FROM users"
            className="h-8"
          />
        </NodeField>
      </div>
    </BaseNode>
  );
};
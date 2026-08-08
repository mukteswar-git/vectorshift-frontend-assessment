import { Position } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Input } from '../components/ui/input';
import { NODE_ICONS } from '../components/node-icons';

export const ApiNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`,
    },
  ];

  return (
    <BaseNode title="API" icon={NODE_ICONS.api} handles={handles}>
      <div className="space-y-3">
        <NodeField label="Method">
          <select
            defaultValue="GET"
            className="h-8 w-full rounded-md border border-border bg-surface px-2 text-xs text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </NodeField>

        <NodeField label="URL">
          <Input placeholder="https://api.example.com" className="h-8" />
        </NodeField>
      </div>
    </BaseNode>
  );
};

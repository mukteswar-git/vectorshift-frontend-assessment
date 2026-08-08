import { Position } from 'reactflow';
import { BaseNode } from '../components/nodes/BaseNode';
import { NODE_ICONS } from '../components/node-icons';

export const LLMNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-system`,
      style: {
        top: `${100 / 3}%`,
      },
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-prompt`,
      style: {
        top: `${200 / 3}%`,
      },
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`,
    },
  ];

  return (
    <BaseNode
      title="LLM"
      icon={NODE_ICONS.llm}
      handles={handles}
    >
      <p className="text-xs text-muted-foreground">
        This is a LLM.
      </p>
    </BaseNode>
  );
};
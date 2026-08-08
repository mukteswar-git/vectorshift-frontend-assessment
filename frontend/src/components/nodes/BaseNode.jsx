import React from 'react';
import { cn } from '../../lib/utils';

import { NodeHeader } from './NodeHeader';
import { NodeContent } from './NodeContent';
import { NodeHandles } from './NodeHandles';

export const BaseNode = ({
  title,
  icon,
  handles = [],
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'node-card relative w-[220px] rounded-lg border border-border',
        'bg-surface text-foreground shadow-node',
        'transition-shadow duration-150',
        className
      )}
    >
      <NodeHandles handles={handles} />

      <NodeHeader
        title={title}
        icon={icon}
      />

      <NodeContent>
        {children}
      </NodeContent>
    </div>
  );
};
import React from 'react';
import { Handle } from 'reactflow';
import { cn } from '../../lib/utils';

export const BaseNode = ({
  title,
  icon: Icon,
  handles = [],
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative w-[220px] rounded-lg border border-border',
        'bg-surface shadow-node',
        'text-foreground',
        className
      )}
    >
      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        {Icon && <Icon className="h-4 w-4 text-primary" />}

        <span className="text-sm font-semibold">
          {title}
        </span>
      </div>

      {/* Node content */}
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};
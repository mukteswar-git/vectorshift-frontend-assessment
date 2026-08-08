import React from 'react';
import { cn } from '../../lib/utils';

export const NodeHeader = ({ title, icon: Icon, className }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 border-b border-border px-3 py-2.5',
        className
      )}
    >
      {Icon && <Icon className="h-4 w-4 text-primary" />}

      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

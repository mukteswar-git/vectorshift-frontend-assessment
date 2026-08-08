import React from 'react';
import { cn } from '../../lib/utils';

export const NodeField = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={cn('space-y-1.5', className)}>
      <label className="text-xs font-medium text-muted-foreground">
        {label}
      </label>

      {children}
    </div>
  );
};
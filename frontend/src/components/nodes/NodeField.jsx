import React from 'react';
import { cn } from '../../lib/utils';

export const NodeField = ({ label, htmlFor, children, className }) => {
  return (
    <div className={cn('space-y-1.5', className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-xs font-medium text-muted-foreground"
        >
          {label}
        </label>
      )}

      {children}
    </div>
  );
};

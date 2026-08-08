import React from 'react';
import { cn } from '../../lib/utils';

export const NodeContent = ({ children, className }) => {
  return <div className={cn('p-3', className)}>{children}</div>;
};

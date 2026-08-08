import React from 'react';
import { cn } from '../../lib/utils';

const variants = {
  default:
    'border-transparent bg-primary text-primary-foreground',
  secondary:
    'border-transparent bg-secondary text-secondary-foreground',
  outline:
    'border-border bg-transparent text-foreground',
  muted:
    'border-transparent bg-muted text-muted-foreground',
  destructive:
    'border-transparent bg-destructive text-destructive-foreground',
};

export function Badge({
  className,
  variant = 'default',
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Dialog(props) {
  return <DialogPrimitive.Root {...props} />;
}

export function DialogTrigger(props) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogPortal(props) {
  return <DialogPrimitive.Portal {...props} />;
}

export function DialogClose(props) {
  return <DialogPrimitive.Close {...props} />;
}

export function DialogOverlay({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/40',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        className
      )}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  ...props
}) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        className={cn(
          'fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)]',
          'max-w-lg -translate-x-1/2 -translate-y-1/2',
          'rounded-lg border border-border bg-surface p-6',
          'shadow-node',
          'focus:outline-none',
          className
        )}
        {...props}
      >
        {children}

        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogHeader({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5',
        className
      )}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Title
      className={cn(
        'text-lg font-semibold text-foreground',
        className
      )}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Description
      className={cn(
        'text-sm text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 pt-4',
        className
      )}
      {...props}
    />
  );
}
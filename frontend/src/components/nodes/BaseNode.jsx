import React from "react";
import { cn } from "../../lib/utils";

import { NodeHeader } from "./NodeHeader";
import { NodeContent } from "./NodeContent";
import { NodeHandles } from "./NodeHandles";

export const BaseNode = ({
  title,
  icon,
  handles = [],
  children,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        "node-card relative rounded-lg border border-border",
        "bg-surface text-foreground shadow-node",
        "transition-shadow duration-150",
        className
      )}
      style={style}
    >
      <NodeHeader title={title} icon={icon} />

      <NodeContent>
        {children}
      </NodeContent>

      <NodeHandles handles={handles} />
    </div>
  );
};
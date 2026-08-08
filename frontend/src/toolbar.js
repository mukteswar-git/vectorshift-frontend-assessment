import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 border-b border-border bg-surface px-3 py-3 sm:gap-3 sm:px-4">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="filter" label="Filter" />
      <DraggableNode type="transform" label="Transform" />
      <DraggableNode type="database" label="Database" />
      <DraggableNode type="condition" label="Condition" />
    </div>
  );
};

import { Button } from './components/ui/button';
import { NODE_ICONS } from './components/node-icons';

export const DraggableNode = ({ type, label }) => {
  const Icon = NODE_ICONS[type];

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.currentTarget.style.cursor = 'grabbing';

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    event.currentTarget.style.cursor = 'grab';
  };

  return (
    <Button
      type="button"
      variant="default"
      className="
        h-16 min-w-[80px]
        cursor-grab flex-col gap-1.5
        rounded-lg
        px-4
        shadow-sm
        transition-all duration-150
        hover:-translate-y-px hover:shadow-md
        active:translate-y-0 active:cursor-grabbing
        focus-visible:ring-2 focus-visible:ring-primary/30
      "
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      title={`Drag ${label} node onto the canvas`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span className="text-xs font-semibold">{label}</span>
    </Button>
  );
};

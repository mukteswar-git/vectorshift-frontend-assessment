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
      variant="default"
      className={`min-w-[80px] h-[60px] cursor-grab flex-col gap-1 ${type}`}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{label}</span>
    </Button>
  );
};
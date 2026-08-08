import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';

import { BaseNode } from '../components/nodes/BaseNode';
import { NodeField } from '../components/nodes/NodeField';
import { Textarea } from '../components/ui/textarea';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const textareaRef = useRef(null);

  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => {
    const regex = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

    return [...new Set([...currText.matchAll(regex)].map((match) => match[1]))];
  }, [currText]);

  const handles = [
    ...variables.map((variable) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
    })),

    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  const MIN_HEIGHT = 80;
  const MAX_HEIGHT = 240;

  useLayoutEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    // Reset first so the textarea can shrink when text is deleted.
    textarea.style.height = 'auto';

    const nextHeight = Math.min(
      Math.max(textarea.scrollHeight, MIN_HEIGHT),
      MAX_HEIGHT
    );

    textarea.style.height = `${nextHeight}px`;

    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);

  const handleTextChange = (event) => {
    setCurrText(event.target.value);
  };

  return (
    <BaseNode title="Text" handles={handles} className="w-[320px]">
      <NodeField label="Text" htmlFor={`${id}-text`}>
        <Textarea
          ref={textareaRef}
          id={`${id}-text`}
          value={currText}
          onChange={handleTextChange}
          className="node-textarea resize-none overflow-y-auto"
        />
      </NodeField>
    </BaseNode>
  );
};

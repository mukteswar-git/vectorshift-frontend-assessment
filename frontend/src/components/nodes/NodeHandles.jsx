import React from 'react';
import { Handle } from 'reactflow';

export const NodeHandles = ({ handles = [] }) => {
  return (
    <>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </>
  );
};
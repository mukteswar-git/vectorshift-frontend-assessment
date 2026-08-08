import React from "react";
import { Handle, Position } from "reactflow";

export const NodeHandles = ({ handles = [] }) => {
  const leftHandles = handles.filter(
    (handle) => handle.position === Position.Left
  );

  const getHandleStyle = (handle, index) => {
    if (handle.position !== Position.Left || leftHandles.length <= 1) {
      return handle.style;
    }

    return {
      ...handle.style,
      top: `${((index + 1) / (leftHandles.length + 1)) * 100}%`,
    };
  };

  return (
    <>
      {handles.map((handle) => {
        const leftIndex = leftHandles.findIndex(
          (item) => item.id === handle.id
        );

        return (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={getHandleStyle(handle, leftIndex)}
          />
        );
      })}
    </>
  );
};
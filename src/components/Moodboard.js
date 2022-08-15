import React from "react";
import { useDropZone } from "react-dropzone";

const getClassName = (className, isActive) => {
  if (!isActive) return className;
  return `${className} ${className}-active`;
};

const Moodboard = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } =
    useDropZone({
      onDrop,
      accept,
    });
  
  return (
    <div
      className={getClassName("moodbaord", isDragActive)}
      {...getRootProps()}
    >
      <input className="moodboard-input" {...getInputProps()} />
      <div className="moodboard-center">
        {isDragActive ? (
          <p className="moodboard-content">Drop the images here</p>
        ) : (
          <p className="moodboard-content">
            + Drag and drop the images /click to upload manually.
          </p>
        )}
      </div>
    </div>
  );
};

export default Moodboard;

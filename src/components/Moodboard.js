import React from "react";
import { useDropzone } from "react-dropzone";

const getClassName = (className, isActive) => {
  if (!isActive) return className;
  return `${className} ${className}-active`;
};

const Moodboard = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept,
    });
  console.log(onDrop)
  return (
    <div
      className={getClassName("moodboard", isDragActive)}
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

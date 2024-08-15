import React from "react";

const DropArea = ({ onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="h-20 border-2 border-dashed border-gray-300 rounded-lg mb-4"
    ></div>
  );
};

export default DropArea;

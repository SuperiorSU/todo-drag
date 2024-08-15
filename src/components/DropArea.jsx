import React, { useState } from 'react';

const DropArea = ({ onDrop }) => {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <div
      onDrop={() => {
        onDrop();
        setShowDropArea(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      className={`w-full h-28 border-dashed rounded-md border-[1px] border-gray-400 mb-4 p-2 transition-all duration-75 ease-in-out ${showDropArea ? 'opacity-100' : 'opacity-0'}`}
    >
      Drop Here
    </div>
  );
};

export default DropArea;

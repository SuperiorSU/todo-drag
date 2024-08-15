import React from 'react';

const Popup = ({ title, desc, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{desc}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;

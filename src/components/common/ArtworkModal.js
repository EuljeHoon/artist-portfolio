import React from "react";

const ArtworkModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-md">
      <button
        className="fixed top-4 right-4 text-3xl text-black hover:text-gray-400 focus:outline-none z-50"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-[80vh] rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ArtworkModal; 
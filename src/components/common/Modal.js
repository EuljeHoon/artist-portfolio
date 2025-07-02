"use client";
import React from "react";

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-[9999] flex items-center justify-center bg-transparent backdrop-blur-md"
      style={{ top: '64px' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-2xl min-w-[280px] mx-4 p-6">
        <button
          type="button"
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 focus:outline-none z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          x
        </button>
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        )}
        <div className="overflow-y-auto max-h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
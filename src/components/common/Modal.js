'use client';
import React from 'react';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-2xl shadow-2xl sm:max-w-xl w-full p-8 relative animate-fadeIn max-h-[80vh] overflow-y-auto mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {title && <h3 className="text-2xl font-bold mb-6">{title}</h3>}
        <div className="space-y-4">{children}</div>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97);}
          to { opacity: 1; transform: scale(1);}
        }
      `}</style>
    </div>
  );
};

export default Modal; 
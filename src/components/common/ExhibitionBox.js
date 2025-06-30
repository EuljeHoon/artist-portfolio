'use client';
import React, { useState } from 'react';
import Modal from './Modal';

const ExhibitionBox = ({ title, items, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-4 border rounded shadow-sm bg-white flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-8 h-8 object-contain mr-3 rounded"
            />
          )}
          <span>{title}</span>
        </div>
        <button
          className="ml-2 font-bold text-black hover:underline transition bg-transparent border-none p-0 text-base cursor-pointer"
          style={{ boxShadow: 'none' }}
          onClick={() => setOpen(true)}
        >
          View
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        {(Array.isArray(items) ? items : []).map((item, idx) => (
          <div key={idx} className="mb-6 pb-4 border-b border-neutral-700 last:border-b-0">
            <div className="font-semibold text-base mb-1">{item.title}</div>
            <div className="text-gray-800 text-sm mb-1">{item.venue} <span className="text-gray-500">({item.location})</span></div>
            <div className="text-gray-500 text-xs">{item.date}</div>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default ExhibitionBox;
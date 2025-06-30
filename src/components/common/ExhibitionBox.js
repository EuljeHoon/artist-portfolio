'use client';
import React, { useState } from 'react';
import Modal from './Modal';

const ExhibitionBox = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-4 border rounded shadow-sm bg-white">
        <button
          className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none hover:bg-gray-50 transition"
          onClick={() => setOpen(true)}
        >
          <span>{title}</span>
          <span className="ml-2">View</span>
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        {items.map((item, idx) => (
          <div key={idx} className="mb-6 pb-4 border-b border-neutral-700 last:border-b-0">
            <div className="font-semibold text-base mb-1">{item.title}</div>
            <div className="text-gray-300 text-sm mb-1">{item.venue} <span className="text-gray-500">({item.location})</span></div>
            <div className="text-gray-500 text-xs">{item.date}</div>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default ExhibitionBox;
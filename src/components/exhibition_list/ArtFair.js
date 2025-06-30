'use client';
import React, { useState } from 'react';
import huJinKyungBio from '../../assets/jinkyungBio.json';
import ExhibitionBox from '../common/ExhibitionBox';

const ArtFair = () => {
  const { art_fairs = {} } = huJinKyungBio;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center text-xl font-semibold mb-6 focus:outline-none select-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Art Fairs
        <span
          className={`ml-2 text-lg transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          ▶
        </span>
      </button>
      {open && (
        <div>
          {Object.entries(art_fairs).map(([fairName, fairItems]) => (
            <ExhibitionBox key={fairName} title={fairName} items={fairItems} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtFair; 
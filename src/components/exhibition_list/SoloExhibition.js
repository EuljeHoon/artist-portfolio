'use client';
import React, { useState } from 'react';
import huJinKyungBio from '../../assets/jinkyungBio.json';
import ExhibitionBox from '../common/ExhibitionBox';

const SoloExhibition = () => {
  const { solo_exhibitions = [], invited_solo_exhibitions = [] } = huJinKyungBio;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center text-xl font-semibold mb-6 focus:outline-none select-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Solo Exhibitions
        <span
          className={`ml-2 text-lg transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          ▶
        </span>
      </button>
      {open && (
        <>
          <ExhibitionBox title="Invited Solo Exhibitions" items={invited_solo_exhibitions} />
          <ExhibitionBox title="Solo Exhibitions" items={solo_exhibitions} />
        </>
      )}
    </div>
  );
};

export default SoloExhibition; 
'use client';
import React, { useState } from 'react';
import huJinKyungBio from '../../assets/jinkyungBio.json';
import ExhibitionBox from '../common/ExhibitionBox';

const GroupExhibition = () => {
  const { group_exhibitions = {} } = huJinKyungBio;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center text-xl font-semibold mb-6 focus:outline-none select-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Group Exhibitions
        <span
          className={`ml-2 text-lg transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          ▶
        </span>
      </button>
      {open && (
        <>
          {Object.entries(group_exhibitions).map(([groupName, groupData]) => (
            <ExhibitionBox
              key={groupName}
              title={groupName}
              image={groupData.Image}
              items={
                Array.isArray(groupData)
                  ? groupData
                  : Array.isArray(groupData.Exhibitions)
                    ? groupData.Exhibitions
                    : []
              }
            />
          ))}
        </>
      )}
    </div>
  );
};

export default GroupExhibition; 
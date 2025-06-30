'use client';
import React from 'react';
import SoloExhibition from './exhibition_list/SoloExhibition';
import GroupExhibition from './exhibition_list/GroupExhibition';
import ArtFair from './exhibition_list/ArtFair';

const Exhibition = () => {
  return (
    <section id="exhibitions" className="py-16 bg-white px-4 sm:px-6 text-black">
      <header className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Exhibitions</h2>
      </header>
      <div className="max-w-3xl mx-auto">
        <SoloExhibition />
        <GroupExhibition />
        <ArtFair />
      </div>
    </section>
  );
};

export default Exhibition; 
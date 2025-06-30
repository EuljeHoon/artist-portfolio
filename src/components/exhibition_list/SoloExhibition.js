"use client";
import React, { useState } from "react";
import huJinKyungBio from "../../assets/jinkyungBio.json";
import ExhibitionBox from "../common/ExhibitionBox";

const SoloExhibition = () => {
  const solo_exhibitions = huJinKyungBio.solo_exhibitions || {};
  const invited_solo_exhibitions = huJinKyungBio.invited_solo_exhibitions || {};
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
          className={`ml-2 text-lg transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>
      {open && (
        <>
          <h4 className="text-lg font-medium mb-4 text-gray-700">
            Invited Solo Exhibitions
          </h4>
          {Object.entries(invited_solo_exhibitions).map(
            ([galleryName, galleryData]) => {
              if (Array.isArray(galleryData)) {
                return (
                  <ExhibitionBox
                    key={galleryName}
                    title={galleryName}
                    image={null}
                    items={galleryData}
                  />
                );
              }
              return (
                <ExhibitionBox
                  key={galleryName}
                  title={galleryName}
                  image={galleryData.Image}
                  items={galleryData.Exhibitions || galleryData}
                />
              );
            }
          )}
          <h4 className="text-lg font-medium mb-4 text-gray-700 mt-6">
            Solo Exhibitions
          </h4>
          {Object.entries(solo_exhibitions).map(
            ([galleryName, galleryData]) => {
              if (Array.isArray(galleryData)) {
                return (
                  <ExhibitionBox
                    key={galleryName}
                    title={galleryName}
                    image={null}
                    items={galleryData}
                  />
                );
              }
              return (
                <ExhibitionBox
                  key={galleryName}
                  title={galleryName}
                  image={galleryData.Image}
                  items={galleryData.Exhibitions || galleryData}
                />
              );
            }
          )}
        </>
      )}
    </div>
  );
};

export default SoloExhibition;

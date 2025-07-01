"use client";
import React, { useState } from "react";
import huJinKyungBio from "../../assets/jinkyungBio.json";
import ExhibitionBox from "../common/ExhibitionBox";

const ArtFair = () => {
  const art_fairs = huJinKyungBio.art_fairs || {};
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
          className={`ml-2 text-lg transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>
      {open && (
        <>
          {Object.entries(art_fairs).map(([fairName, fairData]) => {
            if (Array.isArray(fairData)) {
              return (
                <ExhibitionBox
                  key={fairName}
                  title={fairName}
                  image={null}
                  items={fairData}
                />
              );
            }
            return (
              <ExhibitionBox
                key={fairName}
                title={fairName}
                image={fairData.Image}
                items={
                  Array.isArray(fairData)
                    ? fairData
                    : Array.isArray(fairData.Exhibitions)
                    ? fairData.Exhibitions
                    : []
                }
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ArtFair;

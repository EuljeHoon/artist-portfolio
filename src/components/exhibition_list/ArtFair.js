"use client";
import React from "react";
import huJinKyungBio from "../../assets/jinkyungBio.json";
import ExhibitionBox from "../common/ExhibitionBox";

const ArtFair = () => {
  const art_fairs = huJinKyungBio.art_fairs || {};

  return (
    <details className="mb-6 open:mb-10">
      <summary className="cursor-pointer text-xl font-semibold mb-4 select-none">
        Art Fairs
      </summary>

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
    </details>
  );
};

export default ArtFair;

"use client";
import React from "react";
import huJinKyungBio from "../../assets/jinkyungBio.json";
import ExhibitionBox from "../common/ExhibitionBox";

const SoloExhibition = () => {
  const solo_exhibitions = huJinKyungBio.solo_exhibitions || {};
  const invited_solo_exhibitions = huJinKyungBio.invited_solo_exhibitions || {};

  return (
    <details className="mb-6 open:mb-10">
      <summary className="cursor-pointer text-xl font-semibold mb-4 select-none">
        Solo Exhibitions
      </summary>

      {/* Invited Solo Exhibitions */}
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

      {/* Solo Exhibitions */}
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
    </details>
  );
};

export default SoloExhibition;

"use client";
import React from "react";
import SoloExhibition from "./exhibition_list/SoloExhibition";
import GroupExhibition from "./exhibition_list/GroupExhibition";
import ArtFair from "./exhibition_list/ArtFair";

const Exhibition = () => {
  return (
    <section
      id="exhibitions"
      className="pt-16 md:pt-24 pb-16 bg-artistic px-4 sm:px-6 text-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-50/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Exhibitions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of artistic journey through various exhibitions and art
            fairs
          </p>
        </header>
        <div className="max-w-4xl mx-auto space-y-12">
          <SoloExhibition />
          <GroupExhibition />
          <ArtFair />
        </div>
      </div>
    </section>
  );
};

export default Exhibition;

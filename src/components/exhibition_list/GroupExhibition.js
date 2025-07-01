"use client";
import React from "react";
import huJinKyungBio from "../../assets/jinkyungBio.json";
import ExhibitionBox from "../common/ExhibitionBox";

const GroupExhibition = () => {
  const group_exhibitions = huJinKyungBio.group_exhibitions || {};

  return (
    <details className="mb-6 open:mb-10">
      <summary className="cursor-pointer text-xl font-semibold mb-4 select-none">
        Group Exhibitions
      </summary>

      {Object.entries(group_exhibitions).map(([groupName, groupData]) => {
        if (Array.isArray(groupData)) {
          return (
            <ExhibitionBox
              key={groupName}
              title={groupName}
              image={null}
              items={groupData}
            />
          );
        }

        return (
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
        );
      })}
    </details>
  );
};

export default GroupExhibition;

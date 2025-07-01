"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const ExhibitionBox = ({ title, items, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group relative card-artistic overflow-hidden">
        <div className="flex items-center justify-between p-8">
          <div className="flex items-center space-x-6">
            {image && (
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 group-hover:border-gray-300 transition-colors duration-300 flex-shrink-0">
                <img
                  src={image}
                  alt={`${title} logo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 truncate mb-2">
                {title}
              </h3>
              <p className="text-gray-600 font-medium">
                {Array.isArray(items)
                  ? `${items.length} exhibition${items.length !== 1 ? "s" : ""}`
                  : "View details"}
              </p>
            </div>
          </div>
          <button
            className="btn-artistic-secondary ml-6"
            onClick={() => setOpen(true)}
            aria-label={`View ${title} exhibitions`}
          >
            View
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 to-gray-100/0 group-hover:from-gray-50/30 group-hover:to-gray-100/30 transition-all duration-500 pointer-events-none"></div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <div className="space-y-6">
          {(Array.isArray(items) ? items : []).map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-r from-gray-50/50 to-gray-100/50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-lg leading-tight">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-3 text-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-medium">{item.venue}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{item.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 font-semibold">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ExhibitionBox;

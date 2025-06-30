"use client";
import React from "react";
import { motion } from "framer-motion";
import huJinKyungBio from "../assets/jinkyungBio.json";
import BiographyLinks from "../components/biography/BiographyLinks";

const Biography = () => {
  const { name, education, about } = huJinKyungBio;

  return (
    <section
      id="biography"
      className="pt-16 md:pt-24 pb-16 bg-white px-4 sm:px-6 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Artist Photo */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-4 sm:p-10 shadow rounded-lg sm:rounded-2xl h-full flex flex-col items-center">
              <div
                id="biography-photo"
                className="w-40 h-52 sm:w-80 sm:h-[28rem] bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center overflow-hidden"
                style={{ scrollMarginTop: "80px" }}
              >
                <img
                  src="./profile_image.jpeg"
                  alt="Artist Photo"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 text-center">
                {name}
              </h3>
              <BiographyLinks />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Artist Description */}
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                About the Artist
              </h4>
              <p
                className="text-gray-700 leading-relaxed text-sm"
                style={{ whiteSpace: "pre-line" }}
              >
                {about}
              </p>
            </div>

            {/* Education */}
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Education
              </h4>
              {education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {edu.url ? (
                    <img
                      src={edu.url}
                      alt={edu.institution}
                      className="w-10 h-10 object-contain flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                  )}
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800 text-sm">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600 text-sm">{edu.department}</p>
                    <p className="text-gray-500 text-sm">{edu.institution}</p>
                    <p className="text-gray-400 text-xs">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;

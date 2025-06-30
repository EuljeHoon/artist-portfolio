'use client';
import React from 'react';
import { motion } from 'framer-motion';
import huJinKyungBio from '../assets/jinkyungBio.json';
import Image from "next/image";

const Biography = () => {
  const { name, education, about } = huJinKyungBio;

  return (
    <section id="biography" className="py-16 bg-white px-4 sm:px-6 text-black">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Biography
          </motion.h2>
          <motion.p
            className="mt-3 text-base sm:text-lg text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Artist Profile & Background
          </motion.p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Artist Photo */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-10 shadow-sm border border-gray-200 h-full flex flex-col items-center">
              <div className="w-80 h-[28rem] bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile_image.jpeg"
                  alt="Artist Photo"
                  width={320}
                  height={448}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 text-center">{name}</h3>
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
              <h4 className="text-xl font-semibold mb-4 text-gray-800">About the Artist</h4>
              <p className="text-gray-700 leading-relaxed text-sm" style={{ whiteSpace: 'pre-line' }}>
                {about}
              </p>
            </div>

            {/* Education */}
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Education</h4>
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
                    <p className="font-medium text-gray-800 text-sm">{edu.degree}</p>
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

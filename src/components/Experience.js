'use client';
import React from 'react';
import { motion } from 'framer-motion';
import huJinKyungFullExperience from '../assets/jinkyungBio.json';

const Experience = () => {
  const previousPositions = huJinKyungFullExperience.previous_positions;

  return (
    <section id="experience" className="py-16 bg-white px-4 sm:px-6 text-black">
      <header className="mb-12 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="mt-3 text-base sm:text-lg text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Past roles & positions
        </motion.p>
      </header>

      <div className="max-w-4xl mx-auto space-y-6">
        {previousPositions.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-gray-50 p-5 sm:p-6 border border-gray-200 shadow-sm rounded-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {item.url ? (
              <img
                src={item.url}
                alt={item.institution}
                className="w-10 h-10 object-contain me-4"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full me-4" />
            )}
            <div>
              <h3 className="text-lg font-medium">{item.position}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
              {item.period && (
                <p className="text-xs text-gray-400">{item.period}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

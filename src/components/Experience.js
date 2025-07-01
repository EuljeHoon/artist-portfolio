"use client";
import React from "react";
import { motion } from "framer-motion";
import huJinKyungExperience from "../assets/hu_jin_kyung_full_experience.json";

const Experience = () => {
  const { previous_positions } = huJinKyungExperience;

  return (
    <section
      id="experience"
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey and artistic achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {previous_positions &&
            previous_positions.map((exp, index) => (
              <motion.div
                key={index}
                className="card-artistic p-4 sm:p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Experience Image (사진 자체만 보이게) */}
                  <div className="md:col-span-1 flex items-center justify-center">
                    {exp.url ? (
                      <img
                        src={exp.url}
                        alt={exp.institution}
                        className="w-full h-28 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </div>

                  {/* Experience Content */}
                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold gradient-text-static mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {exp.institution}
                        </span>
                        {exp.period && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {exp.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {exp.achievements && (
                        <div>
                          <h4 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="w-6 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mr-2 rounded-full"></span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-1 flex-shrink-0"></span>
                                <span className="text-gray-700 text-xs">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.technologies && (
                        <div>
                          <h4 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="w-6 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mr-2 rounded-full"></span>
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

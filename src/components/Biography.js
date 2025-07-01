"use client";
import React from "react";
import { motion } from "framer-motion";
import huJinKyungBio from "../assets/jinkyungBio.json";
import BiographyLinks from "../components/biography/BiographyLinks";
import useCDNResource from "../utils/useCDNResource";

const Biography = () => {
  const { name, education, about } = huJinKyungBio;
  const { getCDNResource } = useCDNResource();

  return (
    <section
      id="biography"
      className="pt-16 md:pt-24 pb-16 bg-artistic px-4 sm:px-6 text-black relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 80%, rgba(107, 114, 128, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(156, 163, 175, 0.02) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(55, 65, 81, 0.01) 0%, transparent 50%), linear-gradient(135deg, #fafbfc 0%, #ffffff 100%)",
      }}
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
          className="grid md:grid-cols-5 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Artist Photo */}
          <motion.div
            className="md:col-span-3 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-artistic p-8 sm:p-16 h-full flex flex-col items-center">
              <div
                id="biography-photo"
                className="w-48 h-64 sm:w-96 sm:h-[32rem] rounded-3xl mb-6 sm:mb-8 flex items-center justify-center overflow-hidden relative group"
                style={{ scrollMarginTop: "80px" }}
              >
                <img
                  src={"/profile_image.jpeg"}
                  alt={`${name} - Artist Portrait`}
                  className="object-cover w-full h-full"
                  loading="eager"
                />
              </div>
              <motion.h3
                className="text-4xl font-bold gradient-text-static text-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {name}
              </motion.h3>
              <BiographyLinks />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Artist Description */}
            <div className="card-artistic p-8">
              <h4 className="text-2xl font-bold mb-6 gradient-text-static flex items-center">
                <span className="w-12 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mr-4 rounded-full"></span>
                About the Artist
              </h4>
              <p
                className="text-gray-700 leading-relaxed text-base"
                style={{ whiteSpace: "pre-line" }}
              >
                {about}
              </p>
            </div>

            {/* Education */}
            <div className="card-artistic p-8">
              <h4 className="text-2xl font-bold mb-6 gradient-text-static flex items-center">
                <span className="w-12 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mr-4 rounded-full"></span>
                Education
              </h4>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    {edu.url ? (
                      <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center">
                        <img
                          src={edu.url}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="space-y-2 flex-1">
                      <p className="font-bold text-gray-900 text-lg">
                        {edu.degree}
                      </p>
                      <p className="text-gray-700 text-base">
                        {edu.department}
                      </p>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                      <p className="text-gray-600 text-sm font-semibold">
                        {edu.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;

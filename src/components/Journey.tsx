"use client";

import { motion } from "framer-motion";
import { jobs } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 bg-gray-950/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My Journey
        </h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:-translate-x-px" />
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 ? (
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <span className="text-blue-400 text-sm">{job.period}</span>
                      <h3 className="text-xl font-semibold text-white mt-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-500">{job.company}</p>
                      <p className="text-gray-400 mt-2">{job.description}</p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 mt-8 border-4 border-gray-950" />
                <div className="flex-1">
                  {index % 2 !== 0 ? (
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <span className="text-blue-400 text-sm">{job.period}</span>
                      <h3 className="text-xl font-semibold text-white mt-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-500">{job.company}</p>
                      <p className="text-gray-400 mt-2">{job.description}</p>
                    </div>
                  ) : (
                    <div className="md:hidden bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <span className="text-blue-400 text-sm">{job.period}</span>
                      <h3 className="text-xl font-semibold text-white mt-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-500">{job.company}</p>
                      <p className="text-gray-400 mt-2">{job.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

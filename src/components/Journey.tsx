"use client";

import { motion } from "framer-motion";
import { jobs } from "@/data/journey";

/**
 * Renders the Journey section with a vertical timeline of jobs.
 * Uses Framer Motion for scroll-triggered animations.
 *
 * @returns The Journey section JSX element
 */
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
          <div className="absolute left-[6px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-transparent" />
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-14"
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-gray-950 shadow-lg shadow-blue-500/30" />
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-600/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.title}
                      </h3>
                      <p className="text-blue-500 grid md:flex items-center gap-2">
                        {job.company}
                        <span className="text-gray-500">{job.country}</span>
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm whitespace-nowrap mt-2 md:mt-0 md:ml-4">
                      {job.period}
                    </span>
                  </div>
                  {job.description.map((desc, i) => (
                    <p key={i} className="text-gray-400 mt-2">{desc}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

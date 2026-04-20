"use client";

import { motion } from "framer-motion";
import { jobs } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My Journey
        </h2>
        <div className="relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-3 w-6 h-6">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500/50" />
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse" />
                </div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-blue-400 flex items-center gap-2 mt-1">
                        {job.company}
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 text-sm">{job.country}</span>
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 font-medium px-3 py-1 bg-slate-800/50 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {job.description.map((desc, i) => (
                      <p key={i} className="text-slate-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
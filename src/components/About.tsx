"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[80px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
            <div className="absolute inset-0 rounded-full border border-blue-500/30" />
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              src="/profile.png"
              alt="Kevin Fallas"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-800"
            />
          </div>
          <div className="text-slate-300 space-y-5">
            <p className="text-lg leading-relaxed">
              Hi! I'm a Software Engineer with 10+ years of experience building
              and scaling production systems for U.S. clients, working in
              remote, cross-functional teams.
            </p>
            <p className="text-lg leading-relaxed">
              I've worked across the full stack, with experience building 
              user-facing applications as well as designing APIs, data models, 
              and cloud-based solutions on AWS. I enjoy owning features 
              end-to-end, from initial idea to production, with a focus on 
              reliability, performance, and real-world impact.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new 
              technologies, contributing to open source, or sharing knowledge 
              with the community.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-400 font-medium flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Currently based in Costa Rica, open to remote / relocation opportunities worldwide.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
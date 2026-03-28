"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full bg-gray-800 border-4 border-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-6xl text-gray-600">👤</span>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>
              Hi! I&apos;m a passionate developer with experience building web applications
              that make a difference. I enjoy solving complex problems and creating
              intuitive user experiences.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source, or sharing knowledge with the community.
            </p>
            <p className="text-blue-400 font-medium">
              Currently based in San Francisco, open to remote opportunities worldwide.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

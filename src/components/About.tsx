"use client";

import { motion } from "framer-motion";

/**
 * Renders the About Me section with a profile placeholder and bio text.
 * Uses Framer Motion for scroll-triggered animations.
 *
 * @returns The About section JSX element
 */
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
          <img
            src="/profile.png"
            alt="Kevin Fallas"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 flex-shrink-0"
          />
          <div className="text-gray-300 space-y-4">
            <p>
              Hi! I’m a Software Engineer with 10+ years of experience building
              and scaling production systems for U.S. clients, working in
              remote, cross-functional teams.
            </p>
            <p>
              I’ve worked across the stack, with
              experience building user-facing applications as well as designing
              APIs, data models, and cloud-based solutions on AWS. I enjoy
              owning features end-to-end, from initial idea to production, with
              a focus on reliability, performance, and real-world impact.
              Recently, I’ve been exploring AI-assisted development workflows to
              build faster and more effectively, while continuing to grow as an
              engineer and adapt to how the industry is evolving.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open source, or sharing knowledge
              with the community.
            </p>
            <p className="text-blue-400 font-medium">
              Currently based in Costa Rica, open to remote / relocation opportunities
              worldwide.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

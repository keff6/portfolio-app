"use client";

import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-blue-300">Available for opportunities</span>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Kevin Fallas
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
          Software Engineer
        </p>
        <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          Building scalable software across the stack, focused on delivering reliable solutions in high-impact, real-world environments.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href={`mailto:${SITE.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <Mail size={20} />
            Email Me
          </motion.a>
          <motion.a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg transition-all duration-300 hover:bg-slate-700 hover:border-slate-600"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </motion.a>
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg transition-all duration-300 hover:bg-slate-700 hover:border-slate-600"
          >
            <GithubIcon size={20} />
            GitHub
          </motion.a>
          <motion.a
            href="/Kevin-Fallas_resume.pdf"
            download="Kevin-Fallas_resume.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg transition-all duration-300 hover:border-slate-500 hover:text-white"
          >
            <FileDown size={20} />
            Resume
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 text-slate-500"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
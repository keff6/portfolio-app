"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/icons/GithubIcon";
import type { Project } from "@/lib/types";
import { STAGGER_STEP } from "@/lib/motion";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>
        <RevealGroup staggerChildren={STAGGER_STEP.category} className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <RevealItem key={project.id} whileHover={{ y: -4 }} className="group relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
                  {project.thumbnail && project.thumbnailWidth && project.thumbnailHeight && (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View larger preview of ${project.title}`}
                      className="block w-full overflow-hidden rounded-lg mb-4 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={project.thumbnailWidth}
                        height={project.thumbnailHeight}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {project.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-slate-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-blue-300 rounded-full border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white hover:scale-105 active:scale-95 transition-all"
                      >
                        <GithubIcon size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white hover:scale-105 active:scale-95 transition-all"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </section>

      <AnimatePresence>
        {selectedProject?.thumbnail && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <button
                className="absolute -top-10 right-0 p-2 text-slate-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
              >
                <X size={24} />
              </button>
              <Image
                src={selectedProject.thumbnail}
                alt={`${selectedProject.title} preview`}
                width={selectedProject.thumbnailWidth ?? 1920}
                height={selectedProject.thumbnailHeight ?? 1080}
                className="max-w-full max-h-[85vh] rounded-lg object-contain"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
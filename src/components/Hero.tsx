import { Mail, FileDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="min-h-svh flex items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center max-w-3xl relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-blue-300">Available for opportunities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Kevin Fallas
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
          Software Engineer
        </p>
        <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          Building reliable, scalable software across the stack, leveraging AI to improve development workflows and solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`mailto:${SITE.email}`}
            className="group flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg transition-all duration-300 hover:bg-slate-700 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg transition-all duration-300 hover:bg-slate-700 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            <GithubIcon size={20} />
            GitHub
          </a>
          <a
            href="/KevinFallas-resume.pdf"
            download="KevinFallas-resume.pdf"
            className="group flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg transition-all duration-300 hover:border-slate-500 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileDown size={20} />
            Resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-6 text-slate-500 animate-bounce">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
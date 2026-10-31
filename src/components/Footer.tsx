import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-800/50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Let&apos;s Connect</h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-10">
          <a
            href={`mailto:${SITE.email}`}
            className="group p-4 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/30 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} className="text-slate-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/30 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/30 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>
        <div className="pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {SITE.name}. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
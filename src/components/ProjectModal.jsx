import React from 'react';
import { X, ExternalLink, Calendar, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#0d0d12] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero banner of the project */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-purple-900/40 via-pink-900/20 to-black">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30 mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <div>
              <span className="text-white/40 block mb-1">Client</span>
              <span className="font-semibold text-white/90">{project.client || 'Confidential'}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">Timeline</span>
              <span className="font-semibold text-white/90">{project.year || '2025 - 2026'}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">Role</span>
              <span className="font-semibold text-white/90">{project.role || 'Design & Engineering'}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">Deliverables</span>
              <span className="font-semibold text-white/90">{project.deliverables || 'Web & Brand'}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables / Highlights */}
          {project.highlights && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Impact &amp; Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70">
                #{tag}
              </span>
            ))}
          </div>

          {/* Action button */}
          <div className="pt-4 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-pink-100 transition-colors"
            >
              Back to Overview
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

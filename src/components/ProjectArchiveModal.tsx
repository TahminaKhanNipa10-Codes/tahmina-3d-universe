import { useState } from 'react';
import { X, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS_DATA, ProjectData } from '../constants/projects';
import { soundEngine } from '../utils/sound';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'Backend' | 'AI' | 'Full Stack';
  image: string;
  link: string;
}

interface ProjectArchiveModalProps {
  onClose: () => void;
  onSelectProject?: (title: string) => void;
}

// Highly optimized inline sparkline drawing for latency performance
function Sparkline({ points, color, gradientId }: { points: { name: string; value: number }[]; color: string; gradientId: string }) {
  if (!points || points.length === 0) return null;
  
  const width = 280;
  const height = 30;
  const values = points.map(p => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p.value - min) / range) * (height - 6) - 3;
    return { x, y };
  });
  
  const linePath = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;
  
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="overflow-visible select-none pointer-events-none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.4} />
          <stop offset="100%" stopColor={color} stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectArchiveModal({ onClose, onSelectProject }: ProjectArchiveModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Backend' | 'AI' | 'Full Stack'>('All');

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-center bg-black/85 backdrop-blur-md z-50 p-4 md:p-8 font-sans"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 26, delay: 0.05 }}
        className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl w-full max-w-6xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_80px_rgba(0,255,204,0.15)] flex flex-col h-[90vh]"
      >
        {/* Top styling matrix line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent animate-pulse"></div>

        {/* Modal headers - styled down to pixel-perfect spec */}
        <div className="flex justify-between items-start mb-6 pl-2">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-[#00ffcc] uppercase block mb-1">
              ❯_ TAHMINA KHAN // GLOBAL ARCHIVE DIRECTORY
            </span>
            <h2 className="text-xl md:text-3xl font-extrabold font-heading text-white tracking-wide uppercase">
              PROJECT CORE DATABASE
            </h2>
            <p className="text-[11px] md:text-xs text-slate-400 mt-1 font-sans">
              Filter by category of modern engineering nodes. Click VIEW DETAILS to land or explore core repository.
            </p>
          </div>
          <button
            onClick={() => {
              soundEngine.playMechanicalClick();
              onClose();
            }}
            className="bg-slate-950 hover:bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-white w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer shrink-0 mt-1"
            id="close-archive-modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Category Filters bar */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-cyan-500/10 pb-4 pl-2">
          {(['All', 'Backend', 'AI', 'Full Stack'] as const).map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                soundEngine.playTaskTick();
              }}
              className={`px-4 py-1.5 rounded-lg border font-mono text-[9px] tracking-widest uppercase transition-all duration-300 cursor-pointer active:scale-95 ${
                selectedCategory === category
                  ? 'bg-[#00ffcc] border-[#00ffcc] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,204,0.3)]'
                  : 'bg-slate-950/80 border-slate-850 text-slate-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              // Custom indices matches 01, 02 padding style
              const paddedIdx = String(index + 1).padStart(2, '0');
              
              return (
                <div 
                  key={project.id}
                  className="bg-slate-950/75 border border-slate-900 hover:border-cyan-500/35 hover:bg-slate-900/10 transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-lg relative group/card"
                  style={{ borderLeft: `3px solid ${project.color}` }}
                >
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top metadata indexing area */}
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold">
                          {project.category} // {paddedIdx}
                        </span>
                        <span className="border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 text-[7px] px-1.5 py-0.5 rounded tracking-widest font-mono uppercase font-bold">
                          ACTIVE
                        </span>
                      </div>

                      {/* Main Titles */}
                      <h3 className="text-md font-bold font-heading text-white transition-colors duration-200 group-hover/card:text-[#00ffcc]">
                        {project.name}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5 mb-3.5">
                        {project.tech}
                      </div>

                      {/* Stack capsule pills */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.techStack.map((techItem, idx) => (
                          <span 
                            key={idx} 
                            className="text-[8px] font-mono tracking-wide px-2 py-0.5 rounded bg-slate-900 border border-slate-850 text-slate-300 uppercase"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>

                      {/* Body Description */}
                      <p className="text-[11px] text-slate-400 leading-relaxed text-justify mb-4">
                        {project.description}
                      </p>

                      {/* VIEW DETAILS direct click-through log link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00ffcc] hover:text-[#00ffcc]/80 text-[10px] font-mono font-bold tracking-wider hover:underline flex items-center gap-1 cursor-pointer transition-all mb-4 self-start"
                      >
                        VIEW DETAILS →
                      </a>
                    </div>

                    <div>
                      {/* Real-time styled Telemetry Micro-Chart Area */}
                      <div className="bg-slate-950/90 border border-slate-900/60 p-2.5 rounded-lg mb-4 mt-2">
                        <div className="flex justify-between items-center text-[7.5px] font-mono text-[#00ffcc] tracking-wider uppercase mb-1.5">
                          <span>{project.metrics.label}</span>
                          <span className="text-cyan-300 font-bold">{project.metrics.metricVal}</span>
                        </div>
                        <div className="h-[30px] flex items-end">
                          <Sparkline points={project.metrics.points} color={project.color} gradientId={`spark-grad-${project.id}`} />
                        </div>
                      </div>

                      {/* Action trigger footer */}
                      <div className="border-t border-slate-900 pt-3 mt-auto flex gap-3 justify-between items-center">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-850 border border-slate-850 hover:border-cyan-500/20 text-slate-300 hover:text-white font-mono text-[8px] font-bold tracking-wider transition-all"
                        >
                          <Github className="h-3 w-3" />
                          REPO
                        </a>

                        <button
                          onClick={() => {
                            soundEngine.playThrusterRumble();
                            if (onSelectProject) {
                              onSelectProject(project.name);
                            }
                            onClose();
                          }}
                          className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 rounded bg-[#00ffcc] hover:bg-[#00ffcc]/80 text-slate-950 font-mono text-[8px] font-bold tracking-wider transition-all cursor-pointer shadow-[0_0_10px_rgba(0,255,204,0.15)] active:scale-95"
                        >
                          <span>➔ ALIGN VIEW</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


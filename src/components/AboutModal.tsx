import { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Linkedin, 
  Github, 
  Activity, 
  Terminal, 
  Compass, 
  Volume2, 
  VolumeX,
  FileText,
  User,
  Layout,
  Layers,
  Cpu,
  Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundEngine } from '../utils/sound';
// @ts-ignore
import profilePhoto from '../../assets/TahminaNipa.jpg';

interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
  const [activeTab, setActiveTab] = useState<'ABOUT ME' | 'MISSION LOGS' | 'SYSTEM STATS'>('ABOUT ME');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [scrolledToLogs, setScrolledToLogs] = useState(false);
  const [decryptedCount, setDecryptedCount] = useState(0);

  const encryptedLogs = [
    { tag: "SYS-LOG #A-938-1", title: "RELATIONAL_SCHEMA_VERIFIED", data: "TABLES: 16 // NORMALIZED: 3NF" },
    { tag: "SYS-LOG #B-938-2", title: "SCHOLARSHIP_ENGAGE_VECTORS", data: "BATCH: ROUND 67 // COMP REQ: OK" },
    { tag: "SYS-LOG #C-938-3", title: "TRANS_QUERY_LATENCY_TEST", data: "0.2ms EXECUTION // STABLE THREADS" },
    { tag: "SYS-LOG #D-938-4", title: "CORE_BIOMETRICS_MATCH", data: "TAHMINA KHAN NIPA // ACCREDITED DEV" },
    { tag: "SYS-LOG #E-938-5", title: "COGNITIVE_AI_INTEGRATION", data: "ANTIGRAVITY COMET ENGINE ACTIVATED" }
  ];

  useEffect(() => {
    if (isAboutHovered) {
      const interval = setInterval(() => {
        setDecryptedCount((prev) => {
          if (prev < encryptedLogs.length) {
            soundEngine.playTaskTick();
            return prev + 1;
          }
          return prev;
        });
      }, 350);
      return () => clearInterval(interval);
    }
  }, [isAboutHovered]);
  
  // Audio control proxy within modal
  const [isMuted, setIsMuted] = useState(soundEngine.getMuteState());

  const handleToggleMute = () => {
    const nextMute = soundEngine.toggleMute();
    setIsMuted(nextMute);
  };

  // Vertices for the exact star-web radar versatility graph shown in the screenshot
  // Center is [110, 110]. Axis length: 70px.
  // Axes directions (clockwise starting from index 0 at top):
  // 0: top [0° -> (110, 40)] - UI Design
  // 1: top-right [60° -> (170.6, 75)] - 3D Modeling
  // 2: bottom-right [120° -> (170.6, 145)] - Frontend Dev
  // 3: bottom [180° -> (110, 180)] - Frontend Dev
  // 4: bottom-left [240° -> (49.4, 145)] - 3D Modeling
  // 5: top-left [300° -> (49.4, 75)] - 3D Modeling
  const radarPoints = [
    { label: 'UI Design', val: 82, x: 110, y: 35, textX: 110, textY: 20 },
    { label: '3D Modeling', val: 86, x: 172, y: 71, textX: 215, textY: 65 },
    { label: 'Frontend Dev', val: 92, x: 172, y: 149, textX: 215, textY: 155 },
    { label: 'Frontend Dev', val: 88, x: 110, y: 185, textX: 110, textY: 200 },
    { label: '3D Modeling', val: 78, x: 48, y: 149, textX: 10, textY: 155 },
    { label: '3D Modeling', val: 80, x: 48, y: 71, textX: 10, textY: 65 },
  ];

  // Polygon coordinates mapped precisely out of center (110, 110) with maximum axis value of 100%
  // Formula: target_coord = center_coord + (offset * (val / 100))
  // offsets:
  // pt 0: dx = 0, dy = -70 -> (110, 110 - 70*0.82) = (110, 52.6)
  // pt 1: dx = 60.6, dy = -35 -> (110 + 60.6*0.86, 110 - 35*0.86) = (162.1, 79.9)
  // pt 2: dx = 60.6, dy = 35 -> (110 + 60.6*0.92, 110 + 35*0.92) = (165.7, 142.2)
  // pt 3: dx = 0, dy = 70 -> (110, 110 + 70*0.88) = (110, 171.6)
  // pt 4: dx = -60.6, dy = 35 -> (110 - 60.6*0.78, 110 + 35*0.78) = (62.7, 137.3)
  // pt 5: dx = -60.6, dy = -35 -> (110 - 60.6*0.80, 110 - 35*0.80) = (61.5, 82.0)
  const polygonPoints = "110,52.6 162.1,79.9 165.7,142.2 110,171.6 62.7,137.3 61.5,82.02";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      {/* 3D DEEP-SPACE SPACE BACKGROUND WITH GLOWING ACCENT ORBITAL RINGS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#030209]">
        {/* Stellar Cosmic Dust & Nebulae Backplate */}
        <div className="absolute inset-0 bg-radial-gradient from-purple-950/20 via-transparent to-slate-950 opacity-90" />
        
        {/* Beautiful Purple-Blue Orbital Rings from screenshot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] border-[5px] border-double border-purple-500/20 rounded-full shadow-[0_0_40px_rgba(147,51,234,0.15)] pointer-events-none animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border-[1.5px] border-dashed border-cyan-500/15 rounded-full pointer-events-none animate-[spin_80s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] border border-cyan-500/10 rounded-full shadow-[0_0_50px_rgba(34,211,238,0.08)] pointer-events-none" />

        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      {/* OUTER STRUCTURE SHELL FOR ABSOLUTE SCREENSHOT-PERFECT PRESENTATION */}
      <div className="w-full max-w-4xl relative flex flex-col items-center">
        
        {/* Floating Top Header Panel Rows */}
        <div className="w-full flex items-center justify-between px-2 mb-4 relative z-25 shrink-0 select-none">
          {/* Top-Left P3 Indicator */}
          <div className="bg-slate-950/80 border border-cyan-500/35 rounded-lg px-4 py-2 font-mono text-[11px] font-bold text-cyan-400/90 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            P3
          </div>

          {/* Centered Title Badge: TACTICAL ORBIT DASHBOARD */}
          <div className="bg-slate-950/90 border border-cyan-500/30 rounded-xl px-12 py-2.5 font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#c0efff] shadow-[0_0_20px_rgba(0,255,204,0.15)] hover:border-cyan-400/55 transition-colors">
            TACTICAL ORBIT DASHBOARD
          </div>

          {/* Close button with subtle sound click */}
          <button
            onClick={() => {
              soundEngine.playMechanicalClick();
              onClose();
            }}
            className="w-10 h-10 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-[#00ffcc] hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] transition-all flex items-center justify-center cursor-pointer active:scale-95"
            id="close-dashboard-button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* LARGE TRANSLUCENT FROSTED GLASS HOLOGRAM PANEL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="w-full bg-[#0a0a16]/80 backdrop-blur-2xl border border-cyan-500/35 rounded-2xl p-4 sm:p-6 shadow-[0_0_100px_rgba(0,255,204,0.22)] flex flex-col relative overflow-hidden text-slate-200"
        >
          {/* Top scanning layout edge glow line */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent"></div>

          {/* 1. SECTION COMMANDER HEADER ROW */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-4 select-none">
            <h2 className="text-sm sm:text-base font-bold font-mono tracking-widest text-cyan-100 flex items-center gap-2">
              COMMAND MODULE: SUBJECT PROFILE 
            </h2>
            
            {/* Visual Signal Telemetry Bars */}
            <div className="flex items-end gap-[2px] h-3.5 pr-2" title="TACTICAL SIGNAL LATENCY: NOMINAL">
              <div className="w-[3px] h-[30%] bg-cyan-400/30 rounded-sm"></div>
              <div className="w-[3px] h-[50%] bg-cyan-400/50 rounded-sm animate-pulse"></div>
              <div className="w-[3px] h-[75%] bg-cyan-400 rounded-sm"></div>
              <div className="w-[3px] h-[95%] bg-cyan-400 rounded-sm animate-pulse-gentle"></div>
            </div>
          </div>

          {/* 2. TAB COMPONENT CONTROLLER */}
          <div className="grid grid-cols-3 gap-1 bg-slate-950/60 p-1 border border-cyan-500/10 rounded-xl mb-4 shrink-0 select-none">
            {[
              { id: 'ABOUT ME', label: 'ABOUT ME' },
              { id: 'MISSION LOGS', label: 'MISSION LOGS' },
              { id: 'SYSTEM STATS', label: 'SYSTEM STATS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundEngine.playMechanicalClick();
                  setActiveTab(tab.id as any);
                }}
                className={`py-2 px-1 font-mono text-[9px] sm:text-[11px] tracking-wider uppercase rounded-lg transition-all duration-300 cursor-pointer text-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-950/45 to-[#00ffcc]/15 border-b-2 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_20px_rgba(0,255,204,0.18)]'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3. MULTI-COLUMN INTERACTIVE CONTENT (screenshot replica) */}
          <div className="grid grid-cols-1 md:grid-cols-[310px_1fr] gap-6 overflow-y-auto pr-1 custom-scrollbar min-h-[380px]">
            
            {/* LEFT PROFILE SIDEBAR */}
            <div className="flex flex-col gap-4">
              
              {/* FACE-SCAN PORTRAIT WITH OVERLAYS */}
              <div className="relative w-full aspect-square max-w-[270px] self-center md:w-[270px] md:h-[270px] bg-slate-950 border-2 border-cyan-500/25 p-1 rounded-xl overflow-hidden group shadow-[0_0_20px_rgba(0,255,204,0.12)]">
                
                {/* HUD Corners */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

                {/* Vertical Scanner Ray */}
                <div className="absolute top-0 left-0 w-full h-[2.5px] bg-cyan-400 opacity-90 shadow-[0_0_10px_#00ffcc] animate-scanning-beam z-15"></div>

                {/* Translucent Matrix Scanning Grid Backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.12)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10 opacity-30" />

                {/* Inner Compass Radar Circles */}
                <div className="absolute inset-0 flex items-center justify-center p-6 z-10 opacity-20 pointer-events-none">
                  <div className="w-full h-full rounded-full border border-[#00ffcc] animate-[spin_40s_linear_infinite]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-14 z-10 opacity-35 pointer-events-none">
                  <div className="w-full h-full rounded-full border border-dashed border-[#00ffcc]" />
                </div>

                {/* Portrait Element */}
                <div className="w-full h-full rounded-lg overflow-hidden bg-slate-900">
                  <img 
                    src={profilePhoto} 
                    alt="Tahmina Khan Nipa Portrait Scan" 
                    className="w-full h-full object-cover scale-[1.75]"
                    style={{ objectPosition: 'center 10%' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80';
                    }}
                    referrerPolicy="no-referrer" 
                  />
                </div>

                {/* Portrait Label frame directly on portrait base */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-cyan-500/40 px-3 py-1 rounded text-[7px] sm:text-[8px] font-mono font-bold tracking-widest text-[#00ffcc] uppercase z-20 shadow-[0_4px_10px_rgba(0,0,0,0.6)] select-none">
                  TAHMINA KHAN NIPA | ID: TKN-938
                </div>
              </div>

              {/* SYSTEM MONITOR GRID WITH MINI GRAPHS (Matches grid mockup visual) */}
              <div className="bg-slate-950/60 border border-cyan-500/15 rounded-xl p-3.5 select-none text-slate-400">
                <p className="font-mono text-[9px] tracking-widest text-cyan-300 uppercase mb-3 text-center md:text-left">
                  System Monitor
                </p>

                {/* 2 Rows x 4 Column tech tiles from screenshot */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    // Row 1
                    { name: 'React', val: 90, desc: 'React Engine' },
                    { name: 'Three', val: 82, desc: 'Three.js / 3D Canvas' },
                    { name: 'TypeScript', val: 88, desc: 'TS Script Strict Compiler' },
                    { name: 'Tailwind', val: 92, desc: 'Tailwind CSS Grid Styling' },
                    // Row 2
                    { name: 'C# MVC', val: 94, desc: '.NET Core Backend Logic' },
                    { name: 'EF Core', val: 92, desc: 'Database Mapping ORM' },
                    { name: 'T-SQL', val: 95, desc: 'SQL Server DBA Architecture' },
                    { name: 'Angular', val: 78, desc: 'Angular Enterprise Framework' }
                  ].map((tech, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => setHoveredTech(tech.desc)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="bg-[#0e0e22] border border-cyan-500/10 rounded-lg p-1.5 flex flex-col justify-between hover:border-[#00ffcc]/35 hover:bg-cyan-950/10 transition-all duration-200 cursor-pointer"
                    >
                      {/* Stylized SVG placeholder representation matches the ss */}
                      <div className="w-full aspect-square flex items-center justify-center bg-slate-950/80 rounded mb-1.5 p-0.5 text-[#00ffcc]">
                        {idx === 0 || idx === 4 ? (
                          // Atom React Icon
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                            <circle cx="12" cy="12" r="2" />
                            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
                            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
                            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
                          </svg>
                        ) : idx === 1 || idx === 5 ? (
                          // Prism Threejs Icon
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                            <line x1="12" y1="2" x2="12" y2="22" />
                            <line x1="12" y1="22" x2="22" y2="15.5" />
                            <line x1="12" y1="22" x2="2" y2="15.5" />
                          </svg>
                        ) : idx === 2 || idx === 6 ? (
                          // TS Letters
                          <span className="font-mono text-[8px] font-bold text-cyan-400">TS</span>
                        ) : (
                          // Wave / Double S Icon
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                            <path d="M12 3c-1.2 0-2.4.6-3.2 1.5C8 5.4 6.8 6 5.6 6 4.4 6 3.2 5.4 2.4 4.5c-.8.8-1.2 2-1.2 3.2 0 1.2.6 2.4 1.5 3.2 1 1 2.2 1.6 3.4 1.6 1.2 0 2.4-.6 3.2-1.5.8-.9 2-1.5 3.2-1.5 1.2 0 2.4.6 3.2 1.5.8.9 2 1.5 3.2 1.5 1.2 0 2.4-.6 3.2-1.5.8-.9 2-1.5 3.2-1.5" />
                          </svg>
                        )}
                      </div>

                      {/* Bar Indicators */}
                      <div className="flex gap-[1px] h-1 w-full mt-1">
                        <div className="flex-1 bg-cyan-400/20 h-full relative overflow-hidden">
                          <div className={`absolute bottom-0 left-0 w-full h-full bg-[#00ffcc] animate-[tech-bar_1s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${idx * 0.15}s` }}></div>
                        </div>
                        <div className="flex-1 bg-cyan-400/20 h-full relative overflow-hidden">
                          <div className={`absolute bottom-0 left-0 w-full h-full bg-[#00ffcc] animate-[tech-bar_1.2s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${idx * 0.25}s` }}></div>
                        </div>
                        <div className="flex-1 bg-cyan-400/20 h-full relative overflow-hidden">
                          <div className={`absolute bottom-0 left-0 w-full h-full bg-[#00ffcc] animate-[tech-bar_0.8s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${idx * 0.05}s` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-mono text-[7px] text-center tracking-widest text-[#00ffcc] font-bold mt-3 uppercase">
                  CORE SYSTEMS INTEGRITY
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: ACTIVE TAB LOGIC VIEWPORTS */}
            <div className="flex flex-col gap-4">
              
              {/* INTERACTIVE TEXT WRAPPER */}
              <div className="bg-slate-950/45 border border-cyan-500/10 rounded-xl p-4 min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  
                  {/* TAB 1: ABOUT ME BIO */}
                  {activeTab === 'ABOUT ME' && (
                    <motion.div
                      key="aboutme-tab"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      onMouseEnter={() => {
                        setIsAboutHovered(true);
                        soundEngine.playMechanicalClick();
                      }}
                      onMouseLeave={() => {
                        setIsAboutHovered(false);
                      }}
                      onScroll={(e) => {
                        const target = e.currentTarget;
                        if (target.scrollTop > 15) {
                          setScrolledToLogs(true);
                        }
                      }}
                      className="max-h-[170px] overflow-y-auto custom-scrollbar space-y-3 font-sans text-xs sm:text-[13px] text-slate-300 leading-relaxed text-justify relative pr-1"
                    >
                      <p>
                        <strong className="text-[#00ffcc] font-mono">[BIO]:</strong> Full Stack Explorer specializing in React & Three.js. Seeking new digital frontiers through interactive 3D experiences. Current focus: Real-time data visualization within tactical environments.
                      </p>
                      <p>
                        I am dedicated to crafting fast, highly calibrated backend services built upon <strong className="text-cyan-400 font-mono">C#, ASP.NET Core 8, and enterprise databases</strong>, perfectly harmonized with sleek 3D canvas visuals in Vite. My development architecture remains stable, responsive, and performance-optimized.
                      </p>

                      {/* HOVER & SCROLL HINT BADGE */}
                      {!scrolledToLogs && (
                        <div className="text-center font-mono text-[8px] tracking-widest text-[#00ffcc] animate-pulse bg-cyan-950/45 border border-cyan-500/20 py-2 rounded-lg select-none sticky bottom-0 left-0 right-0 z-10 shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
                          {isAboutHovered 
                            ? "▲ SCROLL DOWN TO EXTRACT CLASSIFIED TELEMETRY KEYS ▲" 
                            : "▲ HOVER & SCROLL FOR SECRET ENCRYPTED SYSTEMS ▲"
                          }
                        </div>
                      )}

                      {/* CLASSIFIED REGISTRY FILE SECTOR */}
                      <div className="border-t border-[#00ffcc]/30 pt-3.5 mt-4 space-y-2.5 font-mono text-[10px]">
                        <div className="flex items-center gap-1.5 text-[#00ffcc] font-bold text-[9px] tracking-widest uppercase mb-1">
                          <Activity className="h-3 w-3 animate-pulse" />
                          <span>DECRYPTED MEMORY SECTOR SECURITY REGISTRIES</span>
                        </div>

                        {encryptedLogs.map((log, idx) => (
                          <div 
                            key={log.tag} 
                            className={`p-2 rounded border transition-all duration-300 transform ${
                              idx < decryptedCount 
                                ? 'bg-[#051a14]/60 border-emerald-500/30 text-emerald-300 scale-100 opacity-100' 
                                : 'bg-[#10101b]/40 border-slate-900 text-slate-500 scale-95 opacity-50 blur-[1px]'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-0.5">
                              <span className="font-bold text-[9px] text-[#00ffcc]">
                                {idx < decryptedCount ? log.title : "● ENCRYPTED SECRET DATA"}
                              </span>
                              <span className="text-[7.5px] bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 px-1 rounded">
                                {log.tag}
                              </span>
                            </div>
                            <p className="text-[8px] font-mono leading-none tracking-wide text-slate-400">
                              {idx < decryptedCount ? log.data : "0x" + Array(32).fill("0").map((_, i) => ((i * 17 + idx * 13) % 16).toString(16)).join("")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: MISSION LOGS */}
                  {activeTab === 'MISSION LOGS' && (
                    <motion.div
                      key="missions-tab"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-2.5 font-mono text-[10.5px] text-justify leading-relaxed"
                    >
                      <div>
                        <span className="text-[#00ffcc] font-bold">[MSN-001] Online BookShop Schema RDBMS:</span>
                        <p className="text-slate-400 text-[10px] pl-3">Architected 16+ highly normalized relational tables, nested stored procedures, triggers, and full lifecycle consistency safeguards.</p>
                      </div>
                      <div>
                        <span className="text-cyan-400 font-bold">[MSN-002] NexusRetailERP Project:</span>
                        <p className="text-slate-400 text-[10px] pl-3">Co-authored inventory tracking and direct branch sales accounting pipelines. Migrations handled safely with Code First rules.</p>
                      </div>
                      <div>
                        <span className="text-[#00ffcc] font-bold">[MSN-003] MinaBookStore MVC Platform:</span>
                        <p className="text-slate-400 text-[10px] pl-3">Designed custom Model validation forms, administrative asset screens, and Entity Framework persistence bindings.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: SYSTEM STATS DETAILS */}
                  {activeTab === 'SYSTEM STATS' && (
                    <motion.div
                      key="stats-tab"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-3 font-mono text-[11px] text-slate-400 leading-relaxed"
                    >
                      <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                        <span>SCHOLARSHIP RATING:</span>
                        <span className="text-[#00ffcc] font-bold">100% EXCELLENCE</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                        <span>SCHOLARSHIP ALUMNI:</span>
                        <span className="text-cyan-400 font-bold">IsDB-BISEW IT ROUND 67</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                        <span>SYSTEM DEPLOYMENT CODES:</span>
                        <span className="text-[#00ffcc] font-bold">VERIFIED PRODUCTION READY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>CONTACT GATEWAYS:</span>
                        <span className="text-cyan-400 text-right">tahminakhannipa10@gmail.com</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* OPERATIONAL METRICS RADAR FRAME (Matches screenshot exactly!) */}
              <div className="bg-[#0d0e25]/60 border border-green-500/40 rounded-xl p-4 shadow-[0_0_20px_rgba(34,197,94,0.06)] relative flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Embedded Centered Label Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 border border-green-500/40 px-3 py-1 rounded text-[8px] font-mono tracking-widest text-[#10b981] uppercase font-bold">
                  OPERATIONAL METRICS
                </div>

                {/* Left Metric statistics block */}
                <div className="w-full md:w-auto space-y-4 font-sans select-none shrink-0 text-center md:text-left mt-2 md:mt-0">
                  <div>
                    <div className="flex items-baseline justify-center md:justify-start gap-2">
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-widest leading-none">ACTIVE MISSIONS:</span>
                      <span className="text-xl font-mono text-cyan-300 font-bold leading-none">12</span>
                    </div>
                    <p className="text-[9px] text-slate-500 font-mono tracking-wide mt-1">Projects Completed</p>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-center md:justify-start gap-2">
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-widest leading-none">LOGGED TIME:</span>
                      <span className="text-xl font-mono text-[#00ffcc] font-bold leading-none">1450h</span>
                    </div>
                    <p className="text-[9px] text-slate-500 font-mono tracking-wide mt-1">Hours Coded estimate</p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-1">SYSTEM VERSATILITY: <span className="text-[#00ffcc] font-bold">85%</span></p>
                    <div className="w-40 bg-slate-900 border border-slate-800 rounded-full h-1.5 overflow-hidden relative mx-auto md:mx-0">
                      <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[85%] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>
                </div>

                {/* Right Radar SVG chart node (matches screenshot colors) */}
                <div className="w-[210px] h-[210px] relative select-none flex items-center justify-center">
                  <svg viewBox="0 0 220 220" className="w-full h-full text-green-500/40">
                    
                    {/* Concentric radar hexagon circles */}
                    <polygon points="110,40 200,80 200,140 110,180 20,140 20,80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.25" />
                    <polygon points="110,61 173.5,89.5 173.5,131.5 110,160 46.5,131.5 46.5,89.5" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    <polygon points="110,82 147,101 147,125 110,140 73,125 73,101" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />

                    {/* Axis crosswebs */}
                    <line x1="110" y1="40" x2="110" y2="180" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    <line x1="20" y1="80" x2="200" y2="140" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    <line x1="20" y1="140" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />

                    {/* Glowing outer polygon data path (glowing green/cyan) */}
                    <polygon 
                      points={polygonPoints} 
                      fill="rgba(0, 255, 204, 0.15)" 
                      stroke="#00ffcc" 
                      strokeWidth="1.5" 
                      className="drop-shadow-[0_0_6px_#00ffcc]"
                    />

                    {/* Vertices indicator glow dots */}
                    {radarPoints.map((pt, index) => (
                      <circle key={index} cx={pt.x} cy={pt.y} r="2.5" fill="#00ffcc" className="animate-pulse" />
                    ))}

                    {/* Vertices Text Labels from screenshot */}
                    {radarPoints.map((pt, index) => (
                      <text 
                        key={index} 
                        x={pt.textX} 
                        y={pt.textY} 
                        fill="#94a3b8" 
                        fontSize="8.5" 
                        fontFamily="monospace"
                        textAnchor="middle"
                        className="tracking-tighter select-none font-semibold"
                      >
                        {pt.label}
                      </text>
                    ))}
                  </svg>
                </div>

              </div>

            </div>

          </div>

          {/* DYNAMIC FOOTER STATUS STRIP */}
          <div className="flex items-center justify-between border-t border-cyan-500/20 pt-4 mt-4 font-mono text-[7px] sm:text-[9px] text-[#4f7d8c] uppercase tracking-widest select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-ping" />
              <span className="text-[#00ffcc] font-bold">TACTICAL PILOT // TAHMINA KHAN NIPA | ID: TKN-938</span>
            </span>
            <span>
              CORE SYSTEMS INTEGRITY: <span className="text-[#00ffcc] font-bold">98.7%</span>
            </span>
          </div>

        </motion.div>
      </div>

    </motion.div>
  );
}

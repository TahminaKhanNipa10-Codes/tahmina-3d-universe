import { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Terminal, 
  Cpu, 
  Database, 
  Activity, 
  Compass, 
  ShieldCheck, 
  Layers, 
  HardDrive, 
  Chrome,
  Flame,
  Binary,
  FileDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundEngine } from '../utils/sound';
// @ts-ignore
import profilePhoto from '../../assets/TahminaNipa.jpg';

interface TacticalDashboardProps {
  onClose: () => void;
  onOpenCVPreview?: () => void;
}

export default function TacticalDashboard({ onClose, onOpenCVPreview }: TacticalDashboardProps) {
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

  // Random telemetry state generator for a immersive sci-fi feel
  const [uptime, setUptime] = useState('1450.00.00');
  const [entropy, setEntropy] = useState('0.03%');

  // Dynamic rapid Biometric Data Stream values
  const [bioO2, setBioO2] = useState<string>('0x62');
  const [bioHR, setBioHR] = useState<string>('0x4A');
  const [bioSuit, setBioSuit] = useState<string>('0x61');
  const [bioDecO2, setBioDecO2] = useState<number>(98);
  const [bioDecHR, setBioDecHR] = useState<number>(74);
  const [bioDecSuit, setBioDecSuit] = useState<number>(97);
  const [noiseHex, setNoiseHex] = useState<string>('0E 5A FE 12');

  useEffect(() => {
    const interval = setInterval(() => {
      // Oxygen: 96 to 100
      const o2Value = Math.floor(Math.random() * 5) + 96;
      // HR: 68 to 85
      const hrValue = Math.floor(Math.random() * 18) + 68;
      // Suit: 94 to 99
      const suitValue = Math.floor(Math.random() * 6) + 94;

      setBioO2("0x" + o2Value.toString(16).toUpperCase());
      setBioHR("0x" + hrValue.toString(16).toUpperCase());
      setBioSuit("0x" + suitValue.toString(16).toUpperCase());

      setBioDecO2(o2Value);
      setBioDecHR(hrValue);
      setBioDecSuit(suitValue);

      // Generate 4 dynamic rapid bytes
      const generatedNoise = Array.from({ length: 4 }, () => 
        Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0')
      ).join(' ');
      setNoiseHex(generatedNoise);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time metric decimal noise
      const seconds = (Date.now() % 1000).toString().padStart(3, '0');
      setUptime(`1450.${Math.floor(Math.random() * 60).toString().padStart(2, '0')}.${seconds}`);
      setEntropy(`${(Math.random() * 0.05 + 0.01).toFixed(3)}%`);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Radar points for [Full Stack, Database, Devops, Cloud Core, Styling Frameworks, UI/UX Animation]
  const radarPoints = [
    { label: 'Full Stack', val: 92, x: 150, y: 55 },
    { label: 'DB Architecture', val: 95, x: 235, y: 100 },
    { label: 'Cloud Systems', val: 78, x: 235, y: 195 },
    { label: 'DevOps / Git', val: 82, x: 150, y: 245 },
    { label: 'Modern UX/UI', val: 88, x: 65, y: 195 },
    { label: 'SPA (React/Ang)', val: 90, x: 65, y: 100 },
  ];

  const radarPolygon = "150,88 221,110 216,185 150,228 92,189 95,105";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 overflow-y-auto"
    >
      {/* DEEP COSMIC SPACE BACKGROUND & GLOWING PURPLE-BLUE ORBITAL RINGS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#03030c]">
        {/* Stellar Background Dust */}
        <div className="absolute inset-0 bg-radial-gradient from-purple-950/20 via-transparent to-slate-950 opacity-80" />
        
        {/* Orbital Ring 1 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-cyan-500/10 rounded-full orbit-ring-glow pointer-events-none animate-[spin_60s_linear_infinite]" />
        
        {/* Orbital Ring 2 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-purple-500/10 rounded-full orbit-ring-glow-purple pointer-events-none animate-[spin_100s_linear_infinite_reverse]" />
        
        {/* Orbital Ring 3 (dashed) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-cyan-500/5 rounded-full pointer-events-none animate-[spin_40s_linear_infinite]" />
        
        {/* Orbital Glow Blobs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-3xl" />
      </div>

      {/* CENTER TRANSLUCENT FROSTED GLASS HOLOGRAPHIC PANELS */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-5xl h-auto max-h-[95vh] md:h-[88vh] bg-slate-950/80 backdrop-blur-xl border border-cyan-500/35 rounded-2xl p-4 sm:p-6 shadow-[0_0_80px_rgba(0,255,204,0.18)] flex flex-col overflow-hidden text-slate-200"
      >
        {/* Neon scan sweep line at top edge */}
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-gentle"></div>

        {/* Tactical Crosshair corner styling */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400/50"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/50"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400/50"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400/50"></div>

        {/* HEADER SECTION */}
        <div className="flex justify-between items-center border-b border-cyan-500/20 pb-3 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-cyan-500/50 flex items-center justify-center bg-cyan-950/30 text-cyan-400 animate-pulse-gentle">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold font-mono tracking-widest text-[#00ffcc] uppercase select-none">
                TACTICAL ORBIT DASHBOARD
              </h1>
              <p className="text-[7.5px] sm:text-[9px] font-mono text-cyan-400/70 tracking-widest leading-none mt-0.5">
                BIO-SPECS RELAY // SYS_LOC: SEC_938 // CORE STATE: SECURE_STABLE
              </p>
            </div>
          </div>
          
          {/* Dual-Action PRINT/EXPORT & Close controls */}
          <div className="flex items-center gap-2.5 z-30">
            <button
              onClick={() => {
                soundEngine.playMechanicalClick();
                if (onOpenCVPreview) onOpenCVPreview();
              }}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/35 hover:border-emerald-400 font-mono text-[9px] sm:text-[10px] font-bold text-[#00ffcc] hover:text-white hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              id="dashboard-print-trigger"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>PRINT/EXPORT</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playMechanicalClick();
                onClose();
              }}
              className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all flex items-center justify-center cursor-pointer active:scale-95"
              id="close-tactical-dashboard"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* MAIN BODY LAYOUT (TWO COLUMNS ON DESKTOP) */}
        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-5 overflow-y-auto pr-1 custom-scrollbar">
          
          {/* LEFT SIDEBAR COLUMN: BIOMETRIC PORTRAIT SCAN & TELEMETRY */}
          <div className="w-full md:w-[320px] flex flex-col gap-4 select-none shrink-0">
            
            {/* PORTRAIT GRAPH WITH RADAR FACE SCAN GRID OVERLAY */}
            <div className="relative w-full aspect-square md:w-[280px] md:h-[280px] self-center rounded-xl bg-slate-950 border-2 border-cyan-500/20 p-1 overflow-hidden group shadow-[0_0_25px_rgba(0,180,216,0.15)]">
              
              {/* Outer Biometric Tracking Brackets */}
              <div className="absolute top-1.5 left-1.5 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-1.5 right-1.5 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-1.5 left-1.5 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-1.5 right-1.5 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>

              {/* Holographic scanning bar moving vertically */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00ffcc] opacity-80 shadow-[0_0_12px_rgba(0,255,204,1)] z-15 animate-scanning-beam"></div>

              {/* High-tech matrix facemap green/cyan line grid overlay */}
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(0,255,204,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.1)_1px,transparent_1px)] bg-[size:16px_16px] z-10 pointers-events-none" />

              {/* Target Circular Scope Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6 z-10 opacity-30 pointer-events-none">
                <div className="w-full h-full rounded-full border border-dashed border-[#00ffcc] animate-[spin_20s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-14 z-10 opacity-45 pointer-events-none">
                <div className="w-full h-full rounded-full border border-[#00ffcc] animate-[spin_10s_linear_infinite_reverse]" />
              </div>

              {/* Crop Portrait */}
              <div className="w-full h-full rounded-lg bg-slate-950 overflow-hidden relative">
                <img 
                  src={profilePhoto} 
                  alt="Tahmina Khan Nipa" 
                  className="w-full h-full object-cover scale-[1.75]"
                  style={{ objectPosition: 'center 10%' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80';
                  }}
                  referrerPolicy="no-referrer" 
                />
              </div>

              {/* Scanning status pill overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-[#00ffcc]/60 px-3 py-1 rounded text-[7px] font-mono tracking-widest text-[#00ffcc] uppercase font-bold z-20 shadow-[0_4px_10px_rgba(0,0,0,0.5)] animate-pulse">
                SYS_SCAN // BIO-SIGNAT_ACTIVE
              </div>
            </div>

            {/* DYNAMIC FLICKERING BIOMETRIC DATA STREAM */}
            <div className="bg-[#030e0c]/80 border border-emerald-500/35 rounded-xl p-3 font-mono text-[9px] relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.12)]">
              {/* Corner tech indicators */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-emerald-400"></div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-emerald-400"></div>
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-emerald-400"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-emerald-400"></div>

              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-1.5 mb-2 select-none">
                <span className="text-[#00ffcc] font-bold tracking-widest uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-ping" />
                  BIOMETRIC_DATA_STREAM
                </span>
                <span className="text-[7.5px] bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 px-1 rounded animate-pulse">
                  RE_LIVE
                </span>
              </div>

              <div className="space-y-1.5 text-slate-300">
                <div className="flex justify-between items-center bg-[#071612] p-1.5 rounded border border-emerald-500/10">
                  <span>O2 SATURATION (O2_LVL):</span>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold">{bioO2}</span>
                    <span className="text-[7px] text-slate-500 ml-1">({bioDecO2}%)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-[#071612] p-1.5 rounded border border-emerald-500/10">
                  <span>HEART FREQUENCY (HR_RT):</span>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold">{bioHR}</span>
                    <span className="text-[7px] text-slate-500 ml-1">({bioDecHR} BPM)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-[#071612] p-1.5 rounded border border-emerald-500/10">
                  <span>SUIT INTEGRITY (SUIT_INT):</span>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold">{bioSuit}</span>
                    <span className="text-[7px] text-slate-500 ml-1">({bioDecSuit}%)</span>
                  </div>
                </div>
              </div>

              {/* Rapid flickering raw hex-coded status noise stream line beneath stats */}
              <div className="mt-2 text-center text-[7px] text-emerald-500/70 border-t border-emerald-500/10 pt-1.5 flex justify-between items-center select-none font-bold">
                <span>RAW_STREAM:</span>
                <span className="text-[#00ffcc] tracking-widest">{noiseHex}</span>
              </div>
            </div>

            {/* TELEMETRY READOUT METRIC LIST */}
            <div className="bg-slate-950/60 border border-cyan-500/10 rounded-xl p-3 font-mono text-[9px] text-slate-400 space-y-2.5">
              <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                <span>SECTOR RANGE:</span>
                <span className="text-cyan-400 font-bold">CHATTOGRAM, BD</span>
              </div>
              <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                <span>SYS UP_TIME:</span>
                <span className="text-cyan-400 font-bold">{uptime}</span>
              </div>
              <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                <span>ORBIT INTEGRITY:</span>
                <span className="text-[#00ffcc] font-bold">98.70% NOMINAL</span>
              </div>
              <div className="flex justify-between items-center border-b border-cyan-500/5 pb-1">
                <span>DYNAMIC ENTROPY:</span>
                <span className="text-purple-400 font-bold">{entropy}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>SCAN MATRIX COORD:</span>
                <span className="text-[#00ffcc] text-right font-bold">[22.3562N // 91.7832E]</span>
              </div>
            </div>

          </div>

          {/* RIGHT VIEW CANVAS COLUMN: TABS CONTROLLER AND DETAIL VIEWPORTS */}
          <div className="flex-1 min-h-0 flex flex-col gap-4">
            
            {/* TABS CONTAINER ABOVE PORTRAIT */}
            <div className="flex gap-1.5 border-b border-slate-900 pb-2.5 shrink-0 overflow-x-auto custom-scrollbar">
              {(['ABOUT ME', 'MISSION LOGS', 'SYSTEM STATS'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    soundEngine.playMechanicalClick();
                    setActiveTab(tab);
                  }}
                  className={`flex-1 min-w-[90px] py-2 px-3 text-center font-mono text-[9px] sm:text-[10px] tracking-wider uppercase border rounded-lg transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-cyan-950/45 border-[#00ffcc] text-[#00ffcc] font-bold shadow-[0_0_15px_rgba(0,255,204,0.12)]'
                      : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB CORNER SUB-VIEW */}
            <div className="flex-1 min-h-0 relative">
              <AnimatePresence mode="wait">
                
                {/* 1. ABOUT ME TAB */}
                {activeTab === 'ABOUT ME' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col justify-between space-y-4"
                  >
                    <div 
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
                      className="bg-slate-950/45 border border-cyan-500/10 rounded-xl p-4 flex-1 overflow-y-auto custom-scrollbar relative"
                    >
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] tracking-widest uppercase mb-3 border-b border-cyan-500/10 pb-1.5">
                        <User className="h-3.5 w-3.5" /> COMMANDER DOSSIER PROFILE
                      </div>
                      
                      <div className="space-y-3 text-xs text-slate-300 leading-relaxed text-justify font-sans">
                        <p>
                          Welcome, Observer. I am <strong className="text-[#00ffcc]">Tahmina Khanam Nipa</strong>, an enterprise-level Full Stack .NET Developer completing the competitive <strong className="text-cyan-400">IsDB-BISEW IT Scholarship Programme (Round 67)</strong>. 
                        </p>
                        <p>
                          My focus lies in constructing robust, highly secure web business logic applications backed by <strong className="text-[#00ffcc]">ASP.NET Core, C#, Entity Framework Core, and SQL Server</strong> databases, fused alongside sleek front-end presentation arrays built in <strong className="text-[#00ffcc]">React, Angular, and Tailwind CSS</strong>.
                        </p>
                        <p>
                          Over 1,000 hours of specialized academy training has calibrated my capacity to design clean transactional models, resolve complex logic requirements, and deploy production-grade software assets independently. 
                        </p>
                      </div>

                      {/* HOVER & SCROLL HINT BADGE */}
                      {!scrolledToLogs && (
                        <div className="text-center font-mono text-[8px] tracking-widest text-[#00ffcc] animate-pulse bg-cyan-950/45 border border-cyan-500/20 py-2 rounded-lg select-none sticky bottom-0 left-0 right-0 z-10 shadow-[0_4px_10px_rgba(0,0,0,0.6)] mt-4">
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
                    </div>

                    <div className="grid grid-cols-2 gap-3 shrink-0">
                      <div className="bg-slate-950/70 border border-cyan-500/10 rounded-xl p-3 text-center">
                        <p className="font-mono text-[7px] text-slate-500 uppercase tracking-widest">TACTICAL ENLISTMENT</p>
                        <p className="text-[#00ffcc] font-mono text-[14px] font-bold mt-1">AVAILABLE</p>
                        <p className="font-mono text-[8px] text-slate-400 mt-0.5">JUNIOR DEVELOPER ROLES</p>
                      </div>
                      <div className="bg-slate-950/70 border border-cyan-500/10 rounded-xl p-3 text-center">
                        <p className="font-mono text-[7px] text-slate-500 uppercase tracking-widest">TRANSACTION SECURE</p>
                        <p className="text-cyan-400 font-mono text-[14px] font-bold mt-1">100% PARALLEL</p>
                        <p className="font-mono text-[8px] text-slate-400 mt-0.5">CLEAN CODE COMPILING</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. MISSION LOGS TAB */}
                {activeTab === 'MISSION LOGS' && (
                  <motion.div
                    key="missions"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col space-y-3"
                  >
                    <div className="bg-slate-950/45 border border-cyan-500/10 rounded-xl p-4 flex-1 overflow-y-auto custom-scrollbar">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] tracking-widest uppercase mb-3 border-b border-cyan-500/10 pb-1.5">
                        <Terminal className="h-4 w-4" /> RECENTLY COMPLETED SYSTEM MISSIONS
                      </div>

                      <div className="space-y-3 text-[11px] font-mono">
                        {[
                          {
                            id: "MSN-001",
                            name: "MinaBookStore Relational System",
                            stack: "ASP.NET MVC 5 + SQL Server",
                            desc: "An enterprise MVC platform built with absolute model separation, role checks, and database isolation."
                          },
                          {
                            id: "MSN-002",
                            name: "Online BookShop Capstone RDBMS",
                            stack: "MS SQL Server + Enterprise Schema",
                            desc: "Designed and engineered an intensive transactional store containing 16+ heavily normalized tables, triggers, and nested query scripts."
                          },
                          {
                            id: "MSN-003",
                            name: "NexusRetailERP Application Model",
                            stack: "ASP.NET MVC + Entity Framework",
                            desc: "Co-authored sales telemetry, branch inventories, and role policies. Code-First migrations applied safely."
                          },
                          {
                            id: "MSN-004",
                            name: "ADO.NET Desktop CRUD Manager",
                            stack: "C# + WinForms + Parameterized SQL",
                            desc: "Engineered desktop systems using secure parameterized syntax block structures."
                          }
                        ].map((m) => (
                          <div 
                            key={m.id} 
                            className="p-2.5 bg-slate-950/80 border border-slate-900 rounded-lg hover:border-cyan-500/25 transition-all text-justify"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[#00ffcc] font-bold text-[9.5px] uppercase flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                {m.name}
                              </span>
                              <span className="text-[7.5px] bg-cyan-950/75 border border-cyan-500/30 text-cyan-400 px-1.5 py-0.5 rounded uppercase">
                                {m.id}
                              </span>
                            </div>
                            <p className="text-[9px] text-slate-400 italic mb-1">STK // {m.stack}</p>
                            <p className="text-[10px] text-slate-300 font-sans leading-relaxed">{m.desc}</p>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* 3. SYSTEM STATS TAB */}
                {activeTab === 'SYSTEM STATS' && (
                  <motion.div
                    key="stats"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col md:flex-row gap-4"
                  >
                    {/* STATS TEXT READOUT */}
                    <div className="flex-1 space-y-3.5 flex flex-col justify-center">
                      <div className="bg-slate-950/60 border border-cyan-500/10 rounded-xl p-3.5">
                        <p className="font-mono text-[7.5px] text-slate-500 uppercase tracking-widest">ACTIVE PORTFOLIO MISSION LOGS</p>
                        <p className="text-3xl font-mono text-[#00ffcc] font-bold tracking-tight mt-1.5 flex items-baseline gap-1">
                          12 <span className="text-[10px] font-mono text-cyan-400/80 font-normal">COMPLETED PROJECTS</span>
                        </p>
                      </div>

                      <div className="bg-slate-950/60 border border-cyan-500/10 rounded-xl p-3.5">
                        <p className="font-mono text-[7.5px] text-slate-500 uppercase tracking-widest">ACADEMIC & SCHOLARSHIP TRAINING TIME</p>
                        <p className="text-3xl font-mono text-cyan-400 font-bold tracking-tight mt-1.5 flex items-baseline gap-1">
                          1,450h+ <span className="text-[10px] font-mono text-cyan-400/80 font-normal">LOGGED PROGRAMMING</span>
                        </p>
                      </div>

                      {/* SYSTEM VERSATILITY BAR */}
                      <div className="bg-slate-950/60 border border-cyan-500/10 rounded-xl p-3.5">
                        <div className="flex justify-between items-center text-slate-400 font-mono text-[9px] uppercase">
                          <span>SYSTEM VERSATILITY INDICATOR</span>
                          <span className="text-[#00ffcc] font-bold">85% RANGE</span>
                        </div>
                        <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2 mt-2 overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="bg-gradient-to-r from-cyan-500 to-[#00ffcc] h-full shadow-[0_0_8px_#00ffcc]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* RADAR CHART PANEL (rendered in customizable responsive SVG) */}
                    <div className="w-full md:w-[240px] aspect-square bg-slate-950/60 border border-cyan-500/10 rounded-xl p-2.5 flex flex-col items-center justify-center relative overflow-hidden select-none">
                      
                      <span className="absolute top-2 left-2.5 font-mono text-[7px] text-slate-500 tracking-wider">RAD_ANALYSIS // FULL SPECTRUM</span>

                      {/* Radar Drawing Canvas */}
                      <svg viewBox="0 0 300 300" className="w-[180px] h-[180px] md:w-full md:h-full text-[#00ffcc]">
                        {/* Interactive Radar Ring Circles */}
                        <circle cx="150" cy="150" r="105" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
                        <circle cx="150" cy="150" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
                        <circle cx="150" cy="150" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" fillOpacity="0" />
                        
                        {/* Radar Axes Web */}
                        <line x1="150" y1="45" x2="150" y2="255" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                        <line x1="59" y1="97" x2="241" y2="203" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                        <line x1="59" y1="203" x2="241" y2="97" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />

                        {/* Outer polygon points for maximum target */}
                        <polygon points="150,45 241,97 241,203 150,255 59,203 59,97" fill="none" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3,3" />

                        {/* Interactive dynamic glowing colored area */}
                        <polygon 
                          points={radarPolygon} 
                          fill="rgba(0, 255, 204, 0.2)" 
                          stroke="#00ffcc" 
                          strokeWidth="1.5" 
                          className="drop-shadow-[0_0_4px_#00ffcc]"
                        />

                        {/* Vertex Interactive Points */}
                        {radarPoints.map((pt, idx) => (
                          <g key={idx}>
                            <circle cx={pt.x} cy={pt.y} r="3" fill="#00ffcc" className="animate-pulse" />
                            <text 
                              x={pt.x} 
                              y={pt.y + (pt.y < 150 ? -8 : 12)} 
                              fill="#94a3b8" 
                              fontSize="11" 
                              fontFamily="monospace"
                              textAnchor="middle"
                            >
                              {pt.label}
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>

                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: SYSTEM MONITOR GRID & TECH STACK STATUS */}
        <div className="border-t border-cyan-500/20 pt-3.5 mt-4 shrink-0">
          <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[9px] tracking-widest uppercase mb-2.5">
            <Activity className="h-3 w-3 animate-pulse text-[#00ffcc]" />
            <span>SYSTEM MONITOR // ACTIVE TECH STACK CHANNELS</span>
          </div>

          <div className="grid grid-cols-5 gap-2.5">
            {[
              { name: 'C# LANGUAGE', val: 94, icon: <Binary className="h-3.5 w-3.5" />, color: 'from-cyan-500 to-[#00ffcc]', desc: '.NET Application Foundation' },
              { name: 'ASP.NET CORE 8', val: 92, icon: <Cpu className="h-3.5 w-3.5" />, color: 'from-[#00ffcc] to-emerald-400', desc: 'Secure Server & Routing Engine' },
              { name: 'REACT FRAMEWORK', val: 86, icon: <Chrome className="h-3.5 w-3.5" />, color: 'from-blue-500 to-cyan-400', desc: 'Interactive High-End UX UI' },
              { name: 'TYPESCRIPT', val: 82, icon: <Layers className="h-3.5 w-3.5" />, color: 'from-blue-600 to-indigo-400', desc: 'Strict Typed Script Compiler' },
              { name: 'THREE.JS / D3', val: 78, icon: <Flame className="h-3.5 w-3.5" />, color: 'from-red-500 to-orange-400', desc: 'Dynamic Visual Synthesizer' }
            ].map((tech) => (
              <div 
                key={tech.name} 
                onMouseEnter={() => setHoveredTech(tech.desc)}
                onMouseLeave={() => setHoveredTech(null)}
                className="bg-slate-950/90 border border-cyan-500/10 rounded-lg p-2 flex flex-col justify-between hover:border-[#00ffcc]/35 hover:bg-[#00ffcc]/5 transition-all duration-300 relative group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[#00ffcc] group-hover:text-white transition-colors">
                    {tech.icon}
                  </div>
                  <span className="font-mono text-[8px] text-[#00ffcc] font-bold">{tech.val}%</span>
                </div>
                <div className="mt-2">
                  <p className="font-mono text-[6.5px] sm:text-[7.5px] text-slate-400 group-hover:text-cyan-300 transition-colors tracking-tight truncate leading-none">
                    {tech.name}
                  </p>
                  
                  {/* Miniature Animated Equalizer Bar graphs underneath */}
                  <div className="w-full bg-slate-900 h-1 rounded overflow-hidden mt-1 flex gap-[1px]">
                    <div className="w-1/3 bg-[#00ffcc]/40 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full bg-[#00ffcc] h-full animate-[tech-bar_1.5s_ease-in-out_infinite_alternate]" style={{ animationDelay: '0.1s' }}></div>
                    </div>
                    <div className="w-1/3 bg-[#00ffcc]/40 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full bg-[#00ffcc] h-full animate-[tech-bar_1.2s_ease-in-out_infinite_alternate]" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="w-1/3 bg-[#00ffcc]/40 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full bg-[#00ffcc] h-full animate-[tech-bar_1.7s_ease-in-out_infinite_alternate]" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DYNAMIC DESCRIPTION SUB-CONTAINER ON HOVER */}
          <div className="h-5 mt-2 flex items-center justify-center font-mono text-[7px] sm:text-[8px] text-slate-500 tracking-wider">
            {hoveredTech ? (
              <span className="text-cyan-400 font-bold uppercase animate-pulse-gentle">🛡️ STATUS LINKED — {hoveredTech}</span>
            ) : (
              <span>HOVER CHANNELS TO FETCH METRICS DEFINITION DIRECTORY</span>
            )}
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="border-t border-cyan-500/20 pt-2.5 mt-2 flex justify-between items-center font-mono text-[7px] sm:text-[8px] text-slate-500 tracking-widest uppercase shrink-0">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] inline-block animate-ping"></span>
            <span className="text-[#00ffcc] font-bold">TACTICAL PILOT // TAHMINA KHAN NIPA | ID: TKN-938</span>
          </div>
          <div>
            CORE SYSTEMS INTEGRITY: <span className="text-[#00ffcc] font-bold">98.7%</span>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { 
  X, 
  Layers, 
  Cpu, 
  CheckCircle, 
  CornerDownRight, 
  TrendingUp, 
  Github 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Modular Constants & Helpers
import { PROJECTS_DATA, ProjectData } from './constants/projects';
import { soundEngine } from './utils/sound';

// Modular Components
import Planet from './components/Planet';
import CameraController from './components/CameraController';
import HUD from './components/HUD';
import LoadingScreen from './components/LoadingScreen';
import CanvasLoader from './components/CanvasLoader';
import AdvancedSpaceship from './components/AdvancedSpaceship';
import AdvancedComet from './components/AdvancedComet';
import NebulaeBackground from './components/NebulaeBackground';
import AboutModal from './components/AboutModal';
import ProjectArchiveModal from './components/ProjectArchiveModal';
import CVModal from './components/CVModal';
import CVPreviewModal from './components/CVPreviewModal';

const TacticalDashboard = lazy(() => import('./components/TacticalDashboard'));

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<ProjectData | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showCVPreview, setShowCVPreview] = useState(false);
  const [showTactical, setShowTactical] = useState(false);
  const [archiveRipples, setArchiveRipples] = useState<{ id: number }[]>([]);
  const [cameraTarget, setCameraTarget] = useState<[number, number, number] | null>(null);
  const [hudMessage, setHudMessage] = useState("PORTFOLIO CORE: Welcome to my workspace. Click an orbiting project to explore details.");
  const [isMuted, setIsMuted] = useState(true);
  const [bigBangState, setBigBangState] = useState<'idle' | 'blasting' | 'showing'>('idle');
  const [canvasLoading, setCanvasLoading] = useState(true);

  const orbitRef = useRef<any>(null);

  useEffect(() => {
    // Automatically dismiss initial canvas loader once components are mounted
    const timer = setTimeout(() => {
      setCanvasLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handlePlanetSelect = (planet: ProjectData) => {
    setSelectedPlanet(planet);
    setCameraTarget(planet.position);
    setHudMessage(`PROJECT SPECS: Navigated to ${planet.name}. Technical architecture loaded.`);
    
    // Thruster engine rumble
    soundEngine.playThrusterRumble();
  };

  const handleUndock = () => {
    setSelectedPlanet(null);
    setCameraTarget(null);
    setHudMessage("WORKSPACE CORES: Undocked from current project. Returning to orbital overview map.");
    soundEngine.playThrusterRumble();
  };

  // Trigger full epic screen blast on clicking the comet
  const handleTriggerCometBlastWithPos = () => {
    setBigBangState('blasting');
    setHudMessage("☄️ PROFILE TRANSITION: Opening chronological biographical overview panel...");

    // Smooth transition to About modal during peak explosion density
    setTimeout(() => {
      setBigBangState('showing');
      setShowAbout(true);
    }, 900);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
    setBigBangState('idle');
    setHudMessage("WORKSPACE CORES: Biography panel dismissed. Workspace regained focus.");
  };

  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    setHudMessage(`AUDIO FEEDBACK: High-fidelity mechanical synthesizer sound effects set to ${muted ? "MUTED" : "ACTIVE"}.`);
  };

  const handleOpenArchive = () => {
    soundEngine.playMechanicalClick();
    setShowArchive(true);
    setHudMessage("PROJECT ARCHIVE: Opened repository registry catalog.");
    
    // Trigger radial ripple
    const newRipple = { id: Date.now() };
    setArchiveRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setArchiveRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div className="w-screen h-screen bg-[#020205] overflow-hidden text-slate-100 select-none font-sans relative">
      
      {/* 1. PERMANENT BOTTOM BACKGROUND WATERMARK - OVERLAY ON CANVAS (z-12) BUT UNDER HUD (z-20) */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-12">
        <h1 className="font-heading text-[6vw] text-slate-500/25 italic whitespace-nowrap">
          𝓣𝓪𝓱𝓶𝓲𝓷𝓪 𝓚𝓱𝓪𝓷
        </h1>
      </div>

      {/* 2. LIVE 3D FIBER SCENOGRAPHY */}
      <div className="w-full h-full z-10 relative">
        <Suspense fallback={<LoadingScreen />}>
          <Canvas 
            camera={{ position: [0, 1.8, 6.0], fov: 50 }} 
            gl={{ alpha: true, premultipliedAlpha: false }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <ambientLight intensity={1.2} />
            <pointLight position={[0, 0, 0]} intensity={4.5} color="#00ffcc" />
            <directionalLight position={[5, 10, 5]} intensity={1.8} />

            <Stars radius={130} depth={60} count={5000} factor={4.5} fade speed={1.2} />
            <NebulaeBackground />

            {/* Canvas Loading Indicator */}
            {canvasLoading ? (
              <CanvasLoader />
            ) : (
              <>
                {/* Dynamic Planet projects mapping */}
                {PROJECTS_DATA.map((planet, idx) => (
                  <Planet 
                    key={planet.id} 
                    planet={planet} 
                    isSelected={selectedPlanet?.id === planet.id} 
                    onSelect={handlePlanetSelect} 
                    index={idx} 
                  />
                ))}

                {/* Advanced Spaceflight physics */}
                <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.15}>
                  <AdvancedSpaceship selectedPlanet={selectedPlanet} />
                </Float>

                {/* Redesigned interactive comet core */}
                {bigBangState === 'idle' && (
                  <AdvancedComet onBlast={handleTriggerCometBlastWithPos} />
                )}

                {/* Glowing Space PostProcessing environment bloom config */}
                <EffectComposer enableNormalPass={false}>
                  <Bloom luminanceThreshold={0.08} luminanceSmoothing={0.9} intensity={2.8} />
                </EffectComposer>

                <CameraController targetPosition={cameraTarget} orbitControlsRef={orbitRef} />
                <OrbitControls 
                  ref={orbitRef} 
                  enableZoom={true} 
                  enablePan={false} 
                  maxDistance={8.5} 
                  minDistance={3.0} 
                  maxPolarAngle={Math.PI / 1.9} 
                />
              </>
            )}
          </Canvas>
        </Suspense>
      </div>

      {/* 3. HEADS-UP COCKPIT DISPLAY HUD (LEFT DIAGNOSTIC CARD & CONTROLLER OVERLAYS) */}
      <HUD 
        hudMessage={hudMessage}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenArchive={handleOpenArchive}
        onOpenCV={() => {
          setShowCV(true);
          setHudMessage("CV ACCESS: Deployed detailed and complete professional credentials dossier.");
        }}
        onOpenTactical={() => {
          setShowTactical(true);
          setHudMessage("SYS MONITOR: Loading tactical bio-telemetry radar specs...");
        }}
      />

      {/* 4. MULTI-PROJECT GLASS-MORPHIC SLIDE-OUT DETAIL PANEL */}
      <div 
        className={`absolute top-0 right-0 h-full w-[94vw] sm:w-[460px] bg-slate-950/85 backdrop-blur-2xl border-l border-cyan-500/25 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] z-30 transition-all duration-500 transform ${
          selectedPlanet ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {selectedPlanet && (() => {
          const stats = selectedPlanet.metrics;
          return (
            <div className="h-full flex flex-col custom-scrollbar overflow-y-auto p-6 font-sans">
              
              {/* Slide panel Header */}
              <div className="flex items-start justify-between border-b border-cyan-500/15 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 font-mono text-[9px] text-cyan-400 tracking-wider">
                    <Layers className="h-3.5 w-3.5" />
                    <span>PROJECT CLASSIFICATIONS // SYS_DOCK</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading tracking-tight text-white leading-tight">
                    {selectedPlanet.name}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    soundEngine.playMechanicalClick();
                    handleUndock();
                  }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Dynamic Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedPlanet.techStack.map((techItem, index) => (
                  <span 
                    key={index} 
                    className="text-[8px] font-mono tracking-wide px-2 py-0.5 rounded bg-slate-900/90 border border-cyan-500/20 text-cyan-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Project Specifications Context Panel */}
              <div className={`w-full h-34 bg-gradient-to-br ${selectedPlanet.mockGradient} border border-cyan-500/20 rounded-xl relative overflow-hidden mb-5 flex flex-col justify-between p-4 shadow-inner`}>
                <div className="absolute top-0 right-0 p-3 pointer-events-none opacity-10">
                  <Cpu className="h-20 w-20 text-cyan-400" />
                </div>
                <div className="flex justify-between items-start font-mono">
                  <span className="text-[7px] text-slate-400 tracking-widest uppercase">PROJECT DATA SPECIFICATIONS</span>
                  <span className="text-[7px] bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 px-1.5 rounded">VERIFIED COMPILE</span>
                </div>
                <div>
                  <p className="text-[12px] font-mono font-bold text-white tracking-widest uppercase mb-0.5">CORE BUILD STATS</p>
                  <p className="text-[8px] text-cyan-400 font-mono">SECURE TRANSITIONS // OPTIMIZED RUNTIME ACCELERATION</p>
                </div>
              </div>

              {/* Detailed descriptive bio text */}
              <div className="space-y-3 mb-5">
                <p className="text-[12px] text-slate-300 leading-relaxed text-justify">
                  {selectedPlanet.description}
                </p>
                <p className="text-[12px] text-slate-400 leading-relaxed text-justify">
                  {selectedPlanet.extendedDescription}
                </p>
              </div>

              {/* Core Feature bullet lists */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 mb-5">
                <h4 className="font-mono text-[9px] font-bold text-slate-300 tracking-wider uppercase mb-3 flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                  KEY ATTRIBUTIONS & CAPABILITIES
                </h4>
                <ul className="space-y-2">
                  {selectedPlanet.features.map((feat, idx) => (
                    <li 
                      key={idx} 
                      className="flex gap-2 items-start text-[11px] text-slate-300 hover:text-[#00ffcc] transition-colors duration-200 cursor-pointer group/task"
                      onMouseEnter={() => soundEngine.playTaskTick()}
                      onClick={() => {
                        soundEngine.playMechanicalClick();
                      }}
                    >
                      <CornerDownRight className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5 group-hover/task:translate-x-1 transition-transform" />
                      <span className="group-hover/task:translate-x-0.5 transition-transform">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RECHARTS FLUCTUATION TELEMETRY DATA PANEL */}
              <div className="bg-slate-900/80 border border-slate-850 p-4 rounded-xl mb-6">
                <div className="flex justify-between items-center mb-2.5 font-mono">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5 text-cyan-400" />
                    {stats.label}
                  </span>
                  <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-cyan-950/45 border border-cyan-500/30 text-cyan-400">
                    {stats.metricVal}
                  </span>
                </div>
                
                <div className="h-28 w-full overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stats.points} margin={{ top: 5, right: 5, left: -40, bottom: 0 }}>
                      <defs>
                        <linearGradient id={stats.gradientId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={selectedPlanet.color} stopOpacity={0.4}/>
                          <stop offset="95%" stopColor={selectedPlanet.color} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="name" 
                        stroke="#475569" 
                        fontSize={8} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#475569" 
                        fontSize={8} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-950 border border-cyan-500/40 p-2 rounded text-[8px] font-mono shadow-md text-left">
                                <p className="text-white font-bold">{payload[0].name}</p>
                                <p className="text-cyan-400 font-bold">Metrics: <span className="text-white">{payload[0].value}</span></p>
                              </div>
                            );
                          }
                          return null;
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke={selectedPlanet.color} 
                        strokeWidth={1.5}
                        fillOpacity={1} 
                        fill={`url(#${stats.gradientId})`} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Live GitHub Terminal actions buttons */}
              <div className="mt-auto pt-4 border-t border-slate-900 flex flex-col sm:flex-row gap-2">
                <a
                  href={selectedPlanet.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold font-mono text-[10px] tracking-widest uppercase rounded-lg transition-all text-center shadow-lg cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  REPOSITORY CORE
                </a>
                <button
                  onClick={() => {
                    soundEngine.playMechanicalClick();
                    handleUndock();
                  }}
                  className="flex-1 py-2.5 bg-slate-900 border border-slate-800 text-[10px] font-bold font-mono tracking-widest text-slate-300 uppercase rounded-lg hover:border-red-500/40 hover:text-red-400 transition-all cursor-pointer"
                >
                  BACK TO SPACEWAY
                </button>
              </div>

            </div>
          );
        })()}
      </div>

      {/* 5. EPIC RADIAL STAR WARP / COSMIC NEON PORTAL OVERLAY */}
      {bigBangState === 'blasting' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#020205]/60 backdrop-blur-sm z-50 flex items-center justify-center pointer-events-none"
        >
          {/* Cyan pulsing core and purple outer rings expanding outward */}
          <motion.div 
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-48 h-48 rounded-full border-2 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.6)] absolute"
          />
          <motion.div 
            initial={{ scale: 0.1, opacity: 0.9 }}
            animate={{ scale: 8, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="absolute w-48 h-48 rounded-full border border-purple-500 shadow-[0_0_60px_rgba(147,51,234,0.5)]"
          />
          {/* Inner smooth glow aura (no harsh solid white) */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 4, 1], opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-xl"
          />
        </motion.div>
      )}

      {/* 6. MULTI-PROJECT GLASS-MORPHISM GLOBAL ARCHIVE MODAL */}
      {showArchive && (
        <ProjectArchiveModal 
          onClose={() => setShowArchive(false)}
          onSelectProject={(title) => {
            const matchedPlanet = PROJECTS_DATA.find(p => p.name.toLowerCase().includes(title.toLowerCase().split(' ')[0]));
            if (matchedPlanet) {
              handlePlanetSelect(matchedPlanet);
            }
          }}
        />
      )}

      {/* 7. ABOUT ME MODAL */}
      {showAbout && (
        <AboutModal 
          onClose={handleCloseAbout} 
        />
      )}

      {/* 7.5. PORTFOLIO DOSSIER / CV PAGE */}
      {showCV && (
        <CVModal 
          onClose={() => {
            setShowCV(false);
            setHudMessage("CV ACCESS: Credentials dossier closed. Returning to standard view.");
          }}
          onOpenCVPreview={() => {
            setShowCVPreview(true);
            setHudMessage("CV PREVIEW: Opening secure credentials preview...");
          }}
        />
      )}

      {/* 7.5.5. CV PREVIEW PORT & DOWNLOAD VIEWER */}
      {showCVPreview && (
        <CVPreviewModal 
          onClose={() => {
            setShowCVPreview(false);
            setHudMessage("CV PREVIEW: Secure viewport dismissed. Standard orbit returned.");
          }}
        />
      )}

      {/* 7.6. TACTICAL SYSTEMS MONITOR / RADAR OVERLAYS */}
      {showTactical && (
        <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03030c] font-mono text-xs text-cyan-400 tracking-widest">CONNECTING_SATELLITE_RELAY // BOOTING HUD STATS...</div>}>
          <TacticalDashboard 
            onClose={() => {
              setShowTactical(false);
              setHudMessage("SYS MONITOR: Tactical orbit dismissed. Returning to standard orbit view.");
            }}
            onOpenCVPreview={() => {
              setShowCVPreview(true);
              setHudMessage("CV PREVIEW: Opening secure credentials preview...");
            }}
          />
        </Suspense>
      )}

      {/* 8. PENTAGON FLOATING BUTTON (PROJECT ARCHIVE) */}
      <motion.button
        onClick={handleOpenArchive}
        onMouseEnter={() => soundEngine.playWhoosh()}
        whileHover={{
          scale: [1, 1.05, 1],
          rotate: 6,
          filter: [
            "drop-shadow(0 0 4px rgba(6,182,212,0.5))",
            "drop-shadow(0 0 16px rgba(6,182,212,0.95))",
            "drop-shadow(0 0 4px rgba(6,182,212,0.5))"
          ],
          transition: {
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            filter: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              type: "spring",
              stiffness: 300,
              damping: 15
            }
          }
        }}
        whileTap={{ 
          scaleX: 0.94, 
          scaleY: 0.82,
          y: 4,
          rotate: -1,
          boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.5), inset 0 0 24px rgba(255, 255, 255, 0.5)'
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 14
        }}
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 xl:bottom-6 xl:right-[calc((100vw-1200px)/2+1rem)] 2xl:right-[calc((100vw-1400px)/2+1.5rem)] min-[1920px]:right-[calc((100vw-1680px)/2+2rem)] min-[2560px]:right-[calc((100vw-2200px)/2+3.0rem)] w-[64px] h-[48px] sm:w-[84px] sm:h-[64px] xl:w-[94px] xl:h-[72px] 2xl:w-[104px] 2xl:h-[80px] z-50 bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white font-mono tracking-wide font-bold shadow-[0_0_12px_rgba(239,68,68,0.3)] cursor-pointer select-none p-1 uppercase flex items-center justify-center text-center focus:outline-none transition-[filter] duration-300 overflow-hidden"
        style={{ 
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
          boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.45)'
        }}
        id="pentagon-project-archive"
      >
        {/* Radial ripple elements */}
        {archiveRipples.map(ripple => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute m-auto inset-0 w-8 h-8 bg-cyan-400 rounded-full pointer-events-none"
          />
        ))}

        <span className="text-[6.5px] sm:text-[8px] xl:text-[9.5px]/tight 2xl:text-[10px]/tight font-bold leading-tight select-none text-center relative z-10">
          📁 ARCHIVE
        </span>
      </motion.button>

    </div>
  );
}

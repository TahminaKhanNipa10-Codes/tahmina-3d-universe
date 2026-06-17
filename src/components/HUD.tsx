import { Terminal, Activity, Layers, VolumeX, Volume2, FileText, Compass } from 'lucide-react';
import { soundEngine } from '../utils/sound';
// @ts-ignore
import profilePhoto from '../../assets/TahminaNipa.jpg';

interface HUDProps {
  hudMessage: string;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenArchive: () => void;
  onOpenCV: () => void;
  onOpenTactical: () => void;
}

export default function HUD({ hudMessage, isMuted, onToggleMute, onOpenArchive, onOpenCV, onOpenTactical }: HUDProps) {
  return (
    <div className="absolute inset-x-0 top-0 pointer-events-none z-20 flex flex-col sm:flex-row justify-between p-4 sm:p-6 items-start gap-4">
      {/* Heads-Up Cockpit Display (Diagnostic Card) */}
      <div className="pointer-events-auto w-full sm:w-auto max-w-sm">
        <div className="tech-glass-panel rounded-xl p-4 shadow-[0_0_30px_rgba(0,255,204,0.1)] transition-all duration-300">
          {/* HUD Status Header */}
          <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-2.5 mb-2.5 font-mono">
            <div className="w-12 h-12 rounded-full border-2 border-cyan-500/50 overflow-hidden shrink-0">
              <img 
                src={profilePhoto} 
                alt="Commander Tahmina Avatar" 
                className="w-full h-full object-cover scale-[2.4]" 
                style={{ objectPosition: 'center 7%' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80';
                }}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5 ml-0.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#00ffcc] font-heading">TAHMINA KHANAM</h2>
              </div>
              <p className="text-[7.5px] text-slate-500 uppercase tracking-widest pl-0.5 leading-none mt-0.5">FULL STACK .NET DEVELOPER</p>
              <div className="text-[7.5px] text-cyan-400/80 bg-cyan-950/20 py-0.5 pl-0.5 mt-0.5 border border-cyan-500/10 rounded font-mono">
                STABLE RELEASE
              </div>
            </div>
          </div>

          {/* Diagnostics Log Console */}
          <div className="bg-slate-950/80 border border-cyan-500/15 rounded-lg p-3 font-mono">
            <div className="flex gap-2 text-[9px] text-cyan-300 leading-relaxed font-sans">
              <Terminal className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{hudMessage}</span>
            </div>
          </div>

          {/* Interactive hint status bar */}
          <div className="mt-3 flex items-center justify-between text-[8px] font-mono border-t border-slate-900 pt-2 text-slate-400">
            <span className="flex items-center gap-1">
              <Activity className="h-3 w-3 text-cyan-400 animate-pulse" />
              PORTFOLIO ACTIVE: YES
            </span>
            <span className="text-cyan-400 font-bold animate-pulse-gentle">
              ☄️ CLICK THE COMET TO EXPLORE BIOGRAPHY
            </span>
          </div>
        </div>
      </div>

      {/* Audio and Archive Controller Triggers */}
      <div className="pointer-events-auto flex flex-wrap sm:flex-nowrap items-center gap-3 self-end sm:self-start">
        <button
          onClick={onOpenArchive}
          className="flex items-center gap-2 bg-slate-950/90 hover:bg-cyan-950/35 border border-cyan-500/35 rounded-xl p-3 px-4 font-mono text-[10px] tracking-widest text-[#00ffcc] hover:text-white transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-95 animate-pulse-gentle"
          id="hud-archive-trigger"
        >
          <Layers className="h-3.5 w-3.5 text-[#00ffcc]" />
          <span className="text-[#00ffcc] font-bold">PROJECT ARCHIVE</span>
        </button>

        <button
          onClick={() => {
            soundEngine.playMechanicalClick();
            onOpenTactical();
          }}
          className="flex items-center gap-2 bg-slate-950/90 hover:bg-cyan-950/35 border border-cyan-500/35 rounded-xl p-3 px-4 font-mono text-[10px] tracking-widest text-cyan-400 hover:text-[#00ffcc] hover:border-[#00ffcc]/60 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-95 animate-pulse-gentle"
          id="hud-tactical-trigger"
        >
          <Compass className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-cyan-400 font-bold">SYS MONITOR</span>
        </button>

        <button
          onClick={() => {
            soundEngine.playMechanicalClick();
            onOpenCV();
          }}
          className="flex items-center gap-2 bg-slate-950/90 hover:bg-cyan-950/35 border border-cyan-500/35 rounded-xl p-3 px-4 font-mono text-[10px] tracking-widest text-[#00ffcc] hover:text-white transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-95"
          id="hud-cv-trigger"
        >
          <FileText className="h-3.5 w-3.5 text-[#00ffcc]" />
          <span className="text-[#00ffcc] font-bold">VIEW CV</span>
        </button>

        <button
          onClick={onToggleMute}
          className="flex items-center gap-2 bg-slate-950/90 hover:bg-cyan-950/35 border border-cyan-500/35 rounded-xl p-3 px-4 font-mono text-[10px] tracking-widest text-cyan-400 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-95"
          id="hud-mute-trigger"
        >
          {isMuted ? (
            <>
              <VolumeX className="h-3.5 w-3.5 text-red-500" />
              <span className="text-red-500 font-bold">MUTED (OFF)</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-cyan-400 font-bold">AUDIO LEVEL 1</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#020205] flex flex-col items-center justify-center font-mono z-[9999]" id="space-loading-screen">
      <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        <div className="absolute w-16 h-16 border-4 border-cyan-500/20 rounded-full"></div>
        <div className="absolute w-16 h-16 border-4 border-t-cyan-400 rounded-full animate-spin"></div>
      </div>
      <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase animate-pulse">LOADING ORBIT...</span>
      <span className="text-[9px] text-slate-500 mt-2 uppercase tracking-wide">Synthesizing 3D Navigation Grid</span>
    </div>
  );
}

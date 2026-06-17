import { Html } from '@react-three/drei';

export default function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-slate-950/95 border border-cyan-500/30 p-6 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-md font-mono min-w-[200px]">
        {/* Loading Ring */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute w-12 h-12 border-4 border-cyan-500/20 rounded-full"></div>
          <div className="absolute w-12 h-12 border-4 border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
        <p className="text-[10px] text-cyan-400 mt-4 tracking-widest uppercase animate-pulse">WARPING COGNITION...</p>
        <p className="text-[7px] text-slate-500 mt-1 uppercase">Loading 3D space matrix</p>
      </div>
    </Html>
  );
}

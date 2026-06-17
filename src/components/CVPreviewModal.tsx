import { 
  X, 
  Download, 
  Eye, 
  ShieldCheck, 
  Printer,
  ZoomIn,
  ZoomOut,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { soundEngine } from '../utils/sound';
// @ts-ignore
import profilePhoto from '../../assets/TahminaNipa.jpg';

interface CVPreviewModalProps {
  onClose: () => void;
}

type PreviewMode = 'interactive' | 'pdf';

export default function CVPreviewModal({ onClose }: CVPreviewModalProps) {
  const pdfUrl = "/official-cv.pdf";
  const [zoom, setZoom] = useState<number>(100);
  const [previewMode, setPreviewMode] = useState<PreviewMode>('interactive');

  const handleClose = () => {
    soundEngine.playMechanicalClick();
    onClose();
  };

  const handleDownload = () => {
    soundEngine.playMechanicalClick();
  };

  const handlePrint = () => {
    soundEngine.playMechanicalClick();
    window.print();
  };

  const increaseZoom = () => {
    soundEngine.playTaskTick();
    setZoom((prev) => Math.min(prev + 10, 140));
  };

  const decreaseZoom = () => {
    soundEngine.playTaskTick();
    setZoom((prev) => Math.max(prev - 10, 60));
  };

  const switchMode = (mode: PreviewMode) => {
    soundEngine.playMechanicalClick();
    setPreviewMode(mode);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/96 backdrop-blur-md overflow-hidden no-print"
    >
      {/* High-fidelity CSS rules for exact A4 physical printing layouts natively */}
      <style>{`
        @media print {
          body, html {
            background: white !important;
            color: #1e293b !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          /* Hide workspace elements during printing */
          body * {
            visibility: hidden !important;
          }
          #cv-print-area, #cv-print-area * {
            visibility: visible !important;
          }
          #cv-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            display: block !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .a4-page {
            width: 210mm !important;
            height: 297mm !important;
            page-break-after: always !important;
            break-after: page !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 20mm !important;
            background: white !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
          }
        }
        .a4-page {
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
          aspect-ratio: 1 / 1.4142;
          width: 100%;
          max-width: 800px;
        }
      `}</style>

      {/* Dynamic Cosmic Backplate */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-cyan-950/20 via-transparent to-slate-950 opacity-90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full shadow-[0_0_50px_rgba(34,211,238,0.04)] animate-[spin_100s_linear_infinite]" />
      </div>

      <div className="w-full max-w-4xl relative flex flex-col items-center h-full max-h-[96vh]">
        
        {/* Floating Top indicators */}
        <div className="w-full flex items-center justify-between px-2 mb-2 select-none shrink-0 gap-2">
          <div className="bg-slate-950/95 border border-cyan-500/30 rounded-lg px-2 py-1.5 text-[9px] font-mono font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            SEC_PRTC: 938_VERIFIED
          </div>

          <div className="bg-slate-950/95 border border-cyan-500/30 rounded-xl px-4 py-1.5 font-mono text-[9px] sm:text-xs font-bold tracking-[0.2em] text-[#c0efff] shadow-[0_0_15px_rgba(0,255,204,0.15)] flex items-center gap-2">
            <Eye className="h-4 w-4 text-[#00ffcc]" />
            <span>ORIGINAL_CV_RENDER_STREAM</span>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-slate-950 border border-cyan-500/35 text-cyan-400 hover:text-white hover:border-[#00ffcc] hover:shadow-[0_0_12px_rgba(0,255,204,0.3)] transition-all flex items-center justify-center cursor-pointer active:scale-95"
            id="cv-preview-close-corner"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Outer Frosted Glass Hologram Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="w-full bg-[#070714]/90 backdrop-blur-2xl border border-cyan-500/35 rounded-2xl p-3 sm:p-5 shadow-[0_0_80px_rgba(0,255,204,0.15)] flex flex-col relative overflow-hidden text-slate-200 h-full min-h-0"
        >
          {/* Top scanning layout edge glow line */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent"></div>

          {/* Tactical Crosshair corner styling */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-cyan-400/40"></div>
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#00ffcc]/40"></div>
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#00ffcc]/40"></div>
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#00ffcc]/40"></div>

          {/* Bio Info Segment */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#00ffcc]/20 pb-2.5 mb-2.5 select-none shrink-0 gap-2">
            <div>
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-widest text-[#00ffcc] uppercase flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#00ffcc] animate-pulse" />
                VERIFIED ORIGINAL PROFILE CONTEXT
              </h2>
              <p className="text-[8px] sm:text-[9.5px] font-mono text-slate-400 mt-0.5">
                HIGH-RESOLUTION REALTIME DOCUMENT CONTEXT // ZERO LAYOUT MODES
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrint}
                className="px-2.5 py-1 rounded bg-slate-950 border border-cyan-500/25 text-[#00ffcc] hover:text-white hover:border-[#00ffcc] font-mono text-[8px] sm:text-[9px] font-bold tracking-wider cursor-pointer active:scale-95 flex items-center gap-1.5"
                title="Print Document"
              >
                <Printer className="h-3 w-3" /> PRINT / SAVE AS PDF
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[8.5px] text-[#00ffcc] font-bold">STABLE PORT ACTIVE</span>
              </div>
            </div>
          </div>

          {/* MODE SELECTOR & CONTROLS CONTAINER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-slate-950/80 border border-cyan-500/15 p-2 sm:px-3 sm:py-2 rounded-xl mb-3 text-[10px] font-mono font-bold text-slate-300 shrink-0 select-none gap-3">
            
            {/* Tab switchers */}
            <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => switchMode('interactive')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 text-[10.5px] cursor-pointer ${
                  previewMode === 'interactive' 
                    ? 'bg-gradient-to-r from-cyan-950/60 to-slate-900 text-[#00ffcc] border border-cyan-500/40 shadow-inner' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                INTERACTIVE LIVE PREVIEW (HTML)
              </button>

              <button
                onClick={() => switchMode('pdf')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 text-[10.5px] cursor-pointer ${
                  previewMode === 'pdf' 
                    ? 'bg-gradient-to-r from-cyan-950/60 to-slate-900 text-[#00ffcc] border border-cyan-500/40 shadow-inner' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                DIRECT PDF STREAM
              </button>
            </div>

            {/* Scale / Detail Controls */}
            <div className="flex items-center justify-between md:justify-end gap-4">
              {previewMode === 'interactive' && (
                <div className="flex items-center gap-2.5 text-slate-400 border-r border-slate-800 pr-4">
                  <button 
                    onClick={decreaseZoom} 
                    className="hover:text-[#00ffcc] p-1 transition-colors cursor-pointer disabled:opacity-30"
                    title="Zoom Out"
                    disabled={zoom <= 60}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="text-[11px] min-w-[32px] text-center text-[#00ffcc] font-mono">{zoom}%</span>
                  <button 
                    onClick={increaseZoom} 
                    className="hover:text-[#00ffcc] p-1 transition-colors cursor-pointer disabled:opacity-30"
                    title="Zoom In"
                    disabled={zoom >= 140}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                </div>
              )}

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded bg-cyan-500" />
                <span className="text-slate-400">Target:</span>
                <span className="text-[#00ffcc] lowercase">{pdfUrl.substring(1)}</span>
              </div>
            </div>

          </div>

          {/* ACTIVE PREVIEW LAYER */}
          <div 
            className="flex-1 bg-[#10111e] border border-cyan-500/10 rounded-xl overflow-y-auto custom-scrollbar relative shrink min-h-0 flex justify-center items-start shadow-[inset_0_4px_30px_rgba(0,0,0,0.85)] p-4"
          >
            {previewMode === 'interactive' ? (
              
              /* RENDERED HIGH-FIDELITY DUAL-PAGE CANVAS */
              <div 
                id="cv-print-area"
                className="flex flex-col items-center gap-8 p-1 sm:p-2 transition-all duration-200 select-text text-left"
                style={{ 
                  width: `${zoom}%`, 
                  maxWidth: '820px'
                }}
              >
                
                {/* PAGE 1 */}
                <div className="a4-page bg-white p-8 sm:p-11 text-slate-800 flex flex-col justify-between overflow-hidden relative font-sans text-[11px] leading-relaxed">
                  
                  {/* Page Contents */}
                  <div>
                    {/* Header Container */}
                    <div className="flex justify-between items-start gap-4 mb-5">
                      {/* Left Column Information */}
                      <div className="flex-1">
                        <h1 className="text-[25px] font-extrabold tracking-tight text-[#0f517d] leading-none mb-1">
                          Tahmina Khanam
                        </h1>
                        <div className="w-full h-[1.5px] bg-[#0f517d]/65 my-1.5" />
                        <div className="text-[10px] font-bold tracking-wider text-[#0284c7] uppercase mb-4">
                          — FRESHER · FULL STACK .NET DEVELOPER
                        </div>
                        
                        {/* Contact details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 text-[9.5px] text-slate-600 font-medium">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3 text-[#0f517d] shrink-0" /> Chattagram, Bangladesh
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="h-3 w-3 text-[#0f517d] shrink-0" /> 017767406402
                          </div>
                          <div className="flex items-center gap-1.5 sm:col-span-2">
                            <Mail className="h-3 w-3 text-[#0f517d] shrink-0" /> tahminakhannipa10@gmail.com
                          </div>
                        </div>

                        {/* Web and social links */}
                        <div className="flex items-center gap-3.5 mt-3 text-[9px] text-[#0f517d] font-bold">
                          <a href="https://tahmina-khan-nipa.netlify.app" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline">
                            <Globe className="h-3 w-3" /> Portfolio
                          </a>
                          <a href="https://www.linkedin.com/in/tahminakhan-nipa" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline">
                            <Linkedin className="h-3 w-3" /> LinkedIn
                          </a>
                          <a href="https://github.com/TahminaKhanNipa10-Codes" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline">
                            <Github className="h-3 w-3" /> GitHub
                          </a>
                        </div>
                      </div>

                      {/* Right column: Photograph */}
                      <div className="w-[100px] h-[120px] border-[1px] border-amber-600 p-[3px] rounded bg-white flex-shrink-0 self-start mt-1">
                        <div className="w-full h-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
                          <img 
                            src={profilePhoto} 
                            alt="Tahmina Khanam" 
                            className="w-full h-full object-cover scale-[1.95]" 
                            style={{ objectPosition: 'center 12%' }}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80';
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* PROFESSIONAL SUMMARY */}
                    <div className="mb-4">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-2 font-mono">
                        Professional Summary
                      </h2>
                      <p className="text-slate-700 text-justify text-[10.5px] leading-relaxed">
                        Motivated and detail-oriented Fresher Full Stack Developer with solid training in enterprise-level .NET development through the competitive IsDB-BISEW IT Scholarship Programme (Round 67). Skilled in building web applications and database systems using ASP.NET Core, C#, SQL Server, and Entity Framework Core, with frontend experience in HTML5, CSS3, JavaScript, Angular, and React. Demonstrated ability to design, develop, and deploy real-world projects independently. Seeking an entry-level Junior Software Engineer or Full Stack Developer role to apply technical knowledge and grow within a professional software development environment.
                      </p>
                    </div>

                    {/* TECHNICAL SKILLS */}
                    <div className="mb-4">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-2.5 font-mono">
                        Technical Skills
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 text-[10px] text-slate-700">
                        <div>
                          <span className="font-bold text-slate-900">Backend</span> &rarr; ASP.NET Core MVC, ASP.NET Core Web API, C#, ADO.NET, .NET Framework, .NET 8, ASP.NET MVC 5, Auth & Authorization, Node.js, Express.js
                        </div>
                        <div>
                          <span className="font-bold text-slate-900">Frontend</span> &rarr; HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), jQuery, Angular, React.js, Responsive Web Design
                        </div>
                        <div>
                          <span className="font-bold text-slate-900">Database</span> &rarr; MS SQL Server, MongoDB, Entity Framework Core, Stored Procedures, T-SQL, DB Normalization (1NF–3NF), Relational Database Design, ERD
                        </div>
                        <div>
                          <span className="font-bold text-[#111827]">Tools</span> &rarr; Visual Studio 2022, VS Code, SSMS, Postman, Swagger (OpenAPI), Git & GitHub, Crystal Reports
                        </div>
                      </div>
                    </div>

                    {/* ACADEMIC PROJECTS */}
                    <div className="mb-4">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-2.5 font-mono">
                        Academic Projects
                      </h2>
                      
                      <div className="space-y-3.5">
                        {/* Project 1 */}
                        <div>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-slate-900 text-[11px] leading-tight flex items-center gap-1">
                              <span>ADO.NET Windows Forms Application</span>
                            </h3>
                            <a href="https://github.com/TahminaKhanNipa10-Codes" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline text-[9px] font-medium flex items-center gap-1 shrink-0">
                              <Github className="h-2.5 w-2.5" /> View on GitHub
                            </a>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-1.5">
                            {['C#', 'ADO.NET', 'MS SQL Server', 'Windows Forms', '.NET Framework'].map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 text-[8px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200/50">{tag}</span>
                            ))}
                          </div>
                          <ul className="space-y-0.5 list-none pl-0 text-slate-600 text-[10px]">
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Built a fully functional desktop CRUD application using C# and ADO.NET with direct SQL Server database connectivity</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Implemented parameterized queries and SqlClient data binding for real-time UI updates and SQL injection prevention</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Designed a normalized relational database schema ensuring data integrity and efficient query performance</span>
                            </li>
                          </ul>
                        </div>

                        {/* Project 2 */}
                        <div>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-slate-900 text-[11px] leading-tight">
                              Online BookShop Management System
                            </h3>
                            <a href="https://github.com/TahminaKhanNipa10-Codes/Online-BookShop-Management-System" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline text-[9px] font-medium flex items-center gap-1 shrink-0">
                              <Github className="h-2.5 w-2.5" /> View on GitHub
                            </a>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-1.5">
                            {['MS SQL Server', 'T-SQL', '.NET 8', 'SSMS', 'Database Design'].map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 text-[8px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200/50">{tag}</span>
                            ))}
                          </div>
                          <ul className="space-y-0.5 list-none pl-0 text-slate-600 text-[10px]">
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Architected a full-scale relational database with 16+ normalized tables covering inventory, orders, payments, and customer reviews — IsDB-BISEW Capstone Project</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Wrote complex stored procedures, T-SQL queries, and triggers to automate business logic and enforce data consistency</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Created complete ERD with DDL/DML scripts supporting end-to-end order lifecycle management</span>
                            </li>
                          </ul>
                        </div>

                        {/* Project 3 */}
                        <div>
                          <div className="flex justify-between items-baseline mb-1 grid-flow-row">
                            <h3 className="font-bold text-slate-900 text-[11px] leading-tight">
                              Personal Portfolio Website
                            </h3>
                            <a href="https://github.com/TahminaKhanNipa10-Codes/My-Personal-Portfolio" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline text-[9px] font-medium flex items-center gap-1 shrink-0">
                              <Github className="h-2.5 w-2.5" /> View on GitHub
                            </a>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-1.5">
                            {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'].map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 text-[8px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200/50">{tag}</span>
                            ))}
                          </div>
                          <ul className="space-y-0.5 list-none pl-0 text-slate-600 text-[10px]">
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Developed a fully responsive personal portfolio website using HTML5, CSS3, and JavaScript with mobile-first design principles</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Applied modern UI/UX best practices and semantic HTML for improved accessibility and cross-browser compatibility</span>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Footer Indicator */}
                  <div className="flex justify-between items-center text-[8.5px] text-slate-400 select-none border-t border-slate-100 pt-2 shrink-0 mt-2">
                    <span>Tahmina Khanam — CV Profile</span>
                    <span>Page 1 of 2</span>
                  </div>

                </div>

                {/* PAGE 2 */}
                <div className="a4-page bg-white p-8 sm:p-11 text-slate-800 flex flex-col justify-between overflow-hidden relative font-sans text-[11px] leading-relaxed">
                  
                  <div>
                    
                    {/* Academic projects continuation (projects 4 and 5) */}
                    <div className="mb-5">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-3 font-mono">
                        Academic Projects (Cont.)
                      </h2>
                      
                      <div className="space-y-4">
                        {/* Project 4 */}
                        <div>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-slate-900 text-[11px] leading-tight">
                              MinaBookStore Order Management System (MVC)
                            </h3>
                            <a href="https://github.com/TahminaKhanNipa10-Codes" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline text-[9px] font-medium flex items-center gap-1 shrink-0">
                              <Github className="h-2.5 w-2.5" /> View on GitHub
                            </a>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-1.5">
                            {['ASP.NET MVC', 'C#', 'Entity Framework', 'MS SQL Server', 'Bootstrap'].map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 text-[8px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200/50">{tag}</span>
                            ))}
                          </div>
                          <ul className="space-y-0.5 list-none pl-0 text-slate-600 text-[10px]">
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Developed a web-based order management system following ASP.NET MVC architecture with clean separation of concerns</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Integrated Entity Framework Core for ORM-based data access implementing CRUD operations and dynamic product management</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Built responsive frontend using Bootstrap 5 and Razor Views with form validation and user-friendly UI</span>
                            </li>
                          </ul>
                        </div>

                        {/* Project 5 */}
                        <div>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-slate-900 text-[11px] leading-tight">
                              NexusRetailERP — Retail Management System (MVC)
                            </h3>
                            <a href="https://github.com/TahminaKhanNipa10-Codes" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline text-[9px] font-medium flex items-center gap-1 shrink-0">
                              <Github className="h-2.5 w-2.5" /> View on GitHub
                            </a>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-1.5">
                            {['ASP.NET MVC', 'C#', 'Entity Framework (Code First)', 'MS SQL Server', 'Bootstrap'].map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 text-[8px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200/50">{tag}</span>
                            ))}
                          </div>
                          <ul className="space-y-0.5 list-none pl-0 text-slate-600 text-[10px]">
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Designed and developed an end-to-end Retail ERP system using ASP.NET MVC with Entity Framework Code-First approach</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Built modules for inventory management, sales tracking, and customer order processing with role-based access control</span>
                            </li>
                            <li className="flex gap-1.5 items-start">
                              <span className="text-[#0284c7] font-bold select-none mt-0.5">▸</span>
                              <span>Implemented database migrations and relational schema design to ensure scalable and maintainable data architecture</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* TRAINING & CERTIFICATIONS */}
                    <div className="mb-5">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-2.5 font-mono">
                        Training & Certifications
                      </h2>
                      <ul className="space-y-2.5 text-slate-700 text-[10px] sm:text-[10.5px]">
                        <li>
                          <div className="flex justify-between items-baseline font-bold text-slate-900 text-[10.5px]">
                            <span>Cross-Platform App Development — ASP.NET Core, Angular & .NET MAUI</span>
                            <span className="text-[#005c8a] font-mono font-bold text-[9px] shrink-0">Completed — 2026</span>
                          </div>
                          <div className="text-slate-500 font-medium text-[9px] mt-0.5">IsDB-BISEW IT Scholarship Programme | Round 67</div>
                        </li>
                        <li>
                          <div className="flex justify-between items-baseline font-bold text-slate-900 text-[10.5px]">
                            <span>Computer Literacy Program</span>
                            <span className="text-slate-400 font-mono text-[9px]">Completed</span>
                          </div>
                          <div className="text-slate-500 font-medium text-[9px] mt-0.5 font-sans">D.Net (Development Research Network) & VAB-NJ, USA</div>
                        </li>
                      </ul>
                    </div>

                    {/* EDUCATION */}
                    <div className="mb-5">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-2.5 font-mono">
                        Education
                      </h2>
                      <ul className="space-y-2.5 text-slate-700 text-[10px] sm:text-[10.5px]">
                        <li>
                          <div className="flex justify-between items-baseline font-bold text-slate-900 text-[10.5px]">
                            <span>BBA in Management</span>
                            <span className="text-[#005c8a] font-mono font-bold text-[9px] shrink-0">Completed</span>
                          </div>
                          <div className="text-slate-500 font-medium text-[9px] mt-0.5 font-sans">National University of Chittagong</div>
                        </li>
                        <li>
                          <div className="flex justify-between items-baseline font-bold text-slate-900 text-[10.5px]">
                            <span>Higher Secondary Certificate (HSC)</span>
                            <span className="text-[#005c8a] font-mono text-[9px] shrink-0">Completed</span>
                          </div>
                          <div className="text-slate-500 font-medium text-[9px] mt-0.5 font-sans">Satkania Adarsha Degree Mohila College</div>
                        </li>
                      </ul>
                    </div>

                    {/* REFERENCES */}
                    <div className="mb-3">
                      <h2 className="text-[11.5px] font-extrabold tracking-[0.16em] text-[#0f517d] uppercase border-b-2 border-[#0f517d] pb-0.5 mb-3 font-mono">
                        References
                      </h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px]">
                        <div className="border border-slate-200/80 p-3 rounded-lg bg-slate-50/40">
                          <p className="font-bold text-slate-900 text-[10.5px] mb-0.5">Syed Zahidul Hassan</p>
                          <p className="text-slate-500 text-[9px] font-semibold mb-1">Consultant (Microsoft C#.NET)</p>
                          <p className="text-slate-600 text-[9px] leading-tight mb-2">Show & Tell Consulting Ltd. | IsDB-BISEW</p>
                          <p className="text-[#005c8a] font-mono text-[9px] font-bold">
                            +8801535110014 <span className="text-slate-300">|</span> jewelmir81@gmail.com
                          </p>
                        </div>

                        <div className="border border-slate-200/80 p-3 rounded-lg bg-slate-50/40">
                          <p className="font-bold text-slate-900 text-[10.5px] mb-0.5">Md. Foysal Wahid</p>
                          <p className="text-slate-500 text-[9px] font-semibold mb-1">Faculty, IsDB-BISEW IT Scholarship Programme</p>
                          <p className="text-[#0f517d]/75 text-[9px] leading-tight mb-2">Sr. Technical Trainer, New Vision IT</p>
                          <p className="text-[#005c8a] font-mono text-[9px] font-bold">
                            +8801747193694 <span className="text-slate-300">|</span> fwrasel87@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Footer Indicator */}
                  <div className="flex justify-between items-center text-[8.5px] text-slate-400 select-none border-t border-slate-100 pt-2 shrink-0 mt-2">
                    <span>Tahmina Khanam — CV Profile</span>
                    <span>Page 2 of 2</span>
                  </div>

                </div>

              </div>

            ) : (

              /* ORIGINAL PDF STREAM WRAPPED WITH FALLBACK HANDLING */
              <div className="w-full flex flex-col items-center gap-4 h-full relative">
                
                {/* Visual Alert explaining why iframe blocking happens */}
                <div className="w-full max-w-2xl bg-amber-950/45 border border-amber-500/30 rounded-xl p-3 text-[10px] sm:text-[11px] text-amber-300 font-mono leading-relaxed shadow-lg flex items-start gap-2.5">
                  <AlertTriangle className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-white uppercase">[BROWSER SECURITY SECURITY SANCTIONED]: </span>
                    Your application runs inside an iframe. Chrome, Safari, and other browsers block PDF plugins load within iframes for anti-clickjacking safety. This causes inline PDF viewers to display fallback placeholders. Switch back to the <strong className="text-cyan-300">"Interactive Live Preview (HTML)"</strong> tab above for a flawless, identical view!
                  </div>
                </div>

                <div 
                  className="w-full max-w-3xl aspect-[210/297] bg-white rounded-lg shadow-2xl overflow-hidden flex items-center justify-center relative shadow-black/80 flex-1 min-h-[400px]"
                >
                  <object
                    id="cv-pdf-render-object"
                    data={pdfUrl}
                    type="application/pdf"
                    className="absolute inset-0 w-full h-full border-0"
                  >
                    <div className="flex flex-col items-center justify-center p-8 text-center text-slate-800 h-full max-w-lg mx-auto">
                      <p className="mb-4 text-sm font-medium">Your browser does not support inline PDF object elements, but you can download the original file securely below or save the HTML Live Preview as an authentic, pristine PDF!</p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={handlePrint}
                          className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-[#00ffcc] font-black tracking-wider uppercase rounded-xl transition-all text-xs"
                        >
                          PRINT / SAVE HTML VIEW
                        </button>
                        <a
                          href={pdfUrl}
                          download="Tahmina_Khanam_CV.pdf"
                          onClick={handleDownload}
                          className="px-5 py-3 bg-gradient-to-r from-[#00ffcc] to-cyan-500 text-slate-950 font-black tracking-wider uppercase rounded-xl hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] active:scale-95 transition-all text-xs flex items-center justify-center"
                        >
                          Download Raw File (580B Placeholder)
                        </a>
                      </div>
                    </div>
                  </object>
                </div>
              </div>
            )}
          </div>

          {/* DUAL-ACTION CONTROL STRIP */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-cyan-500/20 pt-3 mt-3 shrink-0">
            <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[8px] uppercase tracking-wider select-none order-2 sm:order-1 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STABILITY ENFORCED // NATIVE PDF DISPLAY STREAM</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
              {/* CLOSE BUTTON */}
              <button
                onClick={handleClose}
                className="flex-1 sm:flex-none uppercase font-mono text-[10px] tracking-widest font-bold px-5 py-2.5 rounded-xl border border-slate-700/80 hover:border-[#00ffcc] hover:text-cyan-300 bg-slate-950 hover:bg-slate-900 text-slate-400 transition-all duration-300 cursor-pointer active:scale-95 text-center flex items-center justify-center"
                id="preview-close-action"
              >
                [CLOSE VIEWPORT]
              </button>

              {/* DOWNLOAD BUTTON */}
              {previewMode === 'interactive' ? (
                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none uppercase font-mono text-[10px] tracking-widest font-extrabold px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00ffcc] to-cyan-500 text-slate-950 hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all duration-300 cursor-pointer active:scale-95 text-center flex items-center justify-center gap-2 font-black"
                  id="preview-download-action"
                  title="Save CV as pristine A4 PDF document"
                >
                  <Printer className="h-4 w-4 stroke-[2.5px]" />
                  [DOWNLOAD / PRINT AS PDF]
                </button>
              ) : (
                <a
                  href={pdfUrl}
                  download="Tahmina_Khanam_CV.pdf"
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none uppercase font-mono text-[10px] tracking-widest font-extrabold px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00ffcc] to-cyan-500 text-slate-950 hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all duration-300 cursor-pointer active:scale-95 text-center flex items-center justify-center gap-2 font-black"
                  id="preview-download-action"
                  title="Download original raw file"
                >
                  <Download className="h-4 w-4 stroke-[2.5px]" />
                  [DOWNLOAD RAW FILE]
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}

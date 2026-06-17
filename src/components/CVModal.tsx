import { useState } from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  Code,
  Award, 
  User, 
  Users,
  FileDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../utils/sound';
// @ts-ignore
import profilePhoto from '../../assets/TahminaNipa.jpg';

interface CVModalProps {
  onClose: () => void;
  onOpenCVPreview?: () => void;
}

export default function CVModal({ onClose, onOpenCVPreview }: CVModalProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'skills' | 'projects' | 'education'>('summary');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-md z-50 p-4"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="tech-glass-panel-heavy rounded-2xl w-full max-w-4xl h-[85vh] p-6 relative overflow-hidden shadow-[0_0_80px_rgba(0,255,204,0.18)] flex flex-col"
      >
        {/* Glowing sweep effect line */}
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent animate-pulse"></div>

        {/* Modal Close Button */}
        <button
          onClick={() => {
            soundEngine.playMechanicalClick();
            onClose();
          }}
          className="absolute top-4 right-4 bg-slate-950 hover:bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-white w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer z-30"
          id="close-cv-modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border-b border-cyan-500/15 pb-5 mb-5 shrink-0 mt-2 md:mt-0">
          {/* Portrait frame */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-[#00ffcc] p-0.5 relative shrink-0">
            <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Tahmina Khan Nipa" 
                className="w-full h-full object-cover scale-[1.95]"
                style={{ objectPosition: 'center 12%' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80';
                }}
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-cyan-400 border-2 border-slate-950 rounded-full animate-ping"></span>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-cyan-400 border-2 border-slate-950 rounded-full"></span>
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
              <h2 className="text-xl font-bold font-heading text-white tracking-wide">Tahmina Khanam</h2>
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#00ffcc] border border-[#00ffcc]/35 px-2 py-0.5 rounded uppercase self-center bg-[#00ffcc]/5">
                Full Stack .NET Developer
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 mb-3 uppercase flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
              <span>📍 Chattagram, Bangladesh</span>
              <span>📞 017767406402</span>
              <span>✉️ tahminakhannipa10@gmail.com</span>
            </p>

            {/* Quick contact nodes */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <a 
                href="https://github.com/TahminaKhanNipa10-Codes" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800 text-[8px] font-mono tracking-wider hover:text-cyan-400 hover:border-cyan-500/20 transition-all cursor-pointer"
              >
                <Github className="h-3 w-3" /> GITHUB CORES
              </a>
              <a 
                href="https://www.linkedin.com/in/tahminakhan-nipa" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800 text-[8px] font-mono tracking-wider hover:text-cyan-400 hover:border-cyan-500/20 transition-all cursor-pointer"
              >
                <Linkedin className="h-3 w-3" /> LINKEDIN PRO
              </a>
              <button 
                onClick={() => {
                  soundEngine.playMechanicalClick();
                  if (onOpenCVPreview) onOpenCVPreview();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/35 hover:border-emerald-400 text-[8px] font-mono font-bold tracking-wider text-[#00ffcc] hover:text-white hover:shadow-[0_0_12px_rgba(0,255,204,0.25)] transition-all cursor-pointer active:scale-95"
                id="cv-modal-print-trigger"
              >
                <FileDown className="h-3.5 w-3.5" /> PRINT/EXPORT CV
              </button>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-1 overflow-x-auto custom-scrollbar border-b border-slate-900 pb-3 shrink-0">
          {[
            { id: 'summary', label: 'Summary & Profile' },
            { id: 'skills', label: 'Technical Spectrum' },
            { id: 'projects', label: 'Academic Assets' },
            { id: 'education', label: 'Scholarship & Edu' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                soundEngine.playTaskTick();
              }}
              className={`px-4 py-2 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase transition-all duration-300 border rounded-lg whitespace-nowrap cursor-pointer active:scale-95 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-950/45 to-[#00ffcc]/10 border-[#00ffcc] text-[#00ffcc] font-bold shadow-[0_0_15px_rgba(0,255,204,0.1)]'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:border-cyan-500/20 hover:text-cyan-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Canvas */}
        <div className="flex-1 overflow-y-auto pr-1 mt-4 custom-scrollbar text-justify">
          
          {/* TAB 1: SUMMARY & PROFILE */}
          {activeTab === 'summary' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4 relative">
                <div className="absolute top-2 right-2 text-[7px] font-mono text-slate-500 uppercase">TELEMETRY_RECORD_01</div>
                <h4 className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00ffcc] uppercase mb-3 border-b border-cyan-500/10 pb-2">
                  <User className="h-3.5 w-3.5" /> Professional Summary
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Motivated and detail-oriented Fresher Full Stack Developer with solid training in enterprise-level .NET development through the competitive <strong>IsDB-BISEW IT Scholarship Programme (Round 67)</strong>. Skilled in building robust, highly secure web applications and database systems using <strong>ASP.NET Core, C#, SQL Server, and Entity Framework Core</strong>, and backed by a versatile frontend exposure including <strong>HTML5, CSS3, JavaScript, Angular, and React</strong>. Demonstrated unique competency to design, develop, and deploy real-world projects independently. Seeking a challenging entry-level Junior Software Engineer or Full Stack Developer role to leverage technical skill sets and thrive within a collaborative, production-grade development ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* References Block */}
                <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4">
                  <h4 className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-3 border-b border-cyan-500/10 pb-2">
                    <Users className="h-3.5 w-3.5" /> Professional References
                  </h4>
                  <div className="space-y-4">
                    <div className="text-[11px] font-sans">
                      <p className="font-bold text-slate-200">Syed Zahidul Hassan</p>
                      <p className="text-slate-400 text-[10px]">Consultant (Microsoft C#.NET)</p>
                      <p className="text-slate-500 text-[9px] font-mono mt-0.5">Show & Tell Consulting Ltd. | IsDB-BISEW</p>
                      <p className="text-cyan-400/80 font-mono text-[9px] mt-1">📞 +8801535110014 // ✉️ jewelmir81@gmail.com</p>
                    </div>
                    <div className="text-[11px] font-sans border-t border-slate-900/50 pt-3">
                      <p className="font-bold text-slate-200">Md. Foysal Wahid</p>
                      <p className="text-slate-400 text-[10px]">Faculty, IsDB-BISEW IT Scholarship Programme</p>
                      <p className="text-slate-500 text-[9px] font-mono mt-0.5">Sr. Technical Trainer, New Vision IT</p>
                      <p className="text-cyan-400/80 font-mono text-[9px] mt-1">📞 +8801747193694 // ✉️ fwrasel87@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Languages Block */}
                <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00ffcc] uppercase mb-4 border-b border-cyan-500/10 pb-2">
                      <Globe className="h-3.5 w-3.5" /> Language Proficiency
                    </h4>
                    <div className="space-y-3 font-mono text-[11px]">
                      <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-900">
                        <span className="text-slate-300">BANGLA</span>
                        <span className="text-[#00ffcc] font-bold text-[10px]">NATIVE / MOTHER TONGUE</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-900">
                        <span className="text-slate-300">ENGLISH</span>
                        <span className="text-cyan-400 font-bold text-[9.5px]">PROFICIENT (STRONG COMMAND)</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-900">
                        <span className="text-slate-300">HINDI</span>
                        <span className="text-slate-400 text-[10px]">CONVERSATIONAL</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-2.5 bg-[#00ffcc]/5 rounded border border-[#00ffcc]/25 font-mono text-[8px] text-center text-slate-400 leading-relaxed uppercase">
                    🔒 CALIBRATED SYSTEM INTEGRITY: ALL REFERENCES VERIFIED
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: TECHNICAL SPECTRUM */}
          {activeTab === 'skills' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Backend stack */}
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4 relative">
                <div className="absolute top-3 right-3 text-[14px] text-cyan-400/20"><Terminal className="h-8 w-8" /></div>
                <h4 className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-3 border-b border-cyan-500/10 pb-2">
                  🛡️ Backend Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ASP.NET Core MVC',
                    'ASP.NET Core Web API',
                    'C# Language',
                    'ADO.NET Connectivity',
                    '.NET Framework',
                    '.NET 8 Runtime',
                    'ASP.NET MVC 5',
                    'Auth & Authorization',
                    'Node.js Server',
                    'ExpressJS Routing'
                  ].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 font-mono text-[9.5px] text-slate-300 hover:border-cyan-400/40 transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database Layer */}
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4 relative">
                <div className="absolute top-3 right-3 text-[14px] text-cyan-400/20"><Database className="h-8 w-8" /></div>
                <h4 className="text-[11px] font-mono tracking-widest text-[#00ffcc] uppercase mb-3 border-b border-cyan-500/10 pb-2">
                  📂 Database Architectures
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'MS SQL Server RDBMS',
                    'MongoDB (NoSQL)',
                    'Entity Framework Core',
                    'Stored Procedures',
                    'Performance-Tuned T-SQL',
                    'Database Normalization (1NF-3NF)',
                    'Relational Schema Design',
                    'ERD Visual Architecture'
                  ].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 font-mono text-[9.5px] text-[#00ffcc] hover:border-[#00ffcc]/40 transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend Presentation */}
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4 relative">
                <div className="absolute top-3 right-3 text-[14px] text-cyan-400/20"><Code className="h-8 w-8" /></div>
                <h4 className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-3 border-b border-cyan-500/10 pb-2">
                  🎨 Frontend Presentation
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML5 Structure',
                    'CSS3 Grid / Flexbox',
                    'Bootstrap 5 Grid',
                    'JavaScript (ES6+)',
                    'jQuery Library',
                    'Angular Framework',
                    'ReactJS Component Engine',
                    'Responsive Web Design'
                  ].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 font-mono text-[9.5px] text-slate-300 hover:border-cyan-400/40 transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Systems & Tools */}
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4 relative">
                <div className="absolute top-3 right-3 text-[14px] text-cyan-400/20"><Cpu className="h-8 w-8" /></div>
                <h4 className="text-[11px] font-mono tracking-widest text-[#00ffcc] uppercase mb-3 border-b border-cyan-500/10 pb-2">
                  ⚙️ DevOps, Platforms & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Visual Studio 2022',
                    'VS Code Environment',
                    'SQL Server Management Studio (SSMS)',
                    'Postman API Testing',
                    'Swagger Specification (OpenAPI)',
                    'Git Distributed Tool',
                    'GitHub Repositories',
                    'Crystal Reports Generation'
                  ].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 font-mono text-[9.5px] text-[#00ffcc] hover:border-[#00ffcc]/40 transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ACADEMIC PROJECTS */}
          {activeTab === 'projects' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {[
                {
                  title: 'ADO.NET Windows Forms Application',
                  tags: ['C#', 'ADO.NET', 'MS SQL Server', 'Windows Forms', '.NET Framework'],
                  bullets: [
                    'Built a fully functional, production-ready desktop CRUD application utilizing C# language foundations and ADO.NET database drivers.',
                    'Engineered parameterized queries and SqlClient data binding routines to eliminate SQL injection threat landscapes and trigger live UI updates.',
                    'Designed a heavily normalized structure in SQL Server ensuring efficient transactional integrity and indexing optimizations.'
                  ]
                },
                {
                  title: 'Online BookShop Management System',
                  tags: ['MS SQL Server', 'T-SQL', '.NET 8', 'SSMS', 'Database Design'],
                  bullets: [
                    'Architected a highly rigorous transactional database with 16+ normalized relational tables handling core stock inventory, secure order flows, and customer review aggregates (IsDB-BISEW Capstone).',
                    'Engineered complex stored procedures, triggers, and nested queries to automate operational workflow validations and ensure data continuity.',
                    'Drafted complete Entity Relationship Diagrams (ERDs) paired with DDL/DML setup scripts mapping out comprehensive order lifecycle workflows.'
                  ]
                },
                {
                  title: 'Personal Portfolio Website',
                  tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
                  bullets: [
                    'Authored a fully adaptive web portfolio built on responsive design paradigms using HTML5 semantic layout structures and CSS3 styling grids.',
                    'Applied modern responsive design frameworks alongside SEO and high-performance UI optimization rules.'
                  ]
                },
                {
                  title: 'MinaBookStore Order Management System (MVC)',
                  tags: ['ASP.NET MVC', 'C#', 'Entity Framework', 'MS SQL Server', 'Bootstrap 5'],
                  bullets: [
                    'Designed and coded an enterprise Order Management web solution adhering strictly to ASP.NET MVC model separation standards.',
                    'Integrated Entity Framework Core mappings as an Object-Relational Mapper (ORM) to handle heavy database tasks and persistent storage.',
                    'Coded interactive forms complete with real-time server and client validations using Bootstrap 5 visual aesthetics.'
                  ]
                },
                {
                  title: 'NexusRetailERP — Retail Management System (MVC)',
                  tags: ['ASP.NET MVC', 'C#', 'Entity Framework (Code First)', 'MS SQL Server', 'Bootstrap'],
                  bullets: [
                    'Co-authored and integrated a full-spectrum Retail ERP web ecosystem using ASP.NET MVC and Entity Framework Code-First DB Migrations.',
                    'Programmed backend modules tracking live sales figures, multi-branch inventories, and customer invoices under strict security access policies.',
                    'Structured multi-level database constraints to enable highly scalable, low-latency transaction processing.'
                  ]
                }
              ].map((proj, idx) => (
                <div key={idx} className="bg-slate-950/45 rounded-xl border border-slate-900 hover:border-cyan-500/10 p-4 transition-all group">
                  <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 mb-2">
                    <h5 className="text-xs font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                      {idx + 1}. {proj.title}
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-850 font-mono text-[7px] text-cyan-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-1.5 font-sans text-[11px] text-slate-300 leading-relaxed list-none pl-1">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <span className="text-cyan-400 font-mono text-[9px] mt-0.5 select-none shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 4: EDUCATION & TRAINING */}
          {activeTab === 'education' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Training section */}
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4">
                <h4 className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00ffcc] uppercase mb-4 border-b border-cyan-500/10 pb-2">
                  <Award className="h-4 w-4" /> Training & Certifications
                </h4>
                <div className="space-y-4 font-sans text-xs">
                  <div className="border-l-2 border-[#00ffcc] pl-3 py-1 bg-slate-950/50 rounded-r">
                    <p className="font-bold text-slate-200">Cross-Platform App Development — ASP.NET Core, Angular & .NET MAUI</p>
                    <p className="text-[10px] text-[#00ffcc] font-mono mt-1">IsDB-BISEW IT Scholarship Programme | Round 67 // Completed — 2026</p>
                    <p className="text-slate-400 text-[10px] mt-1.5 leading-relaxed">
                      Graduated from highly selective, intensive training focused on developing enterprise systems. This scholarship comprises 1000+ hours of architectural programming in database security, object models, design patterns, and enterprise APIs.
                    </p>
                  </div>

                  <div className="border-l-2 border-cyan-500/50 pl-3 py-1 bg-slate-950/50 rounded-r">
                    <p className="font-bold text-slate-200">Computer Literacy Program</p>
                    <p className="text-[10px] text-cyan-400 font-mono mt-1">D.Net (Development Research Network) & VAB-NJ, USA</p>
                    <p className="text-slate-400 text-[10px] mt-1.5 leading-relaxed">
                      Solid foundational knowledge in algorithms, operating systems, and core computer science fundamentals designed to supplement engineering objectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education section */}
              <div className="bg-slate-950/40 rounded-xl border border-cyan-500/5 p-4">
                <h4 className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-4 border-b border-cyan-500/10 pb-2">
                  <GraduationCap className="h-4 w-4" /> Academic Background
                </h4>
                <div className="space-y-4 font-sans text-xs">
                  <div className="border-l-2 border-cyan-500/40 pl-3 py-1 bg-slate-950/50 rounded-r flex justify-between items-start gap-4">
                    <div>
                      <p className="font-bold text-slate-200">BBA in Management</p>
                      <p className="text-slate-400 text-[10px]">National University of Chittagong</p>
                    </div>
                    <span className="text-[9px] font-mono bg-cyan-950/80 border border-cyan-500/20 px-2 py-0.5 rounded text-[#00ffcc]">COMPLETED</span>
                  </div>

                  <div className="border-l-2 border-cyan-500/40 pl-3 py-1 bg-slate-950/50 rounded-r flex justify-between items-start gap-4">
                    <div>
                      <p className="font-bold text-slate-200">Higher Secondary Certificate (HSC)</p>
                      <p className="text-slate-400 text-[10px]">Satkania Adarsha Degree Mohila College</p>
                    </div>
                    <span className="text-[9px] font-mono bg-cyan-950/80 border border-cyan-500/20 px-2 py-0.5 rounded text-[#00ffcc]">COMPLETED</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </motion.div>
    </motion.div>
  );
}

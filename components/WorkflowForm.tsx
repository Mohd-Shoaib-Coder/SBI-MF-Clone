
import React, { useState } from 'react';
import { 
  Info, Paperclip, MessageSquare, History, User, 
  ChevronDown, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, 
  Search, Maximize, Download, RefreshCcw, Monitor, CheckCircle2, XCircle, LogOut,
  FileText, Clock, ArrowLeft
} from 'lucide-react';
import { Note, TabType } from '../types';
import { MOCK_ATTACHMENTS, MOCK_WORKFLOW_HISTORY } from '../constants';

interface WorkflowFormProps {
  note: Note;
  onClose: () => void;
}

const WorkflowForm: React.FC<WorkflowFormProps> = ({ note, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.GENERAL);
  const [page, setPage] = useState(1);

  const renderSidebarContent = () => {
    switch (activeTab) {
      case TabType.GENERAL:
        return (
          <div className="space-y-6">
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 text-left border-b border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <Info className="w-4 h-4" />
                  General Information
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <div className="p-4 grid grid-cols-2 gap-y-4 text-[11px]">
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Request ID</p>
                  <p className="text-gray-800 font-semibold">{note.id}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Requester</p>
                  <p className="text-gray-800 font-semibold">{note.requester}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Second Requester</p>
                  <p className="text-gray-800 font-semibold">-</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Request Date</p>
                  <p className="text-gray-800 font-semibold">{note.created}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Status</p>
                  <p className="text-gray-800 font-semibold">{note.status}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Department</p>
                  <p className="text-gray-800 font-semibold">{note.department}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Subject</p>
                  <p className="text-gray-800 font-semibold">{note.subject}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Note Type</p>
                  <p className="text-gray-800 font-semibold">{note.noteType}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Amount</p>
                  <p className="text-gray-800 font-semibold">-</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Category</p>
                  <p className="text-gray-800 font-semibold">{note.subCategory}</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase font-bold tracking-tight mb-0.5">Sub Category</p>
                  <p className="text-gray-800 font-semibold">{note.subCategory.toLowerCase()}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 text-left border-b border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <Paperclip className="w-4 h-4" />
                  Attachments
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <div className="p-2 space-y-2">
                {MOCK_ATTACHMENTS.map((att) => (
                  <div key={att.name} className="flex items-center gap-3 p-2 border border-gray-100 rounded-lg group hover:bg-blue-50 transition-colors">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-lg group-hover:bg-blue-100">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-800 truncate">{att.name}</p>
                      <p className="text-[10px] text-gray-400">{att.size} • {att.type}</p>
                    </div>
                    <button className="p-2 text-gray-300 hover:text-blue-500">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case TabType.LOGS:
        return (
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white">
              <button className="w-full flex items-center justify-between p-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <MessageSquare className="w-4 h-4" />
                  Comments Log
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <div className="p-8 text-center border-b border-gray-100">
                 <p className="text-xs italic text-gray-400">No previous comments recorded.</p>
              </div>
              <div className="p-3">
                 <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 shadow-sm flex items-center justify-center gap-2">
                   <MessageSquare className="w-3.5 h-3.5" />
                   New Comment
                 </button>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white">
              <button className="w-full flex items-center justify-between p-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <History className="w-4 h-4" />
                  Workflow History
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <div className="p-4 space-y-6">
                {MOCK_WORKFLOW_HISTORY.map((event, i) => (
                  <div key={i} className="flex gap-4 relative">
                    {i < MOCK_WORKFLOW_HISTORY.length - 1 && (
                      <div className="absolute left-[7px] top-4 w-px h-full bg-blue-100"></div>
                    )}
                    <div className="z-10 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-white mt-1"></div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold mb-0.5">{event.date}, {event.time}</p>
                      <p className="text-xs font-bold text-gray-800 mb-0.5">{event.event}</p>
                      <p className="text-[10px] text-gray-500">By {event.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case TabType.STATUS:
        return (
          <div className="space-y-4">
             {[
               { role: 'REVIEWER', name: 'Patti Fernandez-SBIMF', date: '18 Dec 2025', status: 'In Progress', statusColor: 'text-orange-600 bg-orange-50 border-orange-100' },
               { role: 'CURRENT', name: 'Nestor Wilke-SBIMF', date: '-', status: 'Pending', statusColor: 'text-gray-400 bg-gray-50 border-gray-100' },
               { role: 'APPROVER', name: 'Deepak Kumar-SBIMF', date: '-', status: 'Pending', statusColor: 'text-gray-400 bg-gray-50 border-gray-100' }
             ].map((step, i) => (
                <div key={i} className="relative bg-white border border-gray-100 rounded-xl p-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded border ${
                          step.role === 'REVIEWER' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                          step.role === 'CURRENT' ? 'text-purple-600 bg-purple-50 border-purple-100' :
                          'text-emerald-600 bg-emerald-50 border-emerald-100'
                        }`}>
                          {step.role}
                        </span>
                        <span className="text-[10px] text-gray-400">{step.date}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-700 mb-2">{step.name}</p>
                      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold border ${step.statusColor}`}>
                        <Clock className="w-2.5 h-2.5" />
                        {step.status}
                      </div>
                    </div>
                  </div>
                </div>
             ))}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#F3F7FA]">
      {/* Top Header */}
      <header className="bg-[#051c4a] text-white p-3 flex justify-between items-center h-16 shrink-0 shadow-lg z-20">
        <div className="flex items-center gap-4">
           <div className="bg-white p-2 rounded-lg">
             <FileText className="w-5 h-5 text-blue-800" />
           </div>
           <div>
             <h1 className="text-sm font-bold tracking-tight">Note Workflow Form</h1>
             <p className="text-[9px] font-black tracking-widest text-blue-300 opacity-80 uppercase">Strategic Ops Cluster</p>
           </div>
        </div>
        
        <div className="flex items-center gap-10">
           {/* Navigation Button */}
           <button 
             onClick={onClose}
             className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all text-white"
           >
             <ArrowLeft className="w-3 h-3" />
             Back to Dashboard
           </button>

           <div className="text-right">
             <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Global Status</p>
             <div className="flex items-center gap-1.5 justify-end">
               <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
               <span className="text-xs font-bold">Live Dashboard</span>
             </div>
           </div>
           
           <div className="flex items-center gap-3 pr-4 border-l border-white/10 pl-10">
             <div className="text-right">
               <p className="text-xs font-bold">Marcus Thorne</p>
               <p className="text-[10px] text-gray-400 font-medium">RISK COMPLIANCE</p>
             </div>
             <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
               <img src="https://picsum.photos/seed/user1/40/40" alt="Profile" className="w-full h-full object-cover" />
             </div>
           </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Left Sidebar Tabs */}
        <aside className="w-[320px] flex flex-col bg-white border-r border-gray-100 shrink-0 z-10 shadow-xl shadow-gray-200/50">
          <div className="p-4 grid grid-cols-3 gap-1 border-b border-gray-100 bg-gray-50/50">
            {[TabType.GENERAL, TabType.LOGS, TabType.STATUS].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 text-[10px] font-bold rounded-md transition-all uppercase tracking-widest ${
                  activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {renderSidebarContent()}
          </div>
        </aside>

        {/* Right Document Viewer Area */}
        <main className="flex-1 flex flex-col bg-[#e9eff5]">
          {/* Document Toolbar */}
          <div className="h-12 bg-white border-b border-gray-200/50 flex items-center justify-between px-6 shrink-0">
             <div className="flex items-center gap-4">
               <div className="flex items-center bg-gray-50 rounded-lg p-1">
                 <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-gray-500 transition-all"><ZoomOut className="w-4 h-4" /></button>
                 <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-gray-500 transition-all"><ZoomIn className="w-4 h-4" /></button>
                 <div className="h-4 w-px bg-gray-200 mx-1"></div>
                 <span className="px-2 text-[10px] font-black text-gray-500">125%</span>
               </div>
             </div>

             <div className="flex items-center gap-4">
               <div className="flex items-center bg-gray-50 rounded-lg p-1">
                 <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-gray-500 transition-all" onClick={() => setPage(Math.max(1, page - 1))}><ChevronLeft className="w-4 h-4" /></button>
                 <span className="px-4 text-[11px] font-black text-gray-600 tracking-widest">{page} / 4</span>
                 <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-gray-500 transition-all" onClick={() => setPage(Math.min(4, page + 1))}><ChevronRight className="w-4 h-4" /></button>
               </div>
             </div>

             <div className="flex items-center gap-2">
               <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Search className="w-4 h-4" /></button>
               <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Maximize className="w-4 h-4" /></button>
               <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Download className="w-4 h-4" /></button>
             </div>
          </div>

          {/* Document Content */}
          <div className="flex-1 overflow-y-auto p-12 flex flex-col items-center gap-8 relative custom-scrollbar">
            <div className="bg-white w-full max-w-[800px] aspect-[1/1.414] shadow-2xl p-16 flex flex-col relative transition-transform">
               
               <div className="text-center mb-10">
                 <p className="text-[10px] text-gray-300 font-bold tracking-[0.3em] mb-4">RECTANGULAR SNIP</p>
                 <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">MEMORANDUM</h2>
                 <p className="text-[10px] text-blue-700 font-black tracking-[0.2em] uppercase">Data Management • Strategic Operations Cluster</p>
                 <div className="h-1 w-full bg-slate-900 mt-6"></div>
               </div>

               <div className="flex justify-between items-start mb-12">
                 <div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Doc Reference</p>
                   <div className="bg-gray-100 px-3 py-1.5 rounded text-[11px] font-black text-slate-800">REF: {note.id}</div>
                 </div>
                 <div className="text-right">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Issue Date</p>
                   <p className="text-sm font-bold text-slate-800">{note.created}</p>
                 </div>
               </div>

               <div className="flex-1">
                 <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-8">
                   Approval Request for the Strategic Data Optimization Initiative - Fiscal Year 2025-26
                 </h3>
                 <div className="w-12 h-1 bg-blue-600 mb-10"></div>
                 
                 <p className="text-sm text-slate-600 leading-relaxed mb-10">
                   This memorandum details the proposed architecture for the next-generation data optimization pipeline. Vestibulum neque massa, scelerisque sit amet ligula eu, congue molestie mi. <span className="font-bold text-slate-900 underline decoration-blue-500/50">Vivamus dapibus sodales ex, vitae malesuada ipsum cursus convallis.</span> Maecenas sed egestas nulla, ac tincidunt nisl. Proin vitae purus ac urna convallis finibus.
                 </p>

                 <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 space-y-6">
                   <p className="text-[10px] font-black text-blue-800 tracking-widest uppercase flex items-center gap-2">
                     <span className="w-1 h-1 bg-blue-800 rounded-full"></span>
                     Key Strategic Objectives
                   </p>
                   <div className="flex gap-4">
                     <span className="text-blue-600 font-black text-sm">01.</span>
                     <p className="text-sm text-slate-700 font-medium">Streamline cross-departmental data processing nodes for high-throughput compliance.</p>
                   </div>
                   <div className="flex gap-4">
                     <span className="text-blue-600 font-black text-sm">02.</span>
                     <p className="text-sm text-slate-700 font-medium">Implementation of multi-layer security protocols for regional data discovery.</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Pagination Floating Controls */}
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white/50">
               {[1,2,3,4].map(p => (
                 <button 
                  key={p} 
                  onClick={() => setPage(p)}
                  className={`w-14 h-20 rounded-lg border-2 transition-all flex items-center justify-center bg-white overflow-hidden shadow-sm ${page === p ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-gray-200 opacity-60 hover:opacity-100'}`}
                 >
                   <div className="text-[8px] font-bold text-gray-400">Page {p}</div>
                 </button>
               ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer Actions */}
      <footer className="h-16 bg-[#0a1936] text-white flex items-center justify-between px-6 shrink-0 border-t border-white/5 z-20">
         <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30">
             <Clock className="w-5 h-5 text-blue-400" />
           </div>
           <div>
             <p className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Processing Node</p>
             <div className="flex items-center gap-2">
               <span className="text-xs font-bold">Mainframe Sync</span>
               <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold uppercase tracking-widest">Active</span>
             </div>
           </div>
         </div>

         <div className="flex items-center gap-3">
           <button className="px-6 py-2.5 bg-blue-900/30 border border-blue-500/30 text-blue-300 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-blue-800/50 transition-colors">
             Refer / Return
           </button>
           <button className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-black uppercase tracking-wider hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
             <CheckCircle2 className="w-4 h-4" />
             Recommend
           </button>
           <button className="px-8 py-2.5 bg-blue-900/50 text-white border border-blue-500/20 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-blue-800 transition-colors">
             Not Recommend
           </button>
           <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-blue-950/50 text-blue-400 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-blue-900/80 transition-colors border border-blue-800/20"
           >
             Close Portal
           </button>
         </div>
      </footer>

      {/* Top Breadcrumb / Title Bar */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-8 bg-white border border-gray-200 rounded-b-xl px-4 flex items-center justify-center shadow-sm z-[100]">
        <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">WealthStream Approval Portal</span>
        <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-100">
           <Monitor className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
           <RefreshCcw className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
           <Maximize className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default WorkflowForm;

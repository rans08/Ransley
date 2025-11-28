import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  BarChart3, 
  PieChart,
  Calendar,
  Download
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart as RechartsPie, 
  Pie, 
  Cell 
} from 'recharts';
import { PLATFORM_DATA, VIEWS_DATA, GROWTH_DATA, COLORS } from './constants';
import { PlatformSection } from './components/PlatformSection';

// A4 Wrapper Component
const A4Page = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg print-shadow-none print:w-full print:max-w-none p-8 md:p-12 mb-8 ${className}`}>
    {children}
  </div>
);

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 print:py-0">
      
      {/* Control Bar (Hidden on Print) */}
      <div className="fixed top-4 right-4 z-50 no-print">
        <button 
          onClick={handlePrint}
          className="bg-blue-900 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-800 transition-colors text-sm font-medium"
        >
          <Download size={16} />
          Export PDF
        </button>
      </div>

      {/* ================= PAGE 1 ================= */}
      <A4Page>
        {/* Header */}
        <header className="flex justify-between items-start mb-12 border-b-4 border-blue-900 pb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Monthly Social<br/>Content Wrap</h1>
            <div className="flex items-center gap-2 text-gray-500 font-medium mt-2">
              <Calendar size={18} />
              <span>October 2025</span>
            </div>
          </div>
          <div className="text-right">
             <div className="flex gap-1 mb-1 justify-end">
               <div className="h-2 w-8 bg-yellow-400"></div>
               <div className="h-2 w-8 bg-red-600"></div>
             </div>
             <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Performance Report</h2>
             <p className="text-xs text-gray-400">Blue Dart / DHL Logistics</p>
          </div>
        </header>

        {/* Executive Summary Graphs */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BarChart3 className="text-blue-900" />
            Executive Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-64">
            {/* Chart 1: Share of Views */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 text-center">Share of Total Views/Impressions</h3>
              <div className="flex-1 w-full h-full min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie
                      data={VIEWS_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {VIEWS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.instagram : index === 1 ? COLORS.facebook : COLORS.linkedin} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(Number(value))} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Growth Comparison */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 text-center">Month-over-Month Growth (k)</h3>
               <div className="flex-1 w-full h-full min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={GROWTH_DATA}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    barGap={0}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                    <YAxis tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Legend iconType="circle" wrapperStyle={{fontSize: '12px'}} />
                    <Bar dataKey="previous" name="Sept (Est.)" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="current" name="October" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Platforms - Instagram & Facebook (Top Half) */}
        <div className="space-y-6">
          <PlatformSection 
            data={PLATFORM_DATA.instagram} 
            icon={<Instagram size={20} />} 
          />
          <PlatformSection 
            data={PLATFORM_DATA.facebook} 
            icon={<Facebook size={20} />} 
          />
        </div>
      </A4Page>

      {/* ================= PAGE 2 ================= */}
      <div className="page-break"></div>
      
      <A4Page>
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-400">Monthly Wrap - Page 2</h2>
          <div className="text-xs text-gray-400">October 2025</div>
        </div>

        {/* Remaining Platforms - LinkedIn & X */}
        <div className="space-y-6 mb-10">
          <PlatformSection 
            data={PLATFORM_DATA.linkedin} 
            icon={<Linkedin size={20} />} 
          />
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden break-inside-avoid">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg text-white" style={{ backgroundColor: PLATFORM_DATA.x.color }}>
                  <Twitter size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">X (Twitter) Overview</h3>
              </div>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">Limited Data</span>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    {PLATFORM_DATA.x.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded border border-gray-100">
                        <div className="text-xs text-gray-500 uppercase">{m.label}</div>
                        <div className="font-bold text-lg text-gray-900">{m.value}</div>
                      </div>
                    ))}
                 </div>
                 <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg text-sm text-yellow-800">
                    <strong>Note:</strong> We need a premium subscription to access professional dashboard analytics. Currently limited to per-post insights.
                 </div>
              </div>
              <div className="flex-1 bg-gray-900 rounded-lg p-4 text-white">
                <h4 className="font-bold text-sm mb-2 text-gray-300">Top Content</h4>
                <p className="mb-4 font-serif text-lg leading-relaxed">"Lighting up every corner, one delivery at a time. Happy Diwali!"</p>
                <div className="flex gap-4 text-xs text-gray-400 border-t border-gray-700 pt-3">
                   <span>3,468 Impressions</span>
                   <span>184 Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Takeaways */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl break-inside-avoid">
           <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
             <PieChart className="text-yellow-400" />
             Strategic Conclusions
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-yellow-400 font-bold mb-3 uppercase tracking-wider text-sm">Content Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="bg-green-500 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-gray-300 text-sm"><strong>Human Connection:</strong> Real, human-centric posts significantly outperformed templates and stock imagery across all platforms. Future content should prioritize faces and stories.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-green-500 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-gray-300 text-sm"><strong>Celebrations Win:</strong> Milestones, awards, and festivals (Diwali) drove the highest engagement spikes.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-3 uppercase tracking-wider text-sm">Platform Specifics</h3>
                <ul className="space-y-3">
                   <li className="flex gap-3 items-start">
                    <span className="bg-blue-400 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-gray-300 text-sm"><strong>LinkedIn:</strong> Unique visitors dropped by ~16%. We need to post more "takeaway-based" content to attract new eyes.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-pink-500 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-gray-300 text-sm"><strong>Instagram:</strong> Giveaways were missed in October. Reintroducing them is recommended to boost community interaction.</p>
                  </li>
                </ul>
              </div>
           </div>
        </section>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-400 text-xs">
           <p>© Copyright, Confidential, ConvergenSEE India Martech Pvt. Ltd.</p>
        </footer>

      </A4Page>
    </div>
  );
}

export default App;
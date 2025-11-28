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
  Cell,
  LabelList
} from 'recharts';
import { PLATFORM_DATA, VIEWS_DATA, GROWTH_DATA, COLORS } from './constants';
import { PlatformSection } from './components/PlatformSection';

// A4 Wrapper Component
const A4Page = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[210mm] min-h-[297mm] mx-auto bg-slate-950 shadow-2xl print-shadow-none print:w-full print:max-w-none p-8 md:p-12 mb-8 border border-slate-900 ${className}`}>
    {children}
  </div>
);

// Custom palette for the charts to ensure visual distinction and pop in dark mode
const CHART_COLORS = {
  pie: ['#E1306C', '#3b82f6', '#06b6d4'], // Instagram Pink, Bright Blue, Cyan (for contrast)
};

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 print:py-0 bg-black">
      
      {/* Control Bar (Hidden on Print) */}
      <div className="fixed top-4 right-4 z-50 no-print">
        <button 
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-500 transition-colors text-sm font-medium border border-blue-400"
        >
          <Download size={16} />
          Export PDF
        </button>
      </div>

      {/* ================= PAGE 1 ================= */}
      <A4Page>
        {/* Header */}
        <header className="flex justify-between items-start mb-12 border-b-4 border-white pb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Monthly Social<br/>Content Wrap</h1>
            <div className="flex items-center gap-2 text-slate-400 font-medium mt-2">
              <Calendar size={18} />
              <span>October 2025</span>
            </div>
          </div>
          <div className="text-right">
             <div className="flex gap-1 mb-1 justify-end">
               <div className="h-2 w-8 bg-yellow-400"></div>
               <div className="h-2 w-8 bg-red-600"></div>
             </div>
             <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Performance Report</h2>
             <p className="text-xs text-slate-600">Blue Dart / DHL Logistics</p>
          </div>
        </header>

        {/* Executive Summary Graphs */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="text-blue-500" />
            Executive Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-64">
            {/* Chart 1: Share of Views */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 flex flex-col shadow-lg">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 text-center">Share of Total Views/Impressions</h3>
              <div className="flex-1 w-full h-full min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie
                      data={VIEWS_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={65}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                      labelLine={{ stroke: '#94a3b8' }}
                      stroke="none"
                    >
                      {VIEWS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS.pie[index % CHART_COLORS.pie.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                      formatter={(value) => new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(Number(value))} 
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: '#94a3b8' }} />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Growth Comparison */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 flex flex-col shadow-lg">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 text-center">Month-over-Month Growth (k)</h3>
               <div className="flex-1 w-full h-full min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={GROWTH_DATA}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barGap={0}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis dataKey="name" tick={{fontSize: 10, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                    <YAxis tick={{fontSize: 10, fill: '#94a3b8'}} axisLine={false} tickLine={false} hide />
                    <Tooltip cursor={{fill: '#334155', opacity: 0.4}} contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }} />
                    <Legend iconType="circle" wrapperStyle={{fontSize: '12px', color: '#94a3b8'}} />
                    <Bar dataKey="previous" name="Sept (Est.)" radius={[4, 4, 0, 0]}>
                      {GROWTH_DATA.map((entry, index) => (
                        <Cell 
                          key={`cell-prev-${index}`} 
                          fill={CHART_COLORS.pie[index % CHART_COLORS.pie.length]} 
                          fillOpacity={0.3}
                          stroke={CHART_COLORS.pie[index % CHART_COLORS.pie.length]}
                        />
                      ))}
                      <LabelList dataKey="previous" position="top" fontSize={10} fill="#94a3b8" />
                    </Bar>
                    <Bar dataKey="current" name="October" radius={[4, 4, 0, 0]}>
                      {GROWTH_DATA.map((entry, index) => (
                        <Cell 
                          key={`cell-curr-${index}`} 
                          fill={CHART_COLORS.pie[index % CHART_COLORS.pie.length]} 
                        />
                      ))}
                      <LabelList dataKey="current" position="top" fontSize={10} fill="#ffffff" fontWeight="bold" />
                    </Bar>
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
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <h2 className="text-lg font-bold text-slate-600">Monthly Wrap - Page 2</h2>
          <div className="text-xs text-slate-600">October 2025</div>
        </div>

        {/* Remaining Platforms - LinkedIn & X */}
        <div className="space-y-6 mb-10">
          <PlatformSection 
            data={PLATFORM_DATA.linkedin} 
            icon={<Linkedin size={20} />} 
          />
          
          <PlatformSection 
            data={PLATFORM_DATA.x} 
            icon={<Twitter size={20} />} 
          />
        </div>

        {/* Global Takeaways */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl border border-slate-800 break-inside-avoid">
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
                    <p className="text-slate-300 text-sm"><strong>Human Connection:</strong> Real, human-centric posts significantly outperformed templates and stock imagery across all platforms. Future content should prioritize faces and stories.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-green-500 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-slate-300 text-sm"><strong>Celebrations Win:</strong> Milestones, awards, and festivals (Diwali) drove the highest engagement spikes.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-3 uppercase tracking-wider text-sm">Platform Specifics</h3>
                <ul className="space-y-3">
                   <li className="flex gap-3 items-start">
                    <span className="bg-blue-400 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-slate-300 text-sm"><strong>LinkedIn:</strong> Unique visitors dropped by ~16%. We need to post more "takeaway-based" content to attract new eyes.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-pink-500 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                    <p className="text-slate-300 text-sm"><strong>Instagram:</strong> Giveaways were missed in October. Reintroducing them is recommended to boost community interaction.</p>
                  </li>
                </ul>
              </div>
           </div>
        </section>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
           <p>© Copyright, Confidential, ConvergenSEE India Martech Pvt. Ltd.</p>
        </footer>

      </A4Page>
    </div>
  );
}

export default App;
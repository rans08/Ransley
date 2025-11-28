import React from 'react';
import { PlatformData } from '../types';
import { MetricCard } from './MetricCard';
import { Award, Video, TrendingDown, BarChart2, Info } from 'lucide-react';

interface PlatformSectionProps {
  data: PlatformData;
  icon: React.ReactNode;
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({ data, icon }) => {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-lg overflow-hidden mb-6 break-inside-avoid">
      <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg text-white" style={{ backgroundColor: data.color }}>
            {icon}
          </div>
          <h3 className="text-lg font-bold text-white">{data.name} Performance</h3>
        </div>
        {data.name.includes('Twitter') && (
            <span className="text-[10px] uppercase font-bold bg-slate-800 text-slate-400 px-2 py-1 rounded">Limited Data</span>
        )}
      </div>
      
      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {data.metrics.map((m, idx) => (
            <MetricCard key={idx} metric={m} compact />
          ))}
        </div>

        {/* Content Highlights Row */}
        {data.contentHighlights && data.contentHighlights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {data.contentHighlights.map((content, idx) => (
              <div key={idx} className={`rounded-lg p-4 border ${content.type === 'info' ? 'bg-yellow-900/10 border-yellow-900/30' : 'bg-slate-800/50 border-slate-700'}`}>
                <div className="flex items-center gap-2 mb-2 font-semibold">
                  {content.type === 'video' ? <Video size={16} className="text-blue-400" /> : 
                   content.type === 'poll' ? <BarChart2 size={16} className="text-purple-400" /> :
                   content.type === 'info' ? <Info size={16} className="text-yellow-500" /> :
                   <Award size={16} className="text-green-400" />}
                  <span className={
                      content.type === 'video' ? 'text-blue-300' : 
                      content.type === 'poll' ? 'text-purple-300' : 
                      content.type === 'info' ? 'text-yellow-500' :
                      'text-green-300'
                  }>{content.title}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {content.stats.map((stat, i) => (
                    <span key={i} className="bg-slate-800 px-2 py-1 rounded text-xs font-medium text-slate-300 border border-slate-700 shadow-sm">
                      {stat}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{content.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Key Insights / Takeaways Row */}
        {data.takeaways && (
          <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
             <div className="flex items-center gap-2 mb-2 text-slate-300 font-semibold">
              <TrendingDown size={18} className="text-slate-500" />
              <span>Platform Insights</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {data.takeaways.map((t, i) => (
                <li key={i} className="text-xs text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-600">
                    {t}
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
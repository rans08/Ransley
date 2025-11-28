import React from 'react';
import { PlatformData } from '../types';
import { MetricCard } from './MetricCard';
import { Award, TrendingDown } from 'lucide-react';

interface PlatformSectionProps {
  data: PlatformData;
  icon: React.ReactNode;
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({ data, icon }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6 break-inside-avoid">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <div className="p-2 rounded-lg text-white" style={{ backgroundColor: data.color }}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{data.name} Performance</h3>
      </div>
      
      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {data.metrics.map((m, idx) => (
            <MetricCard key={idx} metric={m} compact />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Best Post Highlight */}
          {data.bestPost && (
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center gap-2 mb-2 text-green-800 font-semibold">
                <Award size={18} />
                <span>Star Performer</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{data.bestPost.title}</h4>
              <p className="text-xs text-gray-600 mb-3">{data.bestPost.description}</p>
              <div className="flex flex-wrap gap-2">
                {data.bestPost.stats.map((stat, i) => (
                  <span key={i} className="bg-white px-2 py-1 rounded text-xs font-medium text-green-700 border border-green-200 shadow-sm">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Insights / Takeaways */}
          {data.takeaways && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
               <div className="flex items-center gap-2 mb-2 text-gray-700 font-semibold">
                <TrendingDown size={18} className="rotate-180" /> {/* Using TrendingDown rotated as a generic 'Insight' icon */}
                <span>Platform Insights</span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {data.takeaways.map((t, i) => (
                  <li key={i} className="text-xs text-gray-600 leading-relaxed">{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

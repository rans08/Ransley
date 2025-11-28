import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Metric } from '../types';

interface MetricCardProps {
  metric: Metric;
  compact?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, compact = false }) => {
  return (
    <div className={`flex flex-col ${compact ? 'p-2' : 'p-4'} bg-white rounded-lg border border-gray-100 shadow-sm`}>
      <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{metric.label}</span>
      <div className="flex items-end justify-between mt-1">
        <span className={`font-bold text-gray-900 ${compact ? 'text-lg' : 'text-2xl'}`}>
          {metric.prefix}{metric.value}{metric.suffix}
        </span>
        {metric.change && (
          <div className={`flex items-center text-xs font-semibold ${metric.isPositive ? 'text-green-600' : 'text-red-500'}`}>
            {metric.isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span>{metric.change}</span>
          </div>
        )}
        {!metric.change && (
           <div className="flex items-center text-xs text-gray-400">
             <Minus size={14} />
           </div>
        )}
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down';
    percentage: number;
  };
}

const SummaryCard = ({ icon, label, value, trend }: SummaryCardProps) => {
  return (
    <div className="glass-card border border-white/20 rounded-xl p-5 hover:shadow-lg transition-all duration-150 backdrop-blur-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-text-primary">
              {icon}
            </div>
          </div>
          <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-2">{label}</p>
          <p className="text-3xl font-semibold text-text-primary mb-2">{value}</p>
          {trend && (
            <div className="flex items-center gap-1">
              {trend.direction === 'up' ? (
                <TrendingUp size={14} className="text-accent" />
              ) : (
                <TrendingDown size={14} className="text-text-muted" />
              )}
              <span className={`text-xs font-medium ${trend.direction === 'up' ? 'text-accent' : 'text-text-muted'}`}>
                {trend.percentage}% {trend.direction === 'up' ? 'increase' : 'decrease'} vs last week
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

'use client';

import React from 'react';
import { Search, Bell, User } from 'lucide-react';

interface TopBarProps {
  title: string;
  subtitle?: string;
}

const TopBar = ({ title, subtitle }: TopBarProps) => {
  return (
    <div className="glass-card border-b border-white/20 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary mb-0.5">{title}</h1>
          {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search transactions, vendors..."
              className="w-56 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-sm text-text-primary placeholder-text-muted transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
          </div>

          {/* Notification Bell */}
          <button className="p-2.5 rounded-lg hover:bg-white/20 transition-all duration-150 relative">
            <Bell size={20} className="text-text-secondary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </button>

          {/* Profile Avatar */}
          <button className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-150">
            <User size={18} className="text-text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

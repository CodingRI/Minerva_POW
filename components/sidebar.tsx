'use client';

import React from 'react';
import {
  LayoutDashboard,
  Upload,
  FileText,
  CheckCircle2,
  History,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const Sidebar = ({ currentPage = 'dashboard' }: { currentPage?: string }) => {
  const navItems: NavItem[] = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/', active: currentPage === 'dashboard' },
    { icon: <Upload size={20} />, label: 'Upload CSV', href: '/upload', active: currentPage === 'upload' },
    { icon: <FileText size={20} />, label: 'Transactions', href: '/transactions', active: currentPage === 'transactions' },
    { icon: <CheckCircle2 size={20} />, label: 'Review Queue', href: '/review', active: currentPage === 'review' },
    { icon: <History size={20} />, label: 'Audit Logs', href: '/audit-logs', active: currentPage === 'audit-logs' },
  ];

  const secondaryItems: NavItem[] = [
    { icon: <BookOpen size={20} />, label: 'Knowledge Base', href: '/knowledge', active: currentPage === 'knowledge' },
    { icon: <Users size={20} />, label: 'Clients', href: '/clients', active: currentPage === 'clients' },
    { icon: <BarChart3 size={20} />, label: 'Reports', href: '/reports', active: currentPage === 'reports' },
  ];

  const bottomItems: NavItem[] = [
    { icon: <Settings size={20} />, label: 'Settings', href: '/settings', active: currentPage === 'settings' },
    { icon: <HelpCircle size={20} />, label: 'Help', href: '/help', active: currentPage === 'help' },
  ];

  const NavItemComponent = ({ item }: { item: NavItem }) => (
    <a
      href={item.href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 ${
        item.active
          ? 'bg-white/20 backdrop-blur-sm text-text-primary'
          : 'text-text-secondary hover:text-text-primary hover:bg-white/10'
      }`}
    >
      {item.icon}
      <span className="text-sm font-medium">{item.label}</span>
    </a>
  );

  return (
    <div className="w-60 h-full glass-card border-r border-white/20 flex flex-col backdrop-blur-md">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/20">
        <h1 className="text-xl font-semibold text-text-primary tracking-tight">Minerva</h1>
        <p className="text-xs text-text-muted mt-1">AI Accounting</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavItemComponent key={item.label} item={item} />
          ))}
        </div>

        {/* Secondary Navigation */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">Resources</p>
          <div className="space-y-2">
            {secondaryItems.map((item) => (
              <NavItemComponent key={item.label} item={item} />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 py-6 border-t border-white/20 space-y-2">
        {bottomItems.map((item) => (
          <NavItemComponent key={item.label} item={item} />
        ))}
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/10 transition-all duration-150">
          <LogOut size={20} />
          <span className="text-sm font-medium">Sign out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

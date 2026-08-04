'use client';

import React from 'react';
import { Lock, Bell, Users, Database, ChevronRight } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';

interface SettingsSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

const SETTINGS_SECTIONS: SettingsSection[] = [
  {
    icon: <Lock size={20} />,
    title: 'Security & Privacy',
    description: 'Manage password, two-factor authentication, and data privacy settings',
    action: 'Manage',
  },
  {
    icon: <Bell size={20} />,
    title: 'Notifications',
    description: 'Configure email alerts and notification preferences',
    action: 'Configure',
  },
  {
    icon: <Users size={20} />,
    title: 'Team Members',
    description: 'Invite users and manage team access permissions',
    action: 'Manage',
  },
  {
    icon: <Database size={20} />,
    title: 'Integration',
    description: 'Connect accounting software and external tools',
    action: 'Configure',
  },
];

const SettingsPage = () => {
  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(/mountain-bg.png)`, backgroundAttachment: `fixed`, backgroundSize: `cover`, backgroundPosition: `center` }}>
      <Sidebar currentPage="settings" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Settings" subtitle="Manage your account, team, and application preferences" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-4xl mx-auto">
            {/* Account Section */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Account</h2>
              <div className="bg-surface border border-border rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-secondary flex items-center justify-center">
                      <span className="text-lg font-semibold text-text-primary">SJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">Sarah Johnson</p>
                      <p className="text-sm text-text-secondary">sarah@minervaaccounting.com</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-surface-secondary text-text-primary hover:bg-surface-secondary/80 transition-all duration-150 font-medium text-sm">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Settings Sections */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Preferences</h2>
              <div className="space-y-3">
                {SETTINGS_SECTIONS.map((section, idx) => (
                  <button
                    key={idx}
                    className="w-full bg-surface border border-border rounded-2xl p-6 hover:shadow-sm transition-all duration-150 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center text-text-secondary mt-1">
                          {section.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary">{section.title}</p>
                          <p className="text-sm text-text-secondary mt-1">{section.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-accent">{section.action}</span>
                        <ChevronRight size={20} className="text-text-muted" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-6">Danger Zone</h2>
              <div className="bg-surface border border-border rounded-2xl p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-text-primary">Delete Account</p>
                    <p className="text-sm text-text-secondary mt-1">Permanently delete your account and all associated data</p>
                  </div>
                  <button className="px-6 py-2.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-all duration-150 font-medium text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

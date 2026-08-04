'use client';

import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';

interface AuditLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
  type: 'approval' | 'override' | 'upload';
}

const DEMO_LOGS: AuditLog[] = [
  {
    id: '1',
    action: 'Transaction Approved',
    user: 'Sarah Johnson',
    timestamp: '2 hours ago',
    details: 'Adobe Inc. - $599.99 - Software & Subscriptions',
    type: 'approval',
  },
  {
    id: '2',
    action: 'Category Overridden',
    user: 'Michael Chen',
    timestamp: '5 hours ago',
    details: 'Event Venue Co. - $1,500.00 - Changed to Training & Development',
    type: 'override',
  },
  {
    id: '3',
    action: 'CSV Uploaded',
    user: 'Admin',
    timestamp: '1 day ago',
    details: 'Q3_2024_transactions.csv - 342 transactions imported',
    type: 'upload',
  },
  {
    id: '4',
    action: 'Batch Approved',
    user: 'Sarah Johnson',
    timestamp: '2 days ago',
    details: '23 transactions approved at once',
    type: 'approval',
  },
  {
    id: '5',
    action: 'Category Overridden',
    user: 'James Smith',
    timestamp: '2 days ago',
    details: 'Client Travel Inc. - $2,450.00 - Changed to Travel',
    type: 'override',
  },
];

const AuditLogsPage = () => {
  const getActionIcon = (type: AuditLog['type']) => {
    switch (type) {
      case 'approval':
        return <CheckCircle2 size={20} className="text-accent" />;
      case 'override':
        return <AlertCircle size={20} className="text-text-muted" />;
      case 'upload':
        return <Clock size={20} className="text-text-secondary" />;
    }
  };

  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(/mountain-bg.png)`, backgroundAttachment: `fixed`, backgroundSize: `cover`, backgroundPosition: `center` }}>
      <Sidebar currentPage="audit-logs" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Audit Logs" subtitle="Complete history of transaction reviews and changes" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              {DEMO_LOGS.map((log) => (
                <div key={log.id} className="bg-surface border border-border rounded-xl p-6 hover:shadow-sm transition-all duration-150">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center mt-1 flex-shrink-0">
                      {getActionIcon(log.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-text-primary">{log.action}</p>
                          <p className="text-sm text-text-secondary mt-1">{log.details}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs font-medium text-text-muted">{log.user}</p>
                          <p className="text-xs text-text-muted mt-1">{log.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogsPage;

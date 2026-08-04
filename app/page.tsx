'use client';

import React from 'react';
import { FileText, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';
import SummaryCard from '@/components/summary-card';
import TransactionTable from '@/components/transaction-table';

export default function Dashboard() {
  return (
    <div className="flex h-screen" style={{ backgroundImage: 'url(/mountain-bg.png)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Sidebar */}
      <Sidebar currentPage="dashboard" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar
          title="AI Transaction Review"
          subtitle="Review AI-generated accounting suggestions before approving transactions"
        />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <SummaryCard
                icon={<FileText size={20} />}
                label="Total Transactions"
                value="2,847"
                trend={{ direction: 'up', percentage: 12 }}
              />
              <SummaryCard
                icon={<Clock size={20} />}
                label="Pending Review"
                value="342"
                trend={{ direction: 'down', percentage: 8 }}
              />
              <SummaryCard
                icon={<CheckCircle2 size={20} />}
                label="Approved"
                value="2,156"
                trend={{ direction: 'up', percentage: 15 }}
              />
              <SummaryCard
                icon={<AlertCircle size={20} />}
                label="Needs Attention"
                value="349"
                trend={{ direction: 'up', percentage: 5 }}
              />
            </div>

            {/* Transaction Table */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Transactions</h2>
              <TransactionTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

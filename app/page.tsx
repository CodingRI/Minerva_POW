'use client';

import React, { useEffect, useState } from "react";
import { FileText, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';
import SummaryCard from '@/components/summary-card';
import TransactionTable from '@/components/transaction-table';

interface DashboardSummary {
  total: number;
  pending: number;
  approved: number;
  overridden: number;
}

export default function Dashboard() {

  const [summary, setSummary] = useState<DashboardSummary>({
  total: 0,
  pending: 0,
  approved: 0,
  overridden: 0,
});

const [transactions, setTransactions] = useState([]);

useEffect(() => {
  async function loadDashboard() {
    try {
      const [summaryRes, transactionRes] = await Promise.all([
        fetch("/api/dashboard"),
        fetch("/api/transactions?limit=8"),
      ]);

      const summaryData = await summaryRes.json();
      const transactionData = await transactionRes.json();

      setSummary(summaryData);
      setTransactions(transactionData.transactions);

    } catch (err) {
      console.error(err);
    }
  }

  loadDashboard();
}, []);
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
                value={summary.total}
                trend={{ direction: 'up', percentage: 12 }}
              />
              <SummaryCard
                icon={<Clock size={20} />}
                label="Pending Review"
                value={summary.pending}
                trend={{ direction: 'down', percentage: 8 }}
              />
              <SummaryCard
                icon={<CheckCircle2 size={20} />}
                label="Approved"
                value={summary.approved}
                trend={{ direction: 'up', percentage: 15 }}
              />
              <SummaryCard
                icon={<AlertCircle size={20} />}
                label="Needs Attention"
                value={summary.overridden}
                trend={{ direction: 'up', percentage: 5 }}
              />
            </div>

            {/* Transaction Table */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Transactions</h2>
              <TransactionTable transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

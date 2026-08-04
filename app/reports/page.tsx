'use client';

import React from 'react';
import { TrendingUp, Calendar, DollarSign, BarChart3 } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';

const ReportsPage = () => {
  const categories = [
    { name: 'Software & Subscriptions', amount: 5240, percentage: 22 },
    { name: 'Travel', amount: 4125, percentage: 17 },
    { name: 'Meals & Entertainment', amount: 3890, percentage: 16 },
    { name: 'Office Supplies', amount: 2450, percentage: 10 },
    { name: 'Utilities', amount: 2105, percentage: 9 },
    { name: 'Other', amount: 4190, percentage: 18 },
  ];

  const months = [
    { month: 'May', approved: 1850, pending: 340 },
    { month: 'June', approved: 2120, pending: 280 },
    { month: 'July', approved: 2560, pending: 340 },
    { month: 'August', approved: 2890, pending: 420 },
  ];

  const maxValue = Math.max(...months.flatMap((m) => [m.approved, m.pending]));

  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(/mountain-bg.png)`, backgroundAttachment: `fixed`, backgroundSize: `cover`, backgroundPosition: `center` }}>
      <Sidebar currentPage="reports" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Reports" subtitle="Transaction analysis and spending insights" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-7xl mx-auto">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-surface border border-border rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center">
                    <DollarSign size={20} className="text-text-secondary" />
                  </div>
                </div>
                <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-2">Total Spend</p>
                <p className="text-4xl font-semibold text-text-primary">$24,890</p>
                <p className="text-xs text-accent font-medium mt-3">↑ 8% vs last month</p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center">
                    <BarChart3 size={20} className="text-text-secondary" />
                  </div>
                </div>
                <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-2">Avg per Transaction</p>
                <p className="text-4xl font-semibold text-text-primary">$312</p>
                <p className="text-xs text-text-muted font-medium mt-3">Across 80 transactions</p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center">
                    <TrendingUp size={20} className="text-text-secondary" />
                  </div>
                </div>
                <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-2">Approval Rate</p>
                <p className="text-4xl font-semibold text-text-primary">92%</p>
                <p className="text-xs text-text-muted font-medium mt-3">2,156 approved</p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center">
                    <Calendar size={20} className="text-text-secondary" />
                  </div>
                </div>
                <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-2">Review Time</p>
                <p className="text-4xl font-semibold text-text-primary">2.3 hrs</p>
                <p className="text-xs text-accent font-medium mt-3">↓ 15% faster</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Spending by Category */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-6">Spending by Category</h3>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-text-primary">{category.name}</span>
                        <span className="text-sm font-semibold text-text-primary">${category.amount.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-surface-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: `${category.percentage}%` }} />
                      </div>
                      <p className="text-xs text-text-muted mt-1">{category.percentage}% of total</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approval Trends */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-6">Approval Trends</h3>
                <div className="space-y-6">
                  {months.map((data) => (
                    <div key={data.month}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-text-primary">{data.month}</span>
                        <div className="flex items-center gap-4 text-xs font-medium">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-text-primary">{data.approved} Approved</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-text-muted rounded-full" />
                            <span className="text-text-muted">{data.pending} Pending</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1 h-8">
                        <div
                          className="bg-accent rounded-lg transition-all"
                          style={{ width: `${(data.approved / maxValue) * 100}%` }}
                        />
                        <div
                          className="bg-text-muted rounded-lg transition-all"
                          style={{ width: `${(data.pending / maxValue) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-text-muted mt-2">
                        Total: ${(data.approved + data.pending).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Performance */}
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Category Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide">
                        Category
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wide">
                        Count
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wide">
                        Total Amount
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wide">
                        Avg Confidence
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wide">
                        Approval Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat) => (
                      <tr key={cat.name} className="border-b border-border hover:bg-surface-secondary/30 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-text-primary">{cat.name}</td>
                        <td className="px-6 py-4 text-sm text-text-secondary text-right">{Math.floor(Math.random() * 50) + 20}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-text-primary text-right">
                          ${cat.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-accent text-right">{Math.floor(Math.random() * 20) + 85}%</td>
                        <td className="px-6 py-4 text-sm text-accent text-right">{Math.floor(Math.random() * 10) + 90}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;

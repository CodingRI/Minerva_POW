'use client';

import React from 'react';
import { Check, Eye } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  vendor: string;
  amount: number;
  category: string;
  confidence: number;
  status: 'pending' | 'approved' | 'overridden';
}

interface TransactionTableProps {
  transactions?: Transaction[];
}

const DEMO_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: '2024-08-15',
    description: 'Software subscription renewal',
    vendor: 'Adobe Inc.',
    amount: 599.99,
    category: 'Software & Subscriptions',
    confidence: 96,
    status: 'pending',
  },
  {
    id: '2',
    date: '2024-08-14',
    description: 'Client lunch meeting',
    vendor: 'The Smith Restaurant',
    amount: 127.50,
    category: 'Meals & Entertainment',
    confidence: 87,
    status: 'approved',
  },
  {
    id: '3',
    date: '2024-08-14',
    description: 'Office supplies order',
    vendor: 'Staples Business',
    amount: 234.15,
    category: 'Office Supplies',
    confidence: 94,
    status: 'pending',
  },
  {
    id: '4',
    date: '2024-08-13',
    description: 'Cloud storage upgrade',
    vendor: 'Dropbox Business',
    amount: 99.99,
    category: 'Software & Subscriptions',
    confidence: 91,
    status: 'approved',
  },
  {
    id: '5',
    date: '2024-08-13',
    description: 'Travel - airfare',
    vendor: 'United Airlines',
    amount: 487.23,
    category: 'Travel',
    confidence: 98,
    status: 'pending',
  },
  {
    id: '6',
    date: '2024-08-12',
    description: 'Team building event',
    vendor: 'Event Venue Co.',
    amount: 1500.00,
    category: 'Team Building',
    confidence: 78,
    status: 'overridden',
  },
  {
    id: '7',
    date: '2024-08-12',
    description: 'Internet and utilities',
    vendor: 'City Utilities',
    amount: 156.78,
    category: 'Utilities',
    confidence: 89,
    status: 'approved',
  },
  {
    id: '8',
    date: '2024-08-11',
    description: 'Professional development course',
    vendor: 'LinkedIn Learning',
    amount: 299.99,
    category: 'Training & Development',
    confidence: 92,
    status: 'pending',
  },
];

const StatusBadge = ({ status }: { status: Transaction['status'] }) => {
  const statusConfig = {
    pending: { bg: 'bg-white/15 backdrop-blur-sm', text: 'text-text-secondary', label: 'Pending' },
    approved: { bg: 'bg-white/15 backdrop-blur-sm', text: 'text-accent', label: 'Approved' },
    overridden: { bg: 'bg-white/15 backdrop-blur-sm', text: 'text-text-muted', label: 'Overridden' },
  };

  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};

const ConfidenceBar = ({ confidence }: { confidence: number }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${confidence}%` }}
        />
      </div>
      <span className="text-xs font-medium text-text-secondary whitespace-nowrap">{confidence}%</span>
    </div>
  );
};

const TransactionTable = ({ transactions = DEMO_TRANSACTIONS }: TransactionTableProps) => {
  return (
    <div className="glass-card border border-white/20 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20">
              <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Description
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Vendor
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                AI Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Confidence
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-text-muted uppercase tracking-wide bg-white/10 backdrop-blur-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr
                key={tx.id}
                className="border-b border-white/20 hover:bg-white/5 transition-colors duration-150 last:border-b-0"
              >
                <td className="px-6 py-4 text-sm text-text-secondary whitespace-nowrap">{tx.date}</td>
                <td className="px-6 py-4 text-sm text-text-primary font-medium">{tx.description}</td>
                <td className="px-6 py-4 text-sm text-text-secondary">{tx.vendor}</td>
                <td className="px-6 py-4 text-sm text-text-primary font-semibold text-right">${tx.amount.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-text-secondary">{tx.category}</td>
                <td className="px-6 py-4">
                  <ConfidenceBar confidence={tx.confidence} />
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={tx.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-150" title="Review">
                      <Eye size={16} className="text-text-secondary hover:text-text-primary" />
                    </button>
                    {tx.status === 'pending' && (
                      <button className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-150" title="Approve">
                        <Check size={16} className="text-text-secondary hover:text-accent" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;

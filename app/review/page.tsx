'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, TrendingUp } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';

interface ReviewTransaction {
  id: string;
  date: string;
  description: string;
  vendor: string;
  amount: number;
  suggestedCategory: string;
  confidence: number;
  reasoning: string;
  similarTransactions: string[];
}

const DEMO_TRANSACTION: ReviewTransaction = {
  id: '1',
  date: '2024-08-15',
  description: 'Software subscription renewal',
  vendor: 'Adobe Inc.',
  amount: 599.99,
  suggestedCategory: 'Software & Subscriptions',
  confidence: 96,
  reasoning:
    'Based on transaction history and vendor classification, this is a monthly/annual software subscription. Similar vendors like Microsoft, Salesforce, and Adobe have consistently been categorized as software subscriptions.',
  similarTransactions: ['Adobe Creative Cloud (2024-07-15)', 'Adobe Stock (2024-06-15)', 'Subscription Software (2024-05-15)'],
};

const ReviewPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 5) % 5);
  };

  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(/mountain-bg.png)`, backgroundAttachment: `fixed`, backgroundSize: `cover`, backgroundPosition: `center` }}>
      <Sidebar currentPage="review" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Review Queue" subtitle="Review and approve AI-suggested transaction categories" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-semibold text-text-primary">Transaction {currentIndex + 1} of 5</h2>
                <p className="text-sm text-text-secondary mt-1">Pending Review Queue</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg hover:bg-surface-secondary transition-colors duration-150"
                >
                  <ChevronLeft size={20} className="text-text-secondary" />
                </button>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-150 ${
                        i === currentIndex ? 'bg-accent w-8' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg hover:bg-surface-secondary transition-colors duration-150"
                >
                  <ChevronRight size={20} className="text-text-secondary" />
                </button>
              </div>
            </div>

            {/* Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Transaction Details */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-6">Transaction Details</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Date</p>
                    <p className="text-lg font-semibold text-text-primary">{DEMO_TRANSACTION.date}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Description</p>
                    <p className="text-lg font-semibold text-text-primary">{DEMO_TRANSACTION.description}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Vendor</p>
                    <p className="text-lg font-semibold text-text-primary">{DEMO_TRANSACTION.vendor}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Amount</p>
                    <p className="text-3xl font-semibold text-text-primary">${DEMO_TRANSACTION.amount.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Right: AI Analysis */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-6">AI Suggestion</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">Suggested Category</p>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-text-primary">{DEMO_TRANSACTION.suggestedCategory}</p>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-surface-secondary text-accent">
                        {DEMO_TRANSACTION.confidence}% Confidence
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="w-full h-2 bg-surface-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${DEMO_TRANSACTION.confidence}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">AI Reasoning</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{DEMO_TRANSACTION.reasoning}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">Similar Transactions</p>
                    <div className="space-y-2">
                      {DEMO_TRANSACTION.similarTransactions.map((tx, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-surface-secondary">
                          <TrendingUp size={14} className="text-text-muted flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{tx}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-8">
              <button className="flex-1 px-6 py-3 rounded-xl bg-surface border border-accent text-accent hover:bg-surface-secondary transition-all duration-150 font-semibold">
                Approve
              </button>
              <button className="flex-1 px-6 py-3 rounded-xl bg-surface-secondary text-text-secondary hover:bg-surface-secondary/80 transition-all duration-150 font-semibold">
                Override
              </button>
              <button className="flex-1 px-6 py-3 rounded-xl bg-surface border border-border text-text-secondary hover:bg-surface-secondary transition-all duration-150 font-semibold">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

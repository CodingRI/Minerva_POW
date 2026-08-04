'use client';

import React from 'react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';
import TransactionTable from '@/components/transaction-table';

const TransactionsPage = () => {
  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(/mountain-bg.png)`, backgroundAttachment: `fixed`, backgroundSize: `cover`, backgroundPosition: `center` }}>
      <Sidebar currentPage="transactions" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Transactions" subtitle="View and manage all imported transactions" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <h2 className="text-xl font-semibold text-text-primary mb-6">All Transactions</h2>
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;

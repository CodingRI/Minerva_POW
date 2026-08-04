'use client';

import React, { useState } from 'react';
import { Upload, File, Calendar } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/top-bar';

interface UploadedFile {
  id: string;
  name: string;
  uploadedAt: string;
  transactionCount: number;
  status: 'processing' | 'completed' | 'error';
}

const DEMO_UPLOADS: UploadedFile[] = [
  {
    id: '1',
    name: 'Q3_2024_transactions.csv',
    uploadedAt: '2 hours ago',
    transactionCount: 342,
    status: 'completed',
  },
  {
    id: '2',
    name: 'August_expenses.csv',
    uploadedAt: '1 day ago',
    transactionCount: 156,
    status: 'completed',
  },
  {
    id: '3',
    name: 'Vendor_payments_Aug.csv',
    uploadedAt: '3 days ago',
    transactionCount: 89,
    status: 'completed',
  },
];

const UploadPage = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const StatusBadge = ({ status }: { status: UploadedFile['status'] }) => {
    const config = {
      processing: { bg: 'bg-surface-secondary', text: 'text-text-secondary', label: 'Processing' },
      completed: { bg: 'bg-surface-secondary', text: 'text-accent', label: 'Completed' },
      error: { bg: 'bg-surface-secondary', text: 'text-text-muted', label: 'Error' },
    };

    const styles = config[status];
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${styles.bg} ${styles.text}`}>
        {styles.label}
      </span>
    );
  };

  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(/mountain-bg.png)`, backgroundAttachment: `fixed`, backgroundSize: `cover`, backgroundPosition: `center` }}>
      <Sidebar currentPage="upload" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar title="Upload CSV" subtitle="Import transaction data for AI-powered review and categorization" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-4xl mx-auto">
            {/* Upload Area */}
            <div
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-12 text-center mb-12 transition-all duration-200 ${
                isDragging ? 'border-accent bg-surface-secondary/50' : 'border-border bg-surface-secondary/20'
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-xl bg-surface flex items-center justify-center">
                  <Upload size={32} className="text-text-muted" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Drop CSV file here</h3>
              <p className="text-sm text-text-secondary mb-4">or click to browse your files</p>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-surface border border-border text-text-primary hover:bg-surface-secondary transition-all duration-150 font-medium text-sm">
                <File size={16} />
                Select File
              </button>
            </div>

            {/* Recent Uploads */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Uploads</h2>
              <div className="space-y-3">
                {DEMO_UPLOADS.map((upload) => (
                  <div
                    key={upload.id}
                    className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition-all duration-150"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center">
                        <File size={20} className="text-text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-text-primary">{upload.name}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-xs text-text-muted">
                            <Calendar size={14} />
                            {upload.uploadedAt}
                          </div>
                          <span className="text-xs text-text-muted">{upload.transactionCount} transactions</span>
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={upload.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;

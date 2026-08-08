"use client";

import React from "react";
import { Check, Eye } from "lucide-react";

interface Transaction {
  id: string;

  date: string;

  description: string;

  vendor: string;

  amount: number | string;

  suggestedCategory?: string | null;

  finalCategory?: string | null;

  confidence?: number | null;

  status: "PENDING" | "APPROVED" | "OVERRIDDEN";
}

interface TransactionTableProps {
  transactions?: Transaction[];
}

const statusConfig = {

  PENDING: {
    bg: "bg-white/15 backdrop-blur-sm",
    text: "text-text-secondary",
    label: "Pending",
  },

  APPROVED: {
    bg: "bg-white/15 backdrop-blur-sm",
    text: "text-accent",
    label: "Approved",
  },

  OVERRIDDEN: {
    bg: "bg-white/15 backdrop-blur-sm",
    text: "text-text-muted",
    label: "Overridden",
  },

};

//   const config = statusConfig[status];
//   return (
//     <span
//       className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${config.bg} ${config.text}`}
//     >
//       {config.label}
//     </span>
//   );
// };

const ConfidenceBar = ({ confidence }: { confidence: number }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${confidence}%` }}
        />
      </div>
      <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
        {confidence}%
      </span>
    </div>
  );
};

const TransactionTable = ({
  transactions = [],
}: TransactionTableProps) => {

  const approveTransaction = async (id: string) => {
  try {
    const res = await fetch(
      `/api/transactions/${id}/approve`,
      {
        method: "PATCH",
      }
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    window.location.reload();
  } catch (err) {
    console.error(err);

  }

};
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
  {transactions.length === 0 ? (
    <tr>
      <td
        colSpan={8}
        className="text-center py-16 text-text-muted"
      >
        No transactions found.
        <br />
        Upload a CSV file to begin reviewing transactions.
      </td>
    </tr>
  ) : (
    transactions.map((tx) => (
      <tr
        key={tx.id}
        className="border-b border-white/20 hover:bg-white/5 transition-colors duration-150 last:border-b-0"
      >
        <td className="px-6 py-4 text-sm text-text-secondary whitespace-nowrap">
          {tx.date}
        </td>

        <td className="px-6 py-4 text-sm text-text-primary font-medium">
          {tx.description}
        </td>

        <td className="px-6 py-4 text-sm text-text-secondary">
          {tx.vendor}
        </td>

        <td className="px-6 py-4 text-sm text-text-primary font-semibold text-right">
          ${Number(tx.amount).toFixed(2)}
        </td>

        <td className="px-6 py-4 text-sm text-text-secondary">
          {tx.finalCategory ?? tx.suggestedCategory ?? "-"}
        </td>

        <td className="px-6 py-4">
          <ConfidenceBar confidence={tx.confidence ?? 0} />
        </td>

        <td className="px-6 py-4">
          {tx.status}
        </td>

        <td className="px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            <button
              className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-150"
              title="Review"
            >
              <Eye
                size={16}
                className="text-text-secondary hover:text-text-primary"
              />
            </button>

            {tx.status === "PENDING" && (
              <button
                onClick={() => approveTransaction(tx.id)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-150"
                title="Approve"
              >
                <Check
                  size={16}
                  className="text-text-secondary hover:text-accent"
                />
              </button>
            )}
          </div>
        </td>
      </tr>
    ))
  )}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;

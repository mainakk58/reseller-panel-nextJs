"use client";

import {useState} from "react";
import ArrowDownLeftIcon from "../../../../public/icons/ArrowDownLeftIcon";
import ArrowUpRightIcon from "../../../../public/icons/ArrowUpRightIcon";
import EyeOffIcon from "../../../../public/icons/EyeOffIcon";
import HistoryIcon from "../../../../public/icons/HistoryIcon";
import PlusIcon from "../../../../public/icons/PlusIcon";
import SendIcon from "../../../../public/icons/SendIcon";
import WalletIcon from "../../../../public/icons/WalletIcon";

// Mock transaction data
const transactionHistory = [
  {
    id: "TXN001",
    purchaseId: "PUR2024001",
    utrNumber: "UTR240601001",
    type: "purchase",
    description: "iPhone 15 Pro",
    amount: -89999,
    timestamp: "2024-06-04T10:30:00Z",
    status: "completed",
  },
  {
    id: "TXN002",
    purchaseId: "ADD2024001",
    utrNumber: "UTR240603002",
    type: "credit",
    description: "Wallet Top-up",
    amount: 50000,
    timestamp: "2024-06-03T15:45:00Z",
    status: "completed",
  },
  {
    id: "TXN003",
    purchaseId: "PUR2024002",
    utrNumber: "UTR240602003",
    type: "purchase",
    description: "Samsung Galaxy Watch",
    amount: -25999,
    timestamp: "2024-06-02T09:15:00Z",
    status: "completed",
  },
  {
    id: "TXN004",
    purchaseId: "PUR2024003",
    utrNumber: "UTR240601004",
    type: "purchase",
    description: "MacBook Air M2",
    amount: -119999,
    timestamp: "2024-06-01T14:20:00Z",
    status: "completed",
  },
  {
    id: "TXN005",
    purchaseId: "ADD2024002",
    utrNumber: "UTR240531005",
    type: "credit",
    description: "Cashback Reward",
    amount: 2500,
    timestamp: "2024-05-31T11:30:00Z",
    status: "completed",
  },
];

function page() {
  const [walletBalance, setWalletBalance] = useState(45750);
  const [showBalance, setShowBalance] = useState(true);
  const [transactions] = useState(transactionHistory);

  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (timestamp: any) => {
    return new Date(timestamp).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getTransactionIcon = (type: string) => {
    return type === "credit" ? (
      <ArrowDownLeftIcon className="w-5 h-5 text-green-600" />
    ) : (
      <ArrowUpRightIcon className="w-5 h-5 text-red-600" />
    );
  };

  const handleAddMoney = () => {
    // Add money logic here
    console.log("Add money clicked");
  };

  const handleSendMoney = () => {
    console.log("Send money clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <WalletIcon className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">My Wallet</h1>
            </div>

            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
              <WalletIcon className="w-5 h-5" />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Balance:</span>
                <span className="text-lg font-bold">
                  {showBalance ? formatCurrency(walletBalance) : "••••••"}
                </span>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  {showBalance ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeOffIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Current Balance
                </p>
                <p className="text-3xl font-bold mt-2">
                  {showBalance ? formatCurrency(walletBalance) : "••••••"}
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <WalletIcon className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={handleAddMoney}
                className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors"
              >
                <PlusIcon className="w-5 h-5" />
                <span className="font-medium">Add Money</span>
              </button>
              <button
                onClick={handleSendMoney}
                className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors"
              >
                <SendIcon className="w-5 h-5" />
                <span className="font-medium">Send Money</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              This Month
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Spent</span>
                <span className="font-semibold text-red-600">₹2,35,997</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Money Added</span>
                <span className="font-semibold text-green-600">₹50,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Transactions</span>
                <span className="font-semibold text-gray-900">5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <HistoryIcon className="w-6 h-6 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">
                Transaction History
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purchase ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    UTR Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {getTransactionIcon(transaction.type)}
                        <div>
                          <p className="font-medium text-gray-900">
                            {transaction.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            ID: {transaction.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded">
                        {transaction.purchaseId}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded">
                        {transaction.utrNumber}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`font-semibold ${
                          transaction.amount > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        {formatCurrency(transaction.amount)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">
                        {formatDate(transaction.timestamp)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {transactions.length} transactions
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Transactions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

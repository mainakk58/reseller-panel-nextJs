import React from "react";

type DashboardProps = {
  children: React.ReactNode;
};

const Dashboard = ({children}: DashboardProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[200px] bg-blue-300 p-4 flex flex-col gap-3">
        <h1 className="text-lg font-bold border-b pb-2">Dashboard</h1>
        <div className="text-sm text-gray-700">Add links or nav here</div>
        {children}
      </aside>
      <main className="flex-1 p-6 bg-gray-50"></main>
    </div>
  );
};

export default Dashboard;

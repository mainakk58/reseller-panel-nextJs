import React from "react";

type DashboardProps = {
  children: React.ReactNode;
};

const Dashboard = ({children}: DashboardProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[200px] bg-blue-300 p-4 flex flex-col gap-4 items-center">
        <div className="w-full border-b flex justify-center">
          <h1 className="text-lg font-bold  pb-2">Dashboard</h1>
        </div>
        <div className="w-full flex flex-col gap-4">{children}</div>
      </aside>
      <main className="flex-1 p-6 bg-gray-50"></main>
    </div>
  );
};

export default Dashboard;

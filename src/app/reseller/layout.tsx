import ResellerDashboard from "@/components/page/reseller/ResellerDashboard";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex">
      <ResellerDashboard />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
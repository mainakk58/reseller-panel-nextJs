"use client";

import Dashboard from "@/components/common/Dashboard";
import DashboardItemName from "@/components/common/DashboardItemName";
import {HumanIcon} from "../../../../public/icons/HumanIcon";

function TeacherDashboard() {
  return (
    <Dashboard>
      <div
        className="flex items-center gap-2"
        onClick={() => console.log("hello world")}
      >
        <HumanIcon className="text-2xl" />
        <DashboardItemName>Seller</DashboardItemName>
      </div>

      <div className="flex items-center gap-2">
        <HumanIcon className="text-2xl" />
        <DashboardItemName>Seller</DashboardItemName>
      </div>
    </Dashboard>
  );
}

export default TeacherDashboard;

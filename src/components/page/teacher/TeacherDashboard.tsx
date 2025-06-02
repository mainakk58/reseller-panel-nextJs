"use client";

import Dashboard from "@/components/common/Dashboard";
import DashboardDropDown from "@/components/common/DashboardDropDown";
import DashboardItemName from "@/components/common/DashboardItemName";
import DashboardSubItem from "@/components/common/DashboardSubItem";
import {HumanIcon} from "../../../../public/icons/HumanIcon";

function TeacherDashboard() {
  return (
    <Dashboard>
      <div className="flex items-center gap-3">
        <HumanIcon className="text-xl" />
        <DashboardItemName className="text-xl">ReSeller</DashboardItemName>
      </div>

      <div className="flex items-center gap-3">
        <HumanIcon className="text-xl" />
        <DashboardItemName className="text-xl">Seller</DashboardItemName>
      </div>
      <div className="flex flex-col gap-3">
          <DashboardDropDown title="Seller">
            <DashboardSubItem>
              <HumanIcon className="text-xl" />
              <DashboardItemName className="text-xl">Seller</DashboardItemName>
            </DashboardSubItem>
            <DashboardSubItem>
              <HumanIcon className="text-xl" />
              <DashboardItemName className="text-xl">Seller</DashboardItemName>
            </DashboardSubItem>
            <DashboardSubItem>
              <HumanIcon className="text-xl" />
              <DashboardItemName className="text-xl">Seller</DashboardItemName>
            </DashboardSubItem>
          </DashboardDropDown>
      </div>
    </Dashboard>
  );
}

export default TeacherDashboard;

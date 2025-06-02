// components/common/DashboardItemName.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardItemName = ({children}: Props) => {
  return <div className="text-xl font-semibold text-gray-800">{children}</div>;
};

export default DashboardItemName;

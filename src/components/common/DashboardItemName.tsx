import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const DashboardItemName = ({children, className = ""}: Props) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default DashboardItemName;

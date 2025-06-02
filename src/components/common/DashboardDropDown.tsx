"use client";

import React, {useState} from "react";
import ChevronDown from "../../../public/icons/ChevronDown";
import ChevronUp from "../../../public/icons/ChevronUp";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const DashboardDropDown = ({title, children}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-2 font-medium text-xl rounded hover:bg-blue-400 transition"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="mt-2 ml-3 flex flex-col gap-1 w-full">{children}</div>
      )}
    </div>
  );
};

export default DashboardDropDown;

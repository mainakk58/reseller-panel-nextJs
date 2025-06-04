"use client";

import Link from "next/link";
import {useState} from "react";
import HomeIcon from "../../../../public/icons/HomeIcon";

function ResellerDashboard() {
  const [frPortalOpen, setFrPortalOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-900 min-h-screen w-[200px] flex flex-col items-start px-4 py-6 space-y-4">
        <p className="text-white text-lg font-semibold">Teacher Dashboard</p>

        <div className="w-full">
          <Link href={"/teacher"}>
            <button
              onClick={() => setFrPortalOpen((prev) => !prev)}
              className="flex items-center w-full text-white px-2 py-2 hover:bg-blue-800 rounded transition-colors"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Franchise Details
            </button>
          </Link>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden pl-7 ${
              frPortalOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              href={"/teacher/resellerdetails"}
              className="text-blue-200 hover:text-white hover:underline"
            >
              Reseller details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResellerDashboard;

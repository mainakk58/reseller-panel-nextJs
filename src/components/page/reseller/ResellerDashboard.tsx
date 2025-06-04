"use client";

import Link from "next/link";
import HomeIcon from "../../../../public/icons/HomeIcon";
import TruckIcon from "../../../../public/icons/TruckIcon";
import ShoppingIcon from "../../../../public/icons/ShoppingIcon";

function ResellerDashboard() {
  return (
    <>
      <div className="bg-blue-900 min-h-screen w-[200px] flex flex-col items-start px-4 py-6 space-y-4">
        <p className="text-white text-lg font-semibold">Teacher Dashboard</p>

        <div className="w-full">
          <Link href={"#"}>
            <button className="flex items-center w-full gap-2 text-white px-2 py-2 hover:bg-blue-800 rounded transition-colors">
              <TruckIcon />
              Place Order
            </button>
          </Link>
          <Link href={"#"}>
            <button className="flex items-center w-full text-white px-2 py-2 hover:bg-blue-800 rounded transition-colors">
              <ShoppingIcon className="w-5 h-5 mr-2 text-white" />
              Your Orders
            </button>
          </Link>
          <Link href={"#"}>
            <button className="flex items-center w-full text-white px-2 py-2 hover:bg-blue-800 rounded transition-colors">
              <HomeIcon className="w-5 h-5 mr-2" />
              Wallet
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResellerDashboard;

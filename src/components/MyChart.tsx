"use client";

import dynamic from "next/dynamic";
import React, {useState} from "react";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

import {ApexOptions} from "apexcharts";

const MyChart: React.FC = () => {
  const [series, setSeries] = useState<number[]>([75, 25]);
  const [options, setOptions] = useState<ApexOptions>({
    labels: ["Apple", "Mango"],
  });

  return (
    <div>
      <Chart options={options} series={series} type="donut" width={380} />
    </div>
  );
};

export default MyChart;

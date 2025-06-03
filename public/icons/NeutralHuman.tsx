import React from "react";

type NeutralHumanProps = {
  size?: string;
  color?: string;
  className?: string;
};

const NeutralHuman: React.FC<NeutralHumanProps> = ({
  size = "100px",
  color = "#8B8000",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{display: "inline-block", verticalAlign: "baseline"}}
  >
    <circle cx="32" cy="20" r="12" fill={color} />
    <path
      fill={color}
      d="M16 50c0-8.837 7.163-16 16-16s16 7.163 16 16v2H16v-2z"
    />
  </svg>
);

export default NeutralHuman;

import React from "react";

type SearchIconProps = {
  size?: string;
  color?: string;
  className?: string;
};

const SearchIcon: React.FC<SearchIconProps> = ({
  size = "24px",
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{display: "inline-block", verticalAlign: "middle"}}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default SearchIcon;

// ChevronDown.tsx
import React from "react";

type Props = {
  size?: number;
  className?: string;
};

const ChevronDown = ({ size = 16, className = "" }: Props) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default ChevronDown;

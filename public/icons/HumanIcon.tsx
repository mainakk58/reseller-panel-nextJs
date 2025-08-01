import { SVGProps } from "react";

export function HumanIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="5.5" r="2.5"></circle>
        <path d="M2.73 11.9a5 5 0 0 1 8.54 0"></path>
        <circle cx="7" cy="7" r="6.5"></circle>
      </g>
    </svg>
  );
}

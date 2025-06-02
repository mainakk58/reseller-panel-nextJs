// components/icons/ChevronUp.tsx

type Props = {
  size?: number;
  className?: string;
};

const ChevronUp = ({size = 16, className = ""}: Props) => (
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
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export default ChevronUp;

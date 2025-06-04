export default function HistoryIcon({className = "w-6 h-6 text-gray-700"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v5h5" />
      <path d="M3.05 13a9 9 0 1 0 2.13-7.74" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

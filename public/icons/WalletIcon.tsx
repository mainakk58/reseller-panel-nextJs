export default function WalletIcon({className = ""}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M21 8H4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a0 0 0 0 1 0 0Z" />
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <circle cx="17" cy="14" r="1" />
      </svg>
    </>
  );
}

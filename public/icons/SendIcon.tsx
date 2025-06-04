export default function SendIcon({className = ""}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M22 2L11 13" />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

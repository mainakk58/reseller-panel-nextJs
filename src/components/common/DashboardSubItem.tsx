import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function DashboardSubItem({href, onClick, children}: Props) {
  const commonClass =
    "flex items-center gap-2 text-md bg-blue-300 rounded hover:bg-blue-300 transition";

  if (href) {
    return (
      <Link href={href} className={commonClass}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={commonClass}>
      {children}
    </button>
  );
}

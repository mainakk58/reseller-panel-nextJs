import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <AuthenticationForm /> */}
      <div className="flex gap-4">

      <Link href={"/teacher"}>Teacher</Link>
      <Link href={"/reseller"}>Reseller</Link>
      </div>
    </>
  );
}

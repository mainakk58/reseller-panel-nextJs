import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-[300px] flex justify-evenly">
        <Link href={"/teacher"}>Teacher</Link>
        <Link href={"/reseller"}>reseller</Link>
      </div>
    </>
  );
}

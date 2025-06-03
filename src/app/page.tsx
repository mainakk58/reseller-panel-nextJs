import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <AuthenticationForm /> */}

      <Link href={"/teacher"}>Teacher</Link>
    </>
  );
}

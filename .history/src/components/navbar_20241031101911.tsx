import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30}></Image>
        </Link>
        <div className="flex items-center gap-5 text-black ">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                {" "}
                <span className="max-md:hidden">Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span>Log out</span>
                </button>
              </form>

              <Link href={`/user/${session.id}`}>
                <span>{session?.user.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit">
                  <span>Log in</span>
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
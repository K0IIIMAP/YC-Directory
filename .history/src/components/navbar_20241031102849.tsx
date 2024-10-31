import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/lib/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

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
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden"></BadgePlus>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Log Out</span>

                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link
                href={`/user/${session.id}`}
                className="flex justify-center items-center"
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image}
                    alt={session?.user?.name}
                  />
                  <AvatarFallback className="w-full h-full">AV</AvatarFallback>
                </Avatar>
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
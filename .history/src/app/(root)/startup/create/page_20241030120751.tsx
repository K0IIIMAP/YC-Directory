import StartupForm from "@/components/startup-form";
import { auth } from "@/lib/auth";
import React from "react";

export default async function Page() {
  const session = await auth();
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your Startup</h1>

        <StartupForm />
      </section>
    </>
  );
}

import StartupForm from "@/components/startup-form";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your Startup</h1>

        <StartupForm />
      </section>
    </>
  );
}

import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartupCard, { StartupCardType } from "./startup-card";

export default async function UserStartups({ id }: { id: string }) {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
  // sleep for 3 sec
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      {startups.length > 0 ? (
        startups.map((post: StartupCardType) => (
          <StartupCard key={post._id} post={post} />
        ))
      ) : (
        <p className="no-results">No startups found</p>
      )}
    </>
  );
}

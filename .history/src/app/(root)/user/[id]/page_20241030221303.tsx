import { auth } from "@/lib/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();
  const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });
  if (!user) return notFound();
  console.log(id, session.id);
  return <div>Pag</div>;
}

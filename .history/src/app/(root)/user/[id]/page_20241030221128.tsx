import { auth } from "@/lib/auth";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();
  console.log(id, session.id);
  return <div>Pag</div>;
}

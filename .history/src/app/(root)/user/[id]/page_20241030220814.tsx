import React from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return <div>Page</div>;
}

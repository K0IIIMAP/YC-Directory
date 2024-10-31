"use server";

import { auth } from "./auth";

export const createPitch = async (
  state: any,
  form: formData,
  pitch: string
) => {
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not signed id ",
      status: "ERROR",
    });
};

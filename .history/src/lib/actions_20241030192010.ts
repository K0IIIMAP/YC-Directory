"use server";

import { auth } from "./auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";

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

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string, { lower: true, strict: true });
};

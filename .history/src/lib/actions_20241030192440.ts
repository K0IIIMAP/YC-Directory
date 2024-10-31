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
  console.log(session.id);
  if (!session)
    return parseServerActionResponse({
      error: "Not signed id ",
      status: "ERROR",
    });

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string, { lower: true, strict: true });
  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: { _type: slug, current: slug },
      author: {
        _type: "reference",
        _ref: session.id,
      },
    };
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};

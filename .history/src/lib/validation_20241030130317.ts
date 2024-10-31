import { z } from "zod";
export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        if (contentType?.startsWith("image/")) {
          return true;
        } else {
          return false;
        }
      } catch {
        retrun false
      }
    }),
});
"use client";
import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";

export default function StartupForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        pitch,
        link: formData.get("link"),
      };
      await formSchema.parseAsync(formValues);
      console.log(formValues);

      //   const result = await createIdea(prevState, formData, pitch);

      //   console.log(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors);
        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }
    }
    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
      error: "",
      status: "INITITAL",
    });
    return (
      <form action={formAction} className="startup-form">
        <div>
          <label htmlFor="title" className="startup-form_label">
            Title
          </label>
          <Input
            id="title"
            name="title"
            className="startup-form_input"
            required
            placeholder="Startup title"
          />
          {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="description" className="startup-form_label">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Startup description"
            className="startup-form_textarea"
          ></Textarea>
          {errors.description && (
            <p className="startup-form_error">{errors.description}</p>
          )}
        </div>
        <div>
          <label htmlFor="category" className="startup-form_label">
            Cateogyr
          </label>
          <Input
            id="category"
            name="category"
            className="startup-form_input"
            required
            placeholder="Startup Category (Sports, Games...)"
          />
          {errors.category && (
            <p className="startup-form_error">{errors.category}</p>
          )}
        </div>
        <div>
          <label htmlFor="link" className="startup-form_label">
            Image URL
          </label>
          <Input
            id="link"
            name="link"
            className="startup-form_input"
            required
            placeholder="Startup image URL"
          />
          {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>
        <div data-color-mode="light">
          <label htmlFor="pitch" className="startup-form_label">
            Pitch
          </label>
          <MDEditor
            value={pitch}
            id="pitch"
            preview="edit"
            height={300}
            style={{ borderRadius: 20, overflow: "hidden", color: "black" }}
            onChange={() => setPitch(pitch as string)}
            textareaProps={{
              placeholder: "Describe your idea",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
          {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>
        <Button
          type="submit"
          className="startup-form_btn text-white"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
          <Send className="size-6 ml-2" />
        </Button>
      </form>
    );
  };
}
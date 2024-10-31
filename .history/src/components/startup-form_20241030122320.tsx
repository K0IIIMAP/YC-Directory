"use client";
import React from "react";
import { Input } from "./ui/input";

export default function StartupForm() {
  return (
    <form className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startu-form_input"
          required
          placeholder="Startup title"
        />
      </div>
    </form>
  );
}

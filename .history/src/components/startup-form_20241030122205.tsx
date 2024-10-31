"use client";
import React from "react";
import { Input } from "./ui/input";

export default function StartupForm() {
  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input id="title" />
      </div>
    </form>
  );
}

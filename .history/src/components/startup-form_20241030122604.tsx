"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

export default function StartupForm() {
    const [errors, setErrors] = useState(<Record<string,string>>{});


  return (
    <form className="startup-form">
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
    </form>
  );
}

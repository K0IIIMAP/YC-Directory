import React from "react";
import Form from "next/form";
import SearchFormResetBtn from "./search-form-reset-btn";
import { Search } from "lucide-react";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormResetBtn />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-4" />
        </button>
      </div>
    </Form>
  );
}

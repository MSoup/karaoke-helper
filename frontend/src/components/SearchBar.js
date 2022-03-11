// Search bar component on main page
import React, { useState, useEffect, useCallback } from "react";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  // useEffect(() => {
  //   onSearch(term);
  // }, [term, onSearch]);

  return (
    <section className="search">
      <form onSubmit={event => event.preventDefault()}>
        <input
          spellCheck="false"
          placeholder="Search Artists"
          id="search-bar"
          name="search"
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}
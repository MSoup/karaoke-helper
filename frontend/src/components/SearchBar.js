// Search bar component on main page
import React, { useState, useEffect, useCallback } from "react";

export default function SearchBar(props) {
  function useDebounce(input, ms) {
    const [debounced, setDebounced] = useState("");
  
    useEffect(() => {
      const timeout = setTimeout(() => setDebounced(input), ms);
      return () => clearTimeout(timeout);
    }, [input, ms]);
  
    return debounced;
  }

  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form onSubmit={event => event.preventDefault()}>
        <input
          spellCheck="false"
          placeholder="Search by Keyword"
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
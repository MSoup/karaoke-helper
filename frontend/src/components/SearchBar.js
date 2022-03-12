// Search bar component on main page
import { Cancel, Search } from "@mui/icons-material";
import { IconButton, Input, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect, useCallback } from "react";

export default function SearchBar(props) {
  const {type} = props;
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
    <Box sx={{ flexGrow: 1 }}>
      <form className="search" onSubmit={event => event.preventDefault()}>
        <Search fontSize="large" />
        <InputBase
          spellCheck="false"
          placeholder={`Search by ${type}`}
          id="search-bar"
          name="search"
          type="search"
          value={value}
          onChange={event => setValue(event.target.value)}
          fullWidth
          />
        <Cancel fontSize="large" />
      </form>
    </Box>
  );
}
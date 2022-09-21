import './App.css';

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

// import SearchBar from './components/poke_search.js'

const SearchBar = ({setQuery}) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setQuery(e.target.value);
      }
      }}
      label="Enter the name of the Pokemon"
      variant="outlined"
      placeholder="Pokemon name"
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "red" }} />
    </IconButton>
  </form>
);

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {query}
    </div>
  );
}

export default App;

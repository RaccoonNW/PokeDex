import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Search from './Search';
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

  const [pokemon, setPokemon] = useState()
  const [search, setSearch] = useState()


  function handleClick(e) {
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((r) => r.json())
    .then((data) => setPokemon(data))
  }



  return (
    <div className="wrapper">
      <div className='searchbar-wrapper'>
        <Search setSearch={setSearch} handleClick={handleClick}/>
      </div>
      <div className='card-wrapper'>
        <Card pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;

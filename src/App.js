import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Search from './Search';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [pokemon, setPokemon] = useState('')
  const [search, setSearch] = useState()
  const [error, setError] = useState()


  function handleClick(e) {
    // e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((r) => r.json())
    .then((data) => setPokemon(data))
    .catch(err => {
      setError('Pokemon Not Found - Please Try Again')
    })
  }





  return (
    <div className="wrapper">
      <div className='searchbar-wrapper'>
        <Search setSearch={setSearch} handleClick={handleClick}/>
      </div>

      {(error === 'Pokemon Not Found - Please Try Again')
          ?
        <div className='error-div'>
          {error}
        </div>
          :
        <div className='card-wrapper'>
          <Card pokemon={pokemon}/>
        </div> 
      }
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Search from './Search';
import Battle from './Battle';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [pokemonLeft, setPokemonLeft] = useState('')
  const [searchLeft, setSearchLeft] = useState()
  const [pokemonRight, setPokemonRight] = useState('')
  const [searchRight, setSearchRight] = useState()
  const [error, setError] = useState()
  const [hide, setHide] = useState(true)


  function handleClickLeft(e) {
    // e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchLeft}`)
    .then((r) => r.json())
    .then((data) => setPokemonLeft(data))
    .catch(err => {
      alert('Pokemon Not Found - Please Try Again')
    })
  }

  function handleClickRight(e) {
    // e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchRight}`)
    .then((r) => r.json())
    .then((data) => setPokemonRight(data))
    .catch(err => {
      alert('Pokemon Not Found - Please Try Again')
    })
  }




  return (
    <div className="wrapper">
      <div className='searchbar-wrapper'>
        <Search setSearch={setSearchLeft} handleClick={handleClickLeft}/>
        <Search setSearch={setSearchRight} handleClick={handleClickRight}/>
      </div>
        <div className='card-wrapper'>
          <Card pokemon={pokemonLeft}/>
          <div className='battle-wrapper' hidden={hide}>
            <Battle pokemonLeft={pokemonLeft} pokemonRight={pokemonRight} setHide={setHide} />
          </div>
          <Card pokemon={pokemonRight}/>
        </div>
    </div>
  );
}

export default App;

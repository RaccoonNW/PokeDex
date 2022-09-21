import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Search from './Search';

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

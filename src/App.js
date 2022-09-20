import { useState } from 'react';
import './App.css';
import Pokedex from './Pokedex';

function App() {

  const [pokemon, setPokemon] = useState({})

  function handleSearch() {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
      .then((r) => r.json())
      .then((data) => setPokemon(data))
  }

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <Pokedex pokemon={pokemon}/>

      <button onClick={handleSearch}>bulbasaur</button>
    </div>
  );
}

export default App;

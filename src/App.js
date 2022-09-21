import { useEffect, useState } from 'react';
import './App.css';
import Pokedex from './Pokedex';

function App() {

  const [pokemon, setPokemon] = useState()


  function handleClick() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((r) => r.json())
    .then((data) => setPokemon(data))
  }



  return (
    <div className="wrapper">
      <Pokedex pokemon={pokemon}/>
      <button onClick={handleClick}>Pokemon!</button>
    </div>
  );
}

export default App;

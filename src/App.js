import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  const [pokemon, setPokemon] = useState()


  function handleClick() {
    fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then((r) => r.json())
    .then((data) => setPokemon(data))
  }



  return (
    <div className="wrapper">
      <Card pokemon={pokemon}/>
      <button onClick={handleClick}>Pokemon!</button>
    </div>
  );
}

export default App;

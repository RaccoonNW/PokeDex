import './App.css';
import Card from "./Card"

function Pokedex({pokemon}) {

    // const pokemonMoves = pokemon.moves.map((move) => {
    //     <Card

    //     />
    // })

    return (
        <div>
            <Card pokemon={pokemon}/>
        </div>
    )
}

export default Pokedex
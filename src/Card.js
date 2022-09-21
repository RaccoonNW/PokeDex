import './App.css';

function Card({pokemon}) {
        

    // console.log(pokemon.abilities[0].ability.name)
    

    // const pokemonMoves = pokemon.moves.map((move) => {
    //     if(move) {
    //         return (
    //             <li>{move.name}</li>
    //         )
    //     }
    // })



    if(pokemon) {
        return (
            <div className="main-card">

                <div className='card-name'>
                    <h3>{pokemon.name}</h3>
                    <h4>{pokemon.types[0].type.name}</h4>
                </div>

                <div className='card-img'>
                    <img src={pokemon.sprites.front_default} alt='pokemon'/>
                </div>

                <div className='card-ability'>
                    <p>
                        {pokemon.abilities[0].ability.name}
                    </p>

                </div>

                <div className='card-attack'>
                    <p>{pokemon.moves[0].move.name}</p>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Nothing</h1>
        )
    }
}

export default Card
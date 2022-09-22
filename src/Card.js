import './App.css';
import { useEffect, useState } from 'react'

function Card({pokemon}) {
        
    let pokeName

    if(pokemon) {
        pokeName = capitalizeFirstLetter(pokemon.name)
        let hp = pokemon.stats[0].base_stat;
        let attack = pokemon.stats[1].base_stat;
        let defense = pokemon.stats[2].base_stat;
        let specialAttack = pokemon.stats[3].base_stat;
        let specialDefense = pokemon.stats[4].base_stat;
        let speed = pokemon.stats[5].base_stat;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    if(pokemon) {
        return (
            <div className="main-card">

                <div className={`card-name ${pokemon.types[0].type.name}` + 1}>
                    <div className='card-name-text'>
                        <h3>{pokeName}</h3>
                        <h4>{pokemon.types[0].type.name}</h4>
                    </div>
                    <div className={`card-img ${pokemon.types[0].type.name}`}>
                        <img src={pokemon.sprites.front_default} alt='pokemon'/>
                    </div>
                </div>

                {/* <div className={`card-img ${pokemon.types[0].type.name}`}>
                    <img src={pokemon.sprites.front_default} alt='pokemon'/>
                </div> */}

                <div className={`card-ability ${pokemon.types[0].type.name}` + 1}>
                    <p>
                        {pokemon.abilities[0].ability.name}
                    </p>

                </div>

                <div className={`card-attack ${pokemon.types[0].type.name}` + 1}>
                    <p>{pokemon.moves[0].move.name}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                
            </div>
        )
    }
}

export default Card
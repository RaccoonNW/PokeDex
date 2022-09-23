import './App.css';
function Card({ pokemon }) {
        
    let pokeName
    let hp
    let attack
    let defense
    let specialAttack
    let specialDefense
    let speed

    if(pokemon) {
        pokeName = capitalizeFirstLetter(pokemon.name)
        hp = pokemon.stats[0].base_stat;
        attack = pokemon.stats[1].base_stat;
        defense = pokemon.stats[2].base_stat;
        specialAttack = pokemon.stats[3].base_stat;
        specialDefense = pokemon.stats[4].base_stat;
        speed = pokemon.stats[5].base_stat;
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
                        <h4>{hp + ' HP'}</h4>
                    </div>
                    <div className={`card-img ${pokemon.types[0].type.name}`}>
                        <img src={pokemon.sprites.front_default} alt='pokemon'/>
                    </div>
                </div>
                <div className={`card-ability ${pokemon.types[0].type.name}` + 1}>
                    <table>
                        <tr>
                            <th>Attack</th> 
                            <th> <progress className='progress' id="health" value={attack} max="216"></progress></th>
                        </tr>
                        <tr>
                            <th>Defense</th>
                            <th><progress className='progress' id="defense" value={defense} max="250"></progress></th>
                        </tr>
                        <tr>
                            <th>Speed</th>
                            <th><progress className='progress' id="speed" value={speed} max="200"></progress></th>
                        </tr>
                    </table>
                </div>

                <div className={`card-attack ${pokemon.types[0].type.name}` + 1}>
                <table>
                        <tr>
                            <th>Special Attack</th>
                            <th><progress className='progress' id="special-attack" value={specialAttack} max="194"></progress></th>
                        </tr>
                        <tr>
                            <th>Special Defense</th>
                            <th><progress className='progress' background="yellow" color='yellow' id="special-defense" value={specialDefense} max="250"></progress></th>
                        </tr>
                    </table>
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
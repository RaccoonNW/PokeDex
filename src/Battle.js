import { useEffect, useState } from 'react'
import TeamRocket from './Images/TeamRocket.png'

function Battle({pokemonLeft, pokemonRight, setHide}) {

    let battleWinner

    if(pokemonLeft && pokemonRight) {
        fight(pokemonLeft, pokemonRight)
    }

    function score(pokemon) {
        let hp = pokemon.stats[0].base_stat;
        let attack = pokemon.stats[1].base_stat;
        let defense = pokemon.stats[2].base_stat;
    
        return (
          hp + attack + defense
        )
      }
    
      function fight(pokemonLeft, pokemonRight) {
        let scoreLeft = score(pokemonLeft)
        let scoreRight = score(pokemonRight)
        let winner

        console.log(scoreLeft, scoreRight)
        if(scoreLeft < scoreRight) {
            battleWinner = 'Right Wins!'
        }
        else if(scoreLeft > scoreRight) {
            battleWinner = 'Left Wins!'
        }
        else if(scoreLeft === scoreRight) {
            battleWinner = 'Right Wins!'
        } else {
            battleWinner = "Didn't work!"
        }
        setHide(false)
      }

      return (
        <div className='winner-div' hidden={true}>
            <div className='winner-text'>
                <h1>
                    {battleWinner}
                </h1>
            </div>
                <img src={TeamRocket} />
        </div>
      )
}

export default Battle
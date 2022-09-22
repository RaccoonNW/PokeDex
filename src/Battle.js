import { useEffect, useState } from 'react'

function Battle({pokemonLeft, pokemonRight}) {

    let battleWinner

    if(pokemonLeft && pokemonRight) {
        fight(pokemonLeft, pokemonRight)
    }
    
    // function test(pokemonLeft, pokemonRight) {
    //     return (
    //         thing = 8
    //     )
    // }

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
    
        // switch (scoreLeft && scoreRight) {
        //   case (scoreLeft < scoreRight):
        //     battleWinner = 'Right Wins!'
        //   case (scoreLeft > scoreRight):
        //     battleWinner = 'Left Wins!'
        //   case (scoreLeft === scoreRight):
        //     battleWinner = 'Right Wins!'
        //   default:
        //     battleWinner = 'It did not work!'
        // }
      }

    //   useEffect(() => {
    //     fight(pokemonLeft, pokemonRight)
    //   }, [pokemonLeft, pokemonRight])

    //   if(pokemonLeft && pokemonRight) {
    //       fight(pokemonLeft, pokemonRight)
    //   }

      return (
        <div>
            <p>
                {battleWinner}
            </p>

        </div>

      )
}

export default Battle
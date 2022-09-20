import './App.css';
import Card from "./Card"

function Pokedex({pokemon}) {
    return (
        <div>
            <Card pokemon={pokemon}/>
        </div>
    )
}

export default Pokedex
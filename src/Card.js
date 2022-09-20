import './App.css';

function Card({pokemon}) {



    return (
        <div className="main-card">
            <div className='card-name'>{pokemon.name}</div>
            <div className="stats-container">

            </div>
        </div>
    )
}

export default Card
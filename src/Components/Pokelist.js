import React from 'react';
import Pokemon from './Pokemon';




function Pokelist(props) {
    const pokemonHTML = props.data.map(pokemon =>
        <Pokemon info={pokemon} key={pokemon.id} />
    )
    return (
        <div className='list'>
            {pokemonHTML}
        </div>
    )
}

export default Pokelist;
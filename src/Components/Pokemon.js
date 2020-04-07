import React from 'react';

function Pokemon(props) {
    const pokemonType = props.info.types.map(type =>
        <li className='pokemon__type--item' key={type}>{type}</li>
    )

    return (
        <div className='pokemon'>
            <img src={props.info.url}></img>
            <h2>{props.info.name}</h2>
            <ul className='pokemon__type'>
                {pokemonType}
            </ul>

        </ div>
    )
}

export default Pokemon;
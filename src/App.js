import React from 'react';
import { useState } from 'react';
import './App.scss';
import Pokelist from './Components/Pokelist'
import info from './info.json'



function App() {
  const [pokemons, setPokemon] = useState(info)

  return (
    <div className="app">
      <h1 className='app__title'>Mi lista de pokemon</h1>
      <Pokelist data={pokemons} />
    </div>
  );
}

export default App;

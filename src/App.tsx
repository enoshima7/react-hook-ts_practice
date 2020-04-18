import React, { useState } from 'react';
import { PokemonSearch } from './Components/PokemonSearch';
interface Pokemon {
  name: string;
  numberOfAbilites: number;
  imageUrl: string;
}
interface State {
  pokemon: Pokemon;
  error: boolean;
}
function App() {
  const [text, setText] = useState<string | undefined>('');
  const [state, setState] = useState<State>({
    pokemon: { name: '', numberOfAbilites: 0, imageUrl: '' },
    error: false,
  });
  const { error, pokemon } = state;
  return (
    <div className='App'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`https://pokeapi.co/api/v2/pokemon/${text}`).then((res) => {
            if (res.status !== 200) {
              setState((currentState) => {
                return {
                  ...currentState,
                  error: true,
                };
              });
              return;
            }
            res.json().then((res) => {
              setState({
                pokemon: {
                  name: res.name,
                  numberOfAbilites: res.abilities.length,
                  imageUrl: res.sprites.front_default,
                },
                error: false,
              });
            });
          });
        }}
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type='text'
        />
        <button>搜索</button>
      </form>
      <div>
        {error ? (
          <p>Pokemon not found, please try again</p>
        ) : (
          <div>
            <img src={pokemon.imageUrl} alt='pokemon' />
            <p>
              {pokemon.name} has {pokemon.numberOfAbilites} abilities.
            </p>
          </div>
        )}
      </div>
      <PokemonSearch name='TheShy' numberOfPokemon={1} />
    </div>
  );
}

export default App;

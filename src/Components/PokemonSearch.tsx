import React from 'react';
interface Props {
  name: string;
  numberOfPokemon: number;
}
export const PokemonSearch: React.FC<Props> = ({ name, numberOfPokemon }) => {
  return (
    <div>
      <p>{`使用者${name}拥有${numberOfPokemon}个精灵`}</p>
    </div>
  );
};

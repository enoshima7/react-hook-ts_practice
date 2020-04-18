import { useEffect, useState } from 'react';

export const useFetch = (name) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      if (res.status !== 200) {
        console.log('sorry');
      }
    });
  }, [name]);
  return data;
};

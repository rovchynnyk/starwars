import { fetchData } from './utils';

export const getCharactersByPage = async (page: number) => {
  return fetchData(`https://swapi.dev/api/people/?page=${page}`);
};

export const getCharactersBySearch = async (page: number, search: string) => {
  return fetchData(
    `https://swapi.dev/api/people/?search=${search}&page=${page}`
  );
};

export const getCharacter = async (id: string) => {
  return fetchData(`https://swapi.dev/api/people/${id}`);
};

export const getStarship = async (id: string) => {
  return fetchData(`https://swapi.dev/api/starships/${id}`);
};

export const getSpecies = async (id: string) => {
  return fetchData(`https://swapi.dev/api/species/${id}`);
};

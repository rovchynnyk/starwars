import { fetchData } from './utils';

export const getCharactersByPage = async (page: number = 1) => {
  return fetchData(`https://swapi.dev/api/people/?page=${page}`);
};

export const getCharactersBySearch = async (search: string) => {
  return fetchData(`https://swapi.dev/api/people/?search=${search}`);
};

export const getCharacter = async (id: string) => {
  return fetchData(`https://swapi.dev/api/people/${id}`);
};

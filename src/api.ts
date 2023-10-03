export const getCharacters = async (page: number = 1) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return response.json();
};

export const getCharacter = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  return response.json();
};

export const getCharactersBySearch = async (search: string) => {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${search}`
  );
  return response.json();
};

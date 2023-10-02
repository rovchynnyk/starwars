import { Link } from 'react-router-dom';

import { Character } from './character';

import type { CharacterT } from '../types';

type PropsT = Readonly<{
  characters: ReadonlyArray<CharacterT>;
}>;

export const CharacterList = ({ characters }: PropsT) => {
  console.log(111, characters);

  return (
    <>
      {characters.map((character) => {
        return (
          <Link
            className="block text-black no-underline hover:bg-gray-100 hover:text-blue-800 text-left px-4 py-2"
            key={character.name}
            to={character.url}
          >
            <Character {...character} />
          </Link>
        );
      })}
    </>
  );
};

import { Link } from 'react-router-dom';

import { extractDigit } from '../../utils';

import { CharacterSummary } from './character-summary';

import type { CharacterT } from '../../types';

type PropsT = Readonly<{
  characters: ReadonlyArray<CharacterT>;
}>;

export const CharacterList = ({ characters }: PropsT) => {
  return (
    <ul className="w-80">
      {characters.map((character) => {
        const id = extractDigit(character.url);

        return (
          <li key={character.name}>
            <Link
              className="block text-black no-underline hover:bg-gray-100 hover:text-blue-800 px-4 py-2"
              to={`/characters/${id}`}
            >
              <CharacterSummary {...character} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

import type { CharacterT } from '../../types';
import { formatDateTime } from '../../utils';

export const CharacterSummary = ({
  name,
  height,
  created,
  birth_year,
}: CharacterT) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">{name}</h2>

      <ul>
        <li>Height: {height} cm</li>
        <li>Birth year: {birth_year}</li>
        <li>Created: {formatDateTime(created)}</li>
      </ul>
    </div>
  );
};

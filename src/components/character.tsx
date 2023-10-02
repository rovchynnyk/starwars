import { Link } from 'react-router-dom';
import type { CharacterT } from '../types';
import { useMemo } from 'react';

type PropsT = Readonly<{
  detailed?: boolean;
}> &
  CharacterT;

export const Character = ({
  detailed = false,
  name,
  hair_color,
  birth_year,
  height,
  mass,
  gender,
  eye_color,
  homeworld,
  vehicles,
  starships,
  created,
}: PropsT) => {
  const createdDate = useMemo(() => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
      .format(new Date(created))
      .replace(',', '');
  }, [created]);

  return (
    <>
      <h2 className="font-semibold text-lg">{name}</h2>

      <ul className="list-none">
        <li>Birth year {birth_year}</li>
        <li>Height {height}</li>
        <li>Date Created: {createdDate}</li>

        {detailed ? (
          <>
            <li>Hair color {hair_color}</li>
            <li>Mass {mass}</li>
            <li>Gender {gender}</li>
            <li>Eye color {eye_color}</li>
            <li>Homeworld {homeworld}</li>

            {/* todo move it into separate component later */}
            {starships.length ? (
              <li>
                Starhips{' '}
                {Array.from({ length: starships.length }).map((_, index) => (
                  <Link key={index} to={starships[index]} className="mr-2">
                    {index + 1}
                  </Link>
                ))}
              </li>
            ) : null}

            {vehicles.length ? (
              <li>
                Vehicles{' '}
                {Array.from({ length: vehicles.length }).map((_, index) => (
                  <Link key={index} to={vehicles[index]} className="mr-2">
                    {index + 1}
                  </Link>
                ))}
              </li>
            ) : null}
          </>
        ) : null}
      </ul>
    </>
  );
};

import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getCharacter } from '../../api';

import { Loader } from '../loader';

export const CharacterDetails = () => {
  const { id = '' } = useParams();

  const { status, isLoading, data } = useQuery(['character', id], async () =>
    getCharacter(id)
  );

  if (isLoading) {
    return <Loader />;
  }

  console.log(55, data);

  // todo it might be better to not to destruct data here
  const {
    hair_color,
    mass,
    gender,
    eye_color,
    homeworld,
    starships,
    vehicles,
  } = data;

  console.log(id);
  return (
    <div>
      Character
      <>
        <li>Hair color {hair_color}</li>
        <li>Mass {mass}</li>
        <li>Gender {gender}</li>
        <li>Eye color {eye_color}</li>
        <li>Homeworld {homeworld}</li>

        {starships?.length ? (
          <li>
            Starhips{' '}
            {Array.from({ length: starships.length }).map((_, index) => (
              <Link key={index} to={starships[index]} className="mr-2">
                {index + 1}
              </Link>
            ))}
          </li>
        ) : null}

        {vehicles?.length ? (
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
    </div>
  );
};

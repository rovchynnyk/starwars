import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { KeyValueList } from '../key-value-list';
import { Starship } from '../starship';

import { getCharacter } from '../../api';

import { Loader } from '../loader';
import { extractDigit } from '../../utils';

export const CharacterDetails = () => {
  const { id = '' } = useParams();

  const { status, isLoading, data } = useQuery(['character', id], async () =>
    getCharacter(id)
  );

  if (isLoading) {
    return <Loader />;
  }

  // return <div>Character</div>;

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

  console.log(data);

  return (
    <div>
      Character
      <>
        <KeyValueList
          data={{
            'Hair color': hair_color,
            Mass: mass,
            Gender: gender,
            'Eye color': eye_color,
            Homeworld: homeworld,
          }}
        />

        {/* {starships?.length ? (
          <li>
            Starhips{' '}
            {Array.from({ length: starships.length }).map((_, index) => (
              <Link key={index} to={starships[index]} className="mr-2">
                {index + 1}
              </Link>
            ))}
          </li>
        ) : null} */}

        {starships?.map((starship) => {
          const id = extractDigit(starship.url);

          return <Starship id={id} />;
        })}

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

import { Link, useParams } from 'react-router-dom';

export const CharacterDetails = ({
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
}) => {
  const { id } = useParams();
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
    </div>
  );
};

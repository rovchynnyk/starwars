import astronautLogo from '../assets/astronaut.svg';

import { formatDateTime } from '../utils';

type PropsT = Readonly<{
  name: string;
  birth_year: string;
  height: string;
  created: Date;
}>;

export const Personal = ({ name, birth_year, height, created }: PropsT) => {
  return (
    <>
      <div className="flex">
        <img
          src={astronautLogo}
          className="h-8 mr-2 grayscale"
          alt="Astronaut logo"
        />

        <h2 className="text-2xl font-bold mb-2">Personal Data</h2>
      </div>

      <h3 className="font-bold text-xl mb-1">{name}</h3>

      <ul className="list-none mb-4">
        <li>
          <b>Height:</b> {height} cm
        </li>
        <li>
          <b>Birth year:</b> {birth_year}
        </li>
        <li>
          <b>Created:</b> {formatDateTime(created)}
        </li>
      </ul>
    </>
  );
};

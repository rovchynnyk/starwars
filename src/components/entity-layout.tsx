import { useMemo } from 'react';

import { capitalize, extractDigit } from '../utils';
import starshipLogo from '../assets/starship.svg';
import speciesLogo from '../assets/species.svg';

import { Starship } from './starship';
import { Species } from './species';

type PropsT = Readonly<{
  entities: string[];
  entityType: 'species' | 'starship';
}>;

const ENTITIES_MAP = {
  starship: {
    logo: starshipLogo,
    Component: Starship,
  },
  species: {
    logo: speciesLogo,
    Component: Species,
  },
} as const;

export const EntityLayout = ({ entities, entityType }: PropsT) => {
  const { logo, Component } = ENTITIES_MAP[entityType];

  const title = useMemo(() => {
    return capitalize(entityType);
  }, [entityType]);

  if (!entities.length) {
    return null;
  }

  return (
    <div className="flex flex-col text-left">
      <div className="flex">
        <img src={logo} className="h-8 mr-2 grayscale" alt={`${title} logo`} />

        <h2 className="text-2xl font-bold mb-2">{title}</h2>
      </div>

      <ul className="list-none">
        {entities.map((entity) => {
          const id = extractDigit(entity);

          return (
            <li className="mb-4" key={entity}>
              <Component id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

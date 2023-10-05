import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getCharacter } from '../../api';
import { Personal } from '../personal';
import { EntityLayout } from '../entity-layout';
import { Loader } from '../loader';

export const CharacterDetails = () => {
  const { id = '' } = useParams();

  const { data, isLoading } = useQuery(['character', id], async () =>
    getCharacter(id)
  );

  if (isLoading) {
    return <Loader />;
  }

  const { starships, name, species, ...personal } = data;

  return (
    <div>
      <h1 className="font-bold text-3xl mb-6">{name}</h1>

      <div className="text-left">
        <Personal {...personal} />

        <EntityLayout entities={species} entityType="species" />

        <EntityLayout entities={starships} entityType="starship" />
      </div>
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useOverlay } from '../components/overlay-provider';
import { getCharacter } from '../api';
import { Personal } from '../components/personal';
import { EntityLayout } from '../components/entity-layout';

export const Details = () => {
  const { id = '' } = useParams();
  const { showOverlay, hideOverlay } = useOverlay();

  const { data, isLoading } = useQuery(['character', id], async () => {
    showOverlay();

    const res = await getCharacter(id);

    hideOverlay();

    return res;
  });

  if (isLoading) {
    return null;
  }

  const { starships, species, ...personal } = data;

  return (
    <div className="text-left py-5">
      <Personal {...personal} />

      <EntityLayout entities={species} entityType="species" />

      <EntityLayout entities={starships} entityType="starship" />
    </div>
  );
};

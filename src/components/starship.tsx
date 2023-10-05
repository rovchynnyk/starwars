import { useQuery } from 'react-query';

import { Skeleton } from './skeleton';
import { getStarship } from '../api';

type PropsT = Readonly<{
  id: string;
}>;

export const Starship = ({ id }: PropsT) => {
  const { data, isLoading } = useQuery(['starship', id], async () => {
    const res = await getStarship(id);

    return res;
  });

  if (isLoading) {
    return <Skeleton />;
  }

  const { name, model, passengers } = data;

  return (
    <>
      <h3 className="font-bold text-xl mb-1">{name}</h3>

      <ul className="list-none">
        <li>
          <b>Model</b>: {model}
        </li>
        <li>
          <b>Passengers</b>: {passengers}
        </li>
      </ul>
    </>
  );
};

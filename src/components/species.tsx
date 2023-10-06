import { useQuery } from 'react-query';

import { getSpecies } from '../api';

import { Skeleton } from './skeleton';

type PropsT = Readonly<{
  id: string;
}>;

export const Species = ({ id }: PropsT) => {
  const { data, isLoading } = useQuery({
    queryKey: ['species', id],
    queryFn: async () => await getSpecies(id),
  });

  if (isLoading) {
    return <Skeleton />;
  }

  const { name, average_lifespan, language, classification } = data;

  return (
    <>
      <h3 className="font-bold text-xl mb-1">{name}</h3>

      <ul className="list-none">
        <li>
          <b>Average Lifespan</b>: {average_lifespan}
        </li>
        <li>
          <b>Classification</b>: {classification}
        </li>
        <li>
          <b>Language</b>: {language}
        </li>
      </ul>
    </>
  );
};

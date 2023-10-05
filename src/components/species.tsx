import { useQuery } from 'react-query';

import { getSpecies } from '../api';

import { Skeleton } from './skeleton';

type PropsT = Readonly<{
  id: string;
}>;

export const Species = ({ id }: PropsT) => {
  const { data, isLoading } = useQuery(
    ['species', id],
    async () => await getSpecies(id)
  );

  if (isLoading) {
    return <Skeleton />;
  }

  const { name, average_lifespan, language, classification } = data;

  return (
    <ul className="list-none">
      <li>
        <b>Species</b>: {name}
      </li>
      <li>
        <b>Language</b>: {language}
      </li>
      <li>
        <b>Classification</b>: {classification}
      </li>
      <li>
        <b>Average Lifespan</b>: {average_lifespan}
      </li>
    </ul>
  );
};

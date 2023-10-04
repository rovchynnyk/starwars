import { useQuery } from 'react-query';

import { Loader } from './loader';
import { KeyValueList } from './key-value-list';
import { getStarship } from '../api';

type PropsT = Readonly<{
  id: string;
}>;

export const Starship = ({ id }: PropsT) => {
  const { data } = useQuery(['starship', id], async () => {
    const res = getStarship(id);

    console.log(1, res);

    return res;
  });

  console.log(data);

  return <KeyValueList data={{ 'Starship name': 'Starship name' }} />;
};

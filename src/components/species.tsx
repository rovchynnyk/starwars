import { useQuery } from 'react-query';

import { KeyValueList } from './key-value-list';
import { getSpecies } from '../api';

type PropsT = Readonly<{
  id: string;
}>;

export const Species = ({ id }: PropsT) => {
  const { data } = useQuery(['species', id], async () => {
    const res = getSpecies(id);

    console.log(2, res);

    return res;
  });

  return <KeyValueList data={{ 'Species name': 'Species name' }} />;
};

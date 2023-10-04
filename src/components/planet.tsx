import { useQuery } from 'react-query';

import { getPlanet } from '../api';

import { KeyValueList } from './key-value-list';

type PropsT = Readonly<{
  id: string;
}>;

export const Planet = ({ id }: PropsT) => {
  const { data } = useQuery(['planet', id], async () => {
    const res = getPlanet(id);
    console.log(4, res);
    return res;
  });

  return <KeyValueList data={{ 'Planet name': 'Planet name' }} />;
};

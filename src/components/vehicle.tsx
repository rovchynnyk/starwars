import { useQuery } from 'react-query';

import { getVehicle } from '../api';

import { KeyValueList } from './key-value-list';

type PropsT = Readonly<{
  id: string;
}>;

export const Vehicle = ({ id }: PropsT) => {
  const { data } = useQuery(['vehicle', id], async () => {
    const res = getVehicle(id);
    console.log(3, res);
    return res;
  });

  return <KeyValueList data={{ 'Vehicle name': 'Vehicle name' }} />;
};

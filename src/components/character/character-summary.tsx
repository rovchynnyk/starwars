import { useMemo } from 'react';

import { KeyValueList } from '../key-value-list';

import type { CharacterT } from '../../types';

export const CharacterSummary = ({
  name,
  height,
  created,
  birth_year,
}: CharacterT) => {
  const createdDate = useMemo(() => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
      .format(new Date(created))
      .replace(',', '');
  }, [created]);

  return (
    <>
      <h2 className="font-semibold text-lg">{name}</h2>

      <KeyValueList
        data={{
          'Birth year': birth_year,
          Height: `${height} cm`,
          'Date Created': createdDate,
        }}
      />
    </>
  );
};

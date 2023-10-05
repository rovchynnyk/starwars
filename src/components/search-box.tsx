import { useMemo } from 'react';

import { debounce } from '../utils';

type PropsT = Readonly<{
  onSearch: (searchTerm: string) => void;
}>;

const DEBOUNCED_TIME = 300;

export const SearchBox = ({ onSearch }: PropsT) => {
  const handleChange = useMemo(() => {
    return debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(evt.target.value);
    }, DEBOUNCED_TIME);
  }, [onSearch]);

  return (
    <input
      className="border border-gray-300 rounded-md p-2 my-2 min-w-full"
      type="text"
      placeholder="Search by character name..."
      onChange={handleChange}
    />
  );
};

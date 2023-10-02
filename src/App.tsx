import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { Pagination } from './components/pagination';
import { Logo } from './components/logo';
import { CharacterList } from './components/character-list';
import { Loader } from './components/loader';
import { SearchBox } from './components/search-box';
import { getCharacters, getCharactersBySearch } from './api';
import { useSearchQuery } from './use-search-query';
import './App.css';

import type { CharacterT } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const query = useSearchQuery();

  const currentPage = Number(query.get('page')) || 1;

  const {
    data: { results = [], count } = {},
    isLoading,
    isFetching,
  } = useQuery(
    ['characters', currentPage],
    async () => await getCharacters(currentPage),
    {
      select: (data) => {
        console.log(444, data);
        return data;
      },
      keepPreviousData: true,
      staleTime: Number.POSITIVE_INFINITY,
    }
  );

  const characters = useMemo(() => {
    return results.filter(({ name }: CharacterT) => {
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [results, searchTerm]);

  useEffect(() => {
    document.body.style.overflow = isFetching ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isFetching]);

  if (isLoading) return <Loader />;

  return (
    <>
      {isFetching && (
        <div className="fixed left-0 flex items-center justify-center w-full h-full bg-white/75">
          <Loader />
        </div>
      )}

      <Logo />

      <SearchBox onSearch={setSearchTerm} />

      <CharacterList characters={characters} />

      <Pagination count={count} currentPage={currentPage} />
    </>
  );
}

export default App;

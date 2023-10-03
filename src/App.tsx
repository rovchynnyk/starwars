import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import {
  CharacterList,
  Loader,
  Logo,
  Pagination,
  SearchBox,
} from './components';
import { getCharacters, getCharactersBySearch } from './api';
import { useSearchQuery } from './use-search-query';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const query = useSearchQuery();
  const navigate = useNavigate();

  const currentPage = Number(query.get('page')) || 1;

  const {
    data: { results = [], count } = {},
    isLoading,
    isFetching,
  } = useQuery(
    ['characters', currentPage, searchTerm],
    async () => {
      const { results, count } = await (searchTerm
        ? getCharactersBySearch(searchTerm)
        : getCharacters(currentPage));

      return { results, count };
    },
    {
      keepPreviousData: true,
      staleTime: Number.POSITIVE_INFINITY,
    }
  );

  useEffect(() => {
    document.body.style.overflow = isFetching ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isFetching]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
      query.delete('page');

      navigate(query.toString());
    },
    [navigate, query]
  );

  if (isLoading) return <Loader />;

  return (
    <>
      {isFetching && <Loader />}

      <Logo />

      <SearchBox onSearch={handleSearch} />

      <CharacterList characters={results} />

      <Pagination count={count} currentPage={currentPage} />
    </>
  );
}

export default App;

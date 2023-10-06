import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import { CharacterList } from '../components/character/character-list';
import { Pagination } from '../components/pagination';
import { SearchBox } from '../components/search-box';
import { getCharactersByPage, getCharactersBySearch } from '../api';
import { useSearchQuery } from '../use-search-query';
import { useOverlay } from '../components/overlay-provider';

export const Overview = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const query = useSearchQuery();
  const currentPage = Number(query.get('page')) || 1;

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { showOverlay, hideOverlay } = useOverlay();

  const fetcher = searchTerm ? getCharactersBySearch : getCharactersByPage;

  const {
    data: { results = [], count } = {},
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['characters', currentPage, searchTerm],
    queryFn: async () => {
      showOverlay();

      const { results, count } = await fetcher(currentPage, searchTerm);

      hideOverlay();

      return { results, count };
    },
    keepPreviousData: true,
  });

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);

      query.delete('page');

      navigate(query.toString());
    },
    [navigate, query]
  );

  const totalPages = Math.ceil(count / 10);

  // Prevent scrolling when fetching more data
  useEffect(() => {
    document.body.style.overflow = isFetching ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isFetching]);

  // Prefetch next page
  useEffect(() => {
    if (!isPreviousData && currentPage < totalPages) {
      queryClient.prefetchQuery({
        queryKey: ['characters', currentPage + 1, searchTerm],
        queryFn: async () => await fetcher(currentPage + 1, searchTerm),
      });
    }
  }, [
    currentPage,
    fetcher,
    isPreviousData,
    queryClient,
    searchTerm,
    totalPages,
  ]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <SearchBox onSearch={handleSearch} />

      <CharacterList characters={results} />

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

import { useCallback, useEffect, useState } from 'react';
import { CharacterList, Pagination, SearchBox } from '../components';
import { getCharactersByPage, getCharactersBySearch } from '../api';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../use-search-query';
import { useOverlay } from '../components/overlay-provider';

export const Overview = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const query = useSearchQuery();
  const navigate = useNavigate();

  const { showOverlay, hideOverlay } = useOverlay();

  const currentPage = Number(query.get('page')) || 1;

  const {
    data: { results = [], count } = {},
    isLoading,
    isFetching,
  } = useQuery(
    ['characters', currentPage, searchTerm],
    async () => {
      showOverlay();

      const { results, count } = await (searchTerm
        ? getCharactersBySearch(searchTerm)
        : getCharactersByPage(currentPage));

      hideOverlay();

      return { results, count };
    },
    {
      keepPreviousData: true,
    }
  );

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);

      query.delete('page');

      navigate(query.toString());
    },
    [navigate, query]
  );

  useEffect(() => {
    document.body.style.overflow = isFetching ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isFetching]);

  // todo prefetch the next page and remove todo :)
  // useEffect(() => {
  //   if (!isPreviousData && data?.hasMore) {
  //     queryClient.prefetchQuery({
  //       queryKey: ['projects', page + 1],
  //       queryFn: () => fetchProjects(page + 1),
  //     });
  //   }
  // }, [data, isPreviousData, page, queryClient]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <SearchBox onSearch={handleSearch} />

      <CharacterList characters={results} />

      <Pagination count={count} currentPage={currentPage} />
    </>
  );
};

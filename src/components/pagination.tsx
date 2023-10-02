import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type PropsT = Readonly<{
  count: number;
  currentPage: number;
}>;

export const Pagination = ({ count, currentPage }: PropsT) => {
  const navigate = useNavigate();
  const totalPages = useMemo(() => Math.ceil(count / 10), [count]);

  const handlePageChange = useCallback(
    (page: number) => {
      return () => {
        navigate(`?page=${page}`);

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    },
    [navigate]
  );

  if (totalPages === 1) return null;

  return (
    <div className="p-4">
      <a
        className={`${
          currentPage === 1 ? 'text-black pointer-events-none' : 'text-blue-500'
        } px-3 cursor-pointer hover:text-blue-800`}
        onClick={handlePageChange(currentPage - 1)}
      >
        Previous
      </a>

      {Array.from({ length: totalPages }).map((_, index) => (
        <a
          className={`${
            index + 1 === currentPage
              ? 'pointer-events-none text-black bg-gray-100 rounded-lg'
              : 'text-blue-500'
          } px-3 py-1 cursor-pointer hover:text-blue-800`}
          key={index}
          onClick={handlePageChange(index + 1)}
        >
          {index + 1}
        </a>
      ))}

      <a
        className={`${
          currentPage === totalPages
            ? 'text-black pointer-events-none'
            : 'text-blue-500'
        } px-3 cursor-pointer hover:text-blue-800`}
        onClick={handlePageChange(currentPage + 1)}
      >
        Next
      </a>
    </div>
  );
};

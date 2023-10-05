type Func<T extends readonly unknown[]> = (...args: T) => void;

export const debounce = <T extends readonly unknown[]>(
  func: Func<T>,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const extractDigit = (str: string) => {
  const match = str.match(/(\d+)/);

  return match?.[0] ?? '';
};

export const fetchData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};

export const formatDateTime = (date: Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
    .format(new Date(date))
    .replace(',', '');
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

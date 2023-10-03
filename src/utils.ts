export const debounce = (
  func: (...args: ReadonlyArray<unknown>) => unknown,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: ReadonlyArray<unknown>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const extractDigit = (str: string) => {
  return /\d+/g.exec(str);
};

export const fetchData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};

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

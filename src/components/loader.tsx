import moonLogo from '../assets/moon.svg';

export const Loader = () => {
  return (
    <img
      src={moonLogo}
      className="h-24 py-4 animate-spin grayscale"
      alt="Moon logo"
    />
  );
};

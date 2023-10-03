import moonLogo from '../assets/moon.svg';

export const Loader = () => {
  return (
    <div className="fixed left-0 flex items-center justify-center w-full h-full bg-white/75">
      <img
        src={moonLogo}
        className="h-24 py-4 animate-spin grayscale"
        alt="Moon logo"
      />
    </div>
  );
};

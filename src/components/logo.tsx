import { Link } from 'react-router-dom';

import saturnLogo from '../assets/saturn.svg';

export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-3xl text-center font-bold flex flex-col p-5 hover:text-black"
    >
      <img
        src={saturnLogo}
        className="h-24 py-4 hover:scale-125 transition duration-300 ease-in-out"
        alt="Main logo"
      />
      Star Wars Characters
    </Link>
  );
};

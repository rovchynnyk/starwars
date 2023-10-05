import { Outlet } from 'react-router-dom';

import { Logo } from './components';
import './App.css';

function App() {
  return (
    <>
      <Logo />

      <Outlet />
    </>
  );
}

export default App;

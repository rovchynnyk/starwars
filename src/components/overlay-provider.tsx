import { createContext, useContext, useMemo, useState } from 'react';

import { Loader } from './loader';

type OverlayContextT = Readonly<{
  hideOverlay: () => void;
  showOverlay: () => void;
}>;

export const OverlayContext = createContext<OverlayContextT>({
  hideOverlay: () => {},
  showOverlay: () => {},
});

type PropsT = React.PropsWithChildren;

export const OverlayProvider = ({ children }: PropsT) => {
  const [showLoader, setShowLoader] = useState(false);

  const hideOverlay = () => setShowLoader(false);

  const showOverlay = () => setShowLoader(true);

  const value = useMemo(() => ({ hideOverlay, showOverlay }), []);

  return (
    <OverlayContext.Provider value={value}>
      {showLoader ? <Loader /> : null}

      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};

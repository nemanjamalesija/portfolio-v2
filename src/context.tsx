import React, { useRef } from 'react';
import { refsContextValues } from './types/refContext';

const RefsContext = React.createContext({} as refsContextValues);

const RefsProvider = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();

  return (
    <RefsContext.Provider
      value={{
        navRef,
        heroRef,
        aboutRef,
      }}
    >
      {children}
    </RefsContext.Provider>
  );
};

export { RefsContext, RefsProvider };

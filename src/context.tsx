import React, { useRef } from 'react';
import { refsContextValues } from './types/refContext';

const RefsContext = React.createContext({} as refsContextValues);

const RefsProvider = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef({} as HTMLDivElement);
  const heroRef = useRef({} as HTMLDivElement);
  const aboutRef = useRef({} as HTMLDivElement);

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

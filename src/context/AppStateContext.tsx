import { useMemo, useState, type ReactNode } from 'react';
import { AppStateContext, defaultProfile } from './appState';

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState(defaultProfile);

  const value = useMemo(
    () => ({
      profile,
      updateProfile: setProfile,
    }),
    [profile],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

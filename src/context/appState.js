import { createContext } from 'react';

export const defaultProfile = {
  id: 'usr_01',
  name: 'Atleta',
  age: 28,
  heightCm: 180,
  weightKg: 75,
  goal: 'hypertrophy',
  experienceLevel: 'intermediate',
};

export const AppStateContext = createContext(null);

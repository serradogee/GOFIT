import { createContext } from 'react';
import type { UserProfile } from '../types/domain';

export interface AppStateValue {
  profile: UserProfile;
  updateProfile: (nextProfile: UserProfile) => void;
}

export const defaultProfile: UserProfile = {
  id: 'usr_01',
  name: 'Atleta',
  age: 28,
  heightCm: 180,
  weightKg: 75,
  goal: 'hypertrophy',
  experienceLevel: 'intermediate',
};

export const AppStateContext = createContext<AppStateValue | null>(null);

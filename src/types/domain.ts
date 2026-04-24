export type Weekday =
  | 'lunes'
  | 'martes'
  | 'miercoles'
  | 'jueves'
  | 'viernes'
  | 'sabado'
  | 'domingo';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  heightCm: number;
  weightKg: number;
  goal: 'hypertrophy' | 'fat_loss' | 'maintenance';
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  sets: number;
  reps: string;
  completed: boolean;
}

export interface Meal {
  id: string;
  title: string;
  items: string[];
  time: string;
  emoji: string;
  completed: boolean;
}

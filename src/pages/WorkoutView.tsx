import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataListCard from '../components/DataListCard';
import type { Exercise } from '../types/domain';

const WorkoutView = () => {
  const { dayId } = useParams();
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: 'ex_01', name: 'Press de Banca', sets: 4, reps: '10', muscle: 'Pecho', completed: false },
    { id: 'ex_02', name: 'Sentadillas con Barra', sets: 4, reps: '12', muscle: 'Pierna', completed: false },
    { id: 'ex_03', name: 'Press Militar', sets: 4, reps: '8', muscle: 'Hombro', completed: false },
    { id: 'ex_04', name: 'Elevaciones Laterales', sets: 3, reps: '15', muscle: 'Hombro', completed: false },
    { id: 'ex_05', name: 'Extensiones Tríceps', sets: 3, reps: '12', muscle: 'Tríceps', completed: false },
  ]);

  const toggleCompleted = (exerciseId: string) => {
    setExercises((prev) =>
      prev.map((exercise) => (exercise.id === exerciseId ? { ...exercise, completed: !exercise.completed } : exercise)),
    );
  };

  return (
    <div className="pb-24 min-h-screen bg-black w-full">
      <PageHeader title="RUTINA" accent={<span className="text-red-500">DAILY</span>} subtitle={dayId} />

      <DataListCard
        items={exercises}
        header={(exercise) => (
          <div className="flex items-center justify-center gap-6 text-center">
            <div>
              <p className="text-red-500 text-[8px] font-black uppercase tracking-[0.3em] mb-1">{exercise.muscle}</p>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{exercise.name}</h3>
            </div>
          </div>
        )}
        columns={[
          { label: 'Series', render: (exercise) => exercise.sets },
          { label: 'Reps', render: (exercise) => exercise.reps },
        ]}
        actions={(exercise) => (
          <button
            onClick={() => toggleCompleted(exercise.id)}
            className={`w-10 h-10 border flex items-center justify-center transition-all ${
              exercise.completed
                ? 'bg-red-500 text-black border-red-500'
                : 'border-zinc-800 hover:bg-red-500 hover:border-red-500 hover:text-black'
            }`}
          >
            ✓
          </button>
        )}
      />

      <div className="p-8 flex justify-center">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full max-w-2xl mad-orange text-black py-5 font-black uppercase tracking-[0.2em] text-lg shadow-[0_10px_30px_rgba(255,75,0,0.3)]"
        >
          COMPLETAR ENTRENAMIENTO
        </motion.button>
      </div>
    </div>
  );
};

export default WorkoutView;

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import DataListCard from '../components/DataListCard';
import { dailyData } from '../api/mockData';

const WorkoutView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (dailyData[dayId]) {
      setExercises(dailyData[dayId].workout.map(ex => ({ ...ex, completed: false })));
    }
  }, [dayId]);

  const toggleCompleted = (exerciseId) => {
    setExercises((prev) =>
      prev.map((exercise) => (exercise.id === exerciseId ? { ...exercise, completed: !exercise.completed } : exercise)),
    );
  };

  if (!dailyData[dayId]) return <div className="text-center p-20">Día no encontrado</div>;

  return (
    <div className="pb-24 min-h-screen bg-[#F8FAFC] w-full relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      <PageHeader 
        title="SESSION" 
        accent={<span style={{ color: '#3B82F6' }}>OPTIMIZED</span>} 
        subtitle={dayId.toUpperCase()} 
      />
      <div className="w-full flex justify-center px-4 md:px-8 mt-8">
        <div className="w-full max-w-4xl cyber-card p-6 md:p-10 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] text-blue-500 font-bold uppercase tracking-[0.2em]">
                <th className="pb-4 w-12">IMG</th>
                <th className="pb-4 pl-4">EXERCISE</th>
                <th className="pb-4 text-center">SETS</th>
                <th className="pb-4 text-center">REPS</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr key={exercise.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm relative">
                      {exercise.image ? (
                        <img src={exercise.image} alt={exercise.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-blue-500 font-bold text-xs">{exercise.muscle[0]}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 pl-4">
                    <p className="text-slate-900 font-black italic uppercase text-lg">{exercise.name}</p>
                    <p className="text-blue-500/50 font-bold uppercase tracking-[0.2em] text-[8px]">{exercise.muscle}</p>
                  </td>
                  <td className="py-4 text-center font-bold text-slate-600">{exercise.sets}</td>
                  <td className="py-4 text-center font-bold text-slate-600">{exercise.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-12 flex flex-col items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full max-w-2xl neon-button py-6 rounded-3xl"
        >
          FINALIZAR SESIÓN
        </motion.button>
        <button 
          onClick={() => navigate(-1)}
          className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-indigo-400 transition-colors"
        >
          ← Volver atrás
        </button>
      </div>
    </div>
  );
};

export default WorkoutView;

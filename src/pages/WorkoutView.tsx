import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkoutView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const exercises = [
    { name: "Press de Banca", sets: "4", reps: "10", muscle: "Pecho" },
    { name: "Aperturas con Mancuerna", sets: "3", reps: "12", muscle: "Pecho" },
    { name: "Press Militar", sets: "4", reps: "8", muscle: "Hombro" },
    { name: "Elevaciones Laterales", sets: "3", reps: "15", muscle: "Hombro" },
    { name: "Extensiones Tríceps", sets: "3", reps: "12", muscle: "Tríceps" }
  ];

  return (
    <div className="p-6 max-w-xl mx-auto pb-24 min-h-screen">
      <div className="flex flex-col items-center mb-12 space-y-2">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-fitness-red">RUTINA</h2>
        <p className="text-zinc-500 font-bold uppercase tracking-[0.3em]">{dayId}</p>
      </div>

      <div className="flex flex-col gap-6">
        {exercises.map((ex, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-3xl flex justify-between items-center shadow-xl hover:border-zinc-600 transition-colors group"
          >
            <div>
              <p className="text-fitness-red text-[10px] font-black uppercase tracking-[0.2em] mb-1">{ex.muscle}</p>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">{ex.name}</h3>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-zinc-500 tracking-tighter">Sets</span>
                <span className="text-2xl font-black italic text-white group-hover:text-fitness-red transition-colors">{ex.sets}</span>
              </div>
              <div className="h-8 w-[2px] bg-zinc-800" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-zinc-500 tracking-tighter">Reps</span>
                <span className="text-2xl font-black italic text-white group-hover:text-fitness-red transition-colors">{ex.reps}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        className="w-full mt-12 bg-fitness-red py-6 rounded-3xl font-black italic uppercase tracking-[0.2em] text-lg shadow-[0_20px_50px_rgba(255,0,0,0.4)]"
      >
        Entrenamiento Finalizado 💪
      </motion.button>

      <button 
        onClick={() => navigate(-1)}
        className="w-full mt-6 py-4 text-zinc-500 font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
      >
        ← Volver
      </button>
    </div>
  );
};

export default WorkoutView;

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkoutView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const exercises = [
    { name: "Press de Banca", sets: "4", reps: "10", muscle: "Pecho" },
    { name: "Sentadillas con Barra", sets: "4", reps: "12", muscle: "Pierna" },
    { name: "Press Militar", sets: "4", reps: "8", muscle: "Hombro" },
    { name: "Elevaciones Laterales", sets: "3", reps: "15", muscle: "Hombro" },
    { name: "Extensiones Tríceps", sets: "3", reps: "12", muscle: "Tríceps" }
  ];

  return (
    <div className="p-6 max-w-xl mx-auto pb-24 min-h-screen">
      <div className="flex flex-col items-center mb-12">
        <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{dayId}</p>
        <h2 className="text-5xl font-black italic uppercase tracking-tight text-white">Rutina</h2>
      </div>

      <div className="flex flex-col gap-4">
        {exercises.map((ex, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="premium-card p-6 flex justify-between items-center group"
          >
            <div>
              <p className="text-red-500 text-[8px] font-black uppercase tracking-[0.2em] mb-1">{ex.muscle}</p>
              <h3 className="text-xl font-black uppercase italic tracking-tight text-white transition-colors group-hover:text-red-500">{ex.name}</h3>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black uppercase text-slate-500 tracking-tighter">Sets</span>
                <span className="text-2xl font-black italic text-white">{ex.sets}</span>
              </div>
              <div className="h-6 w-[1px] bg-slate-800" />
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black uppercase text-slate-500 tracking-tighter">Reps</span>
                <span className="text-2xl font-black italic text-white">{ex.reps}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        className="w-full mt-12 bg-red-500 py-5 rounded-2xl font-black italic uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-colors"
      >
        Finalizar Entrenamiento
      </motion.button>

      <button 
        onClick={() => navigate(-1)}
        className="w-full mt-6 py-4 text-slate-500 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors"
      >
        ← Volver
      </button>
    </div>
  );
};

export default WorkoutView;

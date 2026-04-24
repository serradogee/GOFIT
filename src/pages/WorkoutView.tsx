import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkoutView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const exercises = [
    { name: "Press de Banca", sets: "4", reps: "10" },
    { name: "Aperturas con Mancuerna", sets: "3", reps: "12" },
    { name: "Press Militar", sets: "4", reps: "8" },
    { name: "Elevaciones Laterales", sets: "3", reps: "15" },
    { name: "Extensiones Tríceps", sets: "3", reps: "12" }
  ];

  return (
    <div className="p-6 max-w-lg mx-auto pb-24">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Rutina: {dayId}</h2>
        <button onClick={() => navigate(-1)} className="text-fitness-red font-bold uppercase text-xs tracking-widest">Volver</button>
      </div>

      <div className="flex flex-col gap-4">
        {exercises.map((ex, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 border-2 border-zinc-800 p-6 rounded-3xl flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-white mb-1">{ex.name}</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Pecho & Hombros</p>
            </div>
            <div className="flex gap-2">
              <div className="bg-fitness-red text-white font-black px-3 py-2 rounded-xl text-center">
                <span className="block text-[8px] uppercase tracking-tighter opacity-80">Sets</span>
                {ex.sets}
              </div>
              <div className="bg-white text-black font-black px-3 py-2 rounded-xl text-center">
                <span className="block text-[8px] uppercase tracking-tighter opacity-80">Reps</span>
                {ex.reps}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        className="w-full mt-10 bg-fitness-red py-5 rounded-2xl font-black italic uppercase tracking-widest shadow-[0_10px_30px_rgba(255,0,0,0.3)]"
      >
        Entrenamiento Finalizado
      </motion.button>
    </div>
  );
};

export default WorkoutView;

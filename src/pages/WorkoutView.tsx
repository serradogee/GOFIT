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
    <div className="pb-24 min-h-screen bg-black">
      <div className="p-8 bg-zinc-900 border-b border-zinc-800">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">RUTINA <span className="text-mad-orange">DAILY</span></h2>
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mt-2">{dayId}</p>
      </div>

      <div className="flex flex-col">
        {exercises.map((ex, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-8 border-b border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between group gap-4"
          >
            <div className="flex items-center gap-6">
              <span className="text-2xl font-black italic text-zinc-800 group-hover:text-mad-orange transition-colors">0{index + 1}</span>
              <div>
                <p className="text-mad-orange text-[8px] font-black uppercase tracking-[0.3em] mb-1">{ex.muscle}</p>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{ex.name}</h3>
              </div>
            </div>
            
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-zinc-600 tracking-tighter">Series</span>
                <span className="text-3xl font-black italic text-white">{ex.sets}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-zinc-600 tracking-tighter">Reps</span>
                <span className="text-3xl font-black italic text-white">{ex.reps}</span>
              </div>
              <button className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-mad-orange hover:border-mad-orange hover:text-black transition-all">
                ✓
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-8">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full mad-orange text-black py-5 font-black uppercase tracking-[0.2em] text-lg shadow-[0_10px_30px_rgba(255,75,0,0.3)]"
        >
          COMPLETAR ENTRENAMIENTO
        </motion.button>
      </div>
    </div>
  );
};

export default WorkoutView;

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DaySelection = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6 pt-10 h-[calc(100vh-100px)] flex flex-col gap-6 max-w-lg mx-auto">
      <h2 className="text-4xl font-black italic uppercase text-center mb-4 tracking-tighter">
        {dayId}
      </h2>

      <div className="grid grid-cols-2 gap-4 h-full max-h-[400px]">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/day/${dayId}/exercise`)}
          className="bg-zinc-900 border-2 border-zinc-800 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:border-fitness-red transition-all"
        >
          <span className="text-6xl">💪</span>
          <span className="text-2xl font-black uppercase italic tracking-tighter">Ejercicio</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/day/${dayId}/diet`)}
          className="bg-zinc-900 border-2 border-zinc-800 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:border-fitness-red transition-all"
        >
          <span className="text-6xl">🥗</span>
          <span className="text-2xl font-black uppercase italic tracking-tighter">Dieta</span>
        </motion.button>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="mt-auto py-4 text-gray-500 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
      >
        ← Volver
      </button>
    </div>
  );
};

export default DaySelection;

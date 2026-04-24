import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DaySelection = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6 h-[calc(100vh-140px)] flex flex-col items-center justify-center max-w-xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-6xl font-black italic uppercase text-center mb-16 tracking-tighter text-fitness-red"
      >
        {dayId}
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-8 w-full h-[60vh] max-h-[600px]">
        <motion.button
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(`/day/${dayId}/exercise`)}
          className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-[3rem] flex flex-col items-center justify-center gap-6 hover:border-fitness-red transition-all shadow-2xl relative group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
            <span className="text-[120px] font-black italic uppercase leading-none">GYM</span>
          </div>
          <span className="text-8xl filter drop-shadow-lg">💪</span>
          <span className="text-4xl font-black uppercase italic tracking-tighter">EJERCICIO</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(`/day/${dayId}/diet`)}
          className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-[3rem] flex flex-col items-center justify-center gap-6 hover:border-fitness-red transition-all shadow-2xl relative group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
            <span className="text-[120px] font-black italic uppercase leading-none">FOOD</span>
          </div>
          <span className="text-8xl filter drop-shadow-lg">🥗</span>
          <span className="text-4xl font-black uppercase italic tracking-tighter">DIETA</span>
        </motion.button>
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate('/')}
        className="mt-12 py-4 px-8 border-2 border-zinc-800 rounded-full text-zinc-500 font-black uppercase tracking-widest text-sm hover:text-white hover:border-white transition-all"
      >
        ← Seleccionar otro día
      </motion.button>
    </div>
  );
};

export default DaySelection;

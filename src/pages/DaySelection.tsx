import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DaySelection = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6 h-[calc(100vh-100px)] flex flex-col items-center justify-center max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16"
      >
        <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Selección de hoy</p>
        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white">
          {dayId}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-h-[500px]">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(`/day/${dayId}/exercise`)}
          className="premium-card p-12 flex flex-col items-center justify-center gap-6 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-8xl font-black italic select-none">GYM</div>
          <div className="w-24 h-24 bg-red-500/10 rounded-[2rem] flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shadow-lg border border-red-500/20">
            <span className="text-5xl">💪</span>
          </div>
          <span className="text-3xl font-black uppercase italic tracking-tight">Ejercicio</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(`/day/${dayId}/diet`)}
          className="premium-card p-12 flex flex-col items-center justify-center gap-6 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-8xl font-black italic select-none">FOOD</div>
          <div className="w-24 h-24 bg-red-500/10 rounded-[2rem] flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shadow-lg border border-red-500/20">
            <span className="text-5xl">🥗</span>
          </div>
          <span className="text-3xl font-black uppercase italic tracking-tight">Dieta</span>
        </motion.button>
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate('/')}
        className="mt-12 py-3 px-8 text-slate-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
      >
        ← Volver al calendario
      </motion.button>
    </div>
  );
};

export default DaySelection;

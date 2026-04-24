import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DaySelection = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col bg-black overflow-hidden">
      <div className="p-8 pt-12 border-b border-zinc-900 bg-zinc-900/50">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
          {dayId}
        </h2>
        <div className="h-1 w-20 mad-orange mt-4" />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-zinc-900">
        <motion.button
          whileHover={{ backgroundColor: '#FF4B00', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/day/${dayId}/exercise`)}
          className="flex-1 flex flex-col items-center justify-center p-12 transition-all group border-b sm:border-b-0 border-zinc-900"
        >
          <span className="text-8xl mb-4 grayscale group-hover:grayscale-0 transition-all">💪</span>
          <span className="text-4xl font-black uppercase tracking-tighter italic">ENTRENO</span>
          <p className="mt-2 text-zinc-600 group-hover:text-black font-black uppercase text-[10px] tracking-[0.3em]">Potencia & Fuerza</p>
        </motion.button>

        <motion.button
          whileHover={{ backgroundColor: '#FF4B00', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/day/${dayId}/diet`)}
          className="flex-1 flex flex-col items-center justify-center p-12 transition-all group"
        >
          <span className="text-8xl mb-4 grayscale group-hover:grayscale-0 transition-all">🥗</span>
          <span className="text-4xl font-black uppercase tracking-tighter italic">DIETA</span>
          <p className="mt-2 text-zinc-600 group-hover:text-black font-black uppercase text-[10px] tracking-[0.3em]">Carga de Energía</p>
        </motion.button>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="py-6 border-t border-zinc-900 bg-zinc-900 text-zinc-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors"
      >
        ← VOLVER AL CALENDARIO
      </button>
    </div>
  );
};

export default DaySelection;

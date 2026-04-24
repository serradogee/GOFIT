import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';

const DaySelection = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page-center p-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-10 w-full">
        <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Seleccion de hoy</p>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">{dayId}</h2>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">Elige un modulo</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <FeatureCard
            title="Ejercicio"
            icon="💪"
            watermark="GYM"
            onClick={() => navigate(`/day/${dayId}/exercise`)}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
          <FeatureCard
            title="Dieta"
            icon="🥗"
            watermark="FOOD"
            onClick={() => navigate(`/day/${dayId}/diet`)}
          />
        </motion.div>
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate('/')}
        className="mt-10 py-3 px-8 text-slate-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
      >
        ← Volver al calendario
      </motion.button>
    </div>
  );
};

export default DaySelection;

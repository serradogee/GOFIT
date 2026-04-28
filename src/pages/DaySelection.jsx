import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';

const DaySelection = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page-center bg-white relative overflow-hidden w-full flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 w-full flex flex-col items-center">
        <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.8em] mb-4">GLOBAL PERFORMANCE PROTOCOL</p>
        <h2 className="text-7xl font-black uppercase italic tracking-tighter text-slate-900">
          {dayId.toUpperCase()}
        </h2>
        <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">Optimizing Biological Systems</p>
      </motion.div>

      <div className="w-full flex justify-center gap-8 px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-[300px] h-[300px]">
          <FeatureCard
            title="Training"
            icon="💪"
            watermark="ELITE"
            onClick={() => navigate(`/day/${dayId}/exercise`)}
            className="cyber-card w-full h-full"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-[300px] h-[300px]">
          <FeatureCard
            title="Nutrition"
            icon="🥗"
            watermark="FUEL"
            onClick={() => navigate(`/day/${dayId}/diet`)}
            className="cyber-card w-full h-full"
          />
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate('/')}
        className="mt-24 py-8 px-20 text-slate-400 font-black uppercase tracking-[0.5em] text-[14px] hover:text-blue-500 transition-all border border-slate-100 hover:border-blue-200 rounded-[4rem] bg-slate-50"
      >
        ← Return to Main Calendar
      </motion.button>
    </div>
  );
};

export default DaySelection;

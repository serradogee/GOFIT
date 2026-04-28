import { motion } from 'framer-motion';

const FeatureCard = ({ title, icon, watermark, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="cyber-card p-12 flex flex-col items-center justify-center gap-6 group relative overflow-hidden w-full h-full"
    >
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-7xl font-black italic select-none text-slate-900">{watermark}</div>
      <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100 z-10">
        <span className="text-4xl">{icon}</span>
      </div>
      <span className="text-3xl font-black uppercase italic tracking-tight text-slate-900 group-hover:text-blue-500 transition-colors z-10">{title}</span>
    </motion.button>
  );
};

export default FeatureCard;

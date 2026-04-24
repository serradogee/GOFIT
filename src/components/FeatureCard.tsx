import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  watermark: string;
  onClick: () => void;
}

const FeatureCard = ({ title, icon, watermark, onClick }: FeatureCardProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="premium-card p-12 flex flex-col items-center justify-center gap-6 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-8xl font-black italic select-none">{watermark}</div>
      <div className="w-24 h-24 bg-red-500/10 rounded-[2rem] flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shadow-lg border border-red-500/20">
        <span className="text-5xl">{icon}</span>
      </div>
      <span className="text-3xl font-black uppercase italic tracking-tight">{title}</span>
    </motion.button>
  );
};

export default FeatureCard;

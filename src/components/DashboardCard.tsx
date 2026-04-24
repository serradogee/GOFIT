import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  subtitle: string;
  image: string;
  type: 'diet' | 'workout';
  items: string[];
}

const DashboardCard = ({ title, subtitle, image, type, items }: DashboardCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-6">
      {/* Card Header/Hero */}
      <div 
        className="relative h-64 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1 opacity-90">{type === 'diet' ? 'Nutrición' : 'Entrenamiento'}</p>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold leading-tight">{title}</h3>
              <p className="text-sm opacity-80">{subtitle}</p>
            </div>
            <motion.div 
              animate={{ rotate: isExpanded ? 90 : 0 }}
              className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30"
            >
              <ChevronRight size={20} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-gray-50/50">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                {type === 'diet' ? 'Menú del día' : 'Lista de ejercicios'}
              </h4>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${type === 'diet' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                    <button className="text-gray-300 hover:text-emerald-500 transition-colors">
                      <CheckCircle2 size={20} />
                    </button>
                  </motion.li>
                ))}
              </ul>
              <button 
                className={`w-full mt-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                  type === 'diet' 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                    : 'bg-black text-white shadow-lg shadow-gray-200'
                }`}
              >
                Marcar como completado
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardCard;

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DietView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const dietData = {
    desayuno: { title: "Desayuno", items: ["Tortilla de claras", "Avena con canela", "Café solo"], emoji: "🍳", time: "08:00" },
    comida: { title: "Comida", items: ["Pollo a la plancha", "Arroz integral", "Ensalada verde"], emoji: "🍗", time: "14:00" },
    cena: { title: "Cena", items: ["Salmón al horno", "Espárragos", "Yogur griego"], emoji: "🐟", time: "21:00" }
  };

  return (
    <div className="p-6 max-w-xl mx-auto pb-24 min-h-screen">
      <div className="flex flex-col items-center mb-12">
        <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{dayId}</p>
        <h2 className="text-5xl font-black italic uppercase tracking-tight text-white">Dieta</h2>
      </div>

      <div className="flex flex-col gap-6">
        {Object.entries(dietData).map(([key, section], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="premium-card p-8 group relative overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute -top-4 -right-4 text-7xl opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all rotate-12">
              {section.emoji}
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-2xl">
                    {section.emoji}
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight text-white">{section.title}</h3>
                </div>
                <span className="text-[10px] font-black text-slate-500 bg-slate-950 px-3 py-1 rounded-full uppercase tracking-widest">{section.time}</span>
              </div>
              
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="w-full mt-12 py-5 rounded-2xl font-black italic uppercase tracking-widest text-slate-500 border border-slate-800 hover:text-white hover:border-slate-700 transition-all"
      >
        Cerrar Plan
      </motion.button>
    </div>
  );
};

export default DietView;

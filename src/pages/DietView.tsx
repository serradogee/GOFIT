import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DietView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const dietData = {
    desayuno: { title: "Desayuno", items: ["Tortilla de claras", "Avena con canela", "Café solo"], emoji: "🍳", time: "08:00 AM" },
    comida: { title: "Comida", items: ["Pollo a la plancha", "Arroz integral", "Ensalada verde"], emoji: "🍗", time: "14:00 PM" },
    cena: { title: "Cena", items: ["Salmón al horno", "Espárragos", "Yogur griego"], emoji: "🐟", time: "21:00 PM" }
  };

  return (
    <div className="p-6 max-w-xl mx-auto pb-24 min-h-screen">
      <div className="flex flex-col items-center mb-12 space-y-2">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-fitness-red">DIETA</h2>
        <p className="text-zinc-500 font-bold uppercase tracking-[0.3em]">{dayId}</p>
      </div>

      <div className="flex flex-col gap-8">
        {Object.entries(dietData).map(([key, section], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
              {section.emoji}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter text-fitness-red">{section.title}</h3>
                <span className="text-xs font-black text-zinc-500 bg-black/50 px-3 py-1 rounded-full uppercase tracking-tighter">{section.time}</span>
              </div>
              
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-lg font-semibold">
                    <div className="w-2 h-2 bg-fitness-red rounded-full shadow-[0_0_10px_#ff0000]" />
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
        className="w-full mt-12 py-5 rounded-2xl font-black italic uppercase tracking-widest text-zinc-500 border-2 border-zinc-800 hover:text-white hover:border-white transition-all"
      >
        Cerrar Menú
      </motion.button>
    </div>
  );
};

export default DietView;

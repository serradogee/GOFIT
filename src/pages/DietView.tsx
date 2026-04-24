import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DietView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const dietData = [
    { title: "DESAYUNO", items: ["Tortilla de claras", "Avena con canela", "Café solo"], emoji: "🍳", time: "08:00" },
    { title: "COMIDA", items: ["Pollo a la plancha", "Arroz integral", "Ensalada verde"], emoji: "🍗", time: "14:00" },
    { title: "CENA", items: ["Salmón al horno", "Espárragos", "Yogur griego"], emoji: "🐟", time: "21:00" }
  ];

  return (
    <div className="pb-24 min-h-screen bg-black">
      <div className="p-8 bg-zinc-900 border-b border-zinc-800">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">PLAN NUTRICIÓN</h2>
        <p className="text-mad-orange text-xs font-black uppercase tracking-widest">{dayId}</p>
      </div>

      <div className="flex flex-col">
        {dietData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-zinc-900 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center text-4xl">
                {section.emoji}
              </div>
              <div>
                <span className="text-[10px] font-black text-mad-orange uppercase tracking-[0.3em] mb-1 block">{section.time} AM/PM</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{section.title}</h3>
              </div>
            </div>
            
            <ul className="flex flex-wrap gap-2 sm:justify-end max-w-sm">
              {section.items.map((item, i) => (
                <li key={i} className="bg-zinc-900 px-3 py-1 text-xs font-black uppercase tracking-tight text-zinc-400 border border-zinc-800">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="p-8">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="w-full mad-orange text-black py-4 font-black uppercase tracking-widest text-xs"
        >
          CERRAR PLAN
        </motion.button>
      </div>
    </div>
  );
};

export default DietView;

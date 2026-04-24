import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DietView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const dietData = {
    desayuno: { title: "Desayuno", items: ["Tortilla de claras", "Avena con canela", "Café solo"], emoji: "🍳" },
    comida: { title: "Comida", items: ["Pollo a la plancha", "Arroz integral", "Ensalada verde"], emoji: "🍗" },
    cena: { title: "Cena", items: ["Salmón al horno", "Espárragos", "Yogur griego"], emoji: "🐟" }
  };

  return (
    <div className="p-6 max-w-lg mx-auto pb-24">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Dieta: {dayId}</h2>
        <button onClick={() => navigate(-1)} className="text-fitness-red font-bold uppercase text-xs tracking-widest">Volver</button>
      </div>

      <div className="flex flex-col gap-6">
        {Object.entries(dietData).map(([key, section], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-[2.5rem] shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{section.emoji}</span>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-fitness-red">{section.title}</h3>
            </div>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <div className="w-1.5 h-1.5 bg-fitness-red rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DietView;

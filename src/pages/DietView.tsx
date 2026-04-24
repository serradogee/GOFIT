import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import type { Meal } from '../types/domain';

const DietView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const [dietData, setDietData] = useState<Meal[]>([
    { id: 'meal_01', title: 'DESAYUNO', items: ['Tortilla de claras', 'Avena con canela', 'Cafe solo'], emoji: '🍳', time: '08:00', completed: false },
    { id: 'meal_02', title: 'COMIDA', items: ['Pollo a la plancha', 'Arroz integral', 'Ensalada verde'], emoji: '🍗', time: '14:00', completed: false },
    { id: 'meal_03', title: 'CENA', items: ['Salmon al horno', 'Esparragos', 'Yogur griego'], emoji: '🐟', time: '21:00', completed: false },
  ]);

  const toggleMeal = (mealId: string) => {
    setDietData((prev) => prev.map((meal) => (meal.id === mealId ? { ...meal, completed: !meal.completed } : meal)));
  };

  return (
    <div className="pb-24 min-h-screen bg-black w-full">
      <PageHeader title="PLAN NUTRICION" subtitle={dayId} accent={<span className="text-red-500">DAILY</span>} />

      <div className="flex flex-col items-center">
        {dietData.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="w-full border-b border-zinc-900 p-8 flex flex-col items-center justify-center gap-6 text-center"
          >
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center text-4xl">
                {section.emoji}
              </div>
              <div>
                <span className="text-[10px] font-black text-mad-orange uppercase tracking-[0.3em] mb-1 block">{section.time} AM/PM</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{section.title}</h3>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <ul className="flex flex-wrap gap-2 justify-center max-w-sm">
              {section.items.map((item, i) => (
                <li key={i} className="bg-zinc-900 px-3 py-1 text-xs font-black uppercase tracking-tight text-zinc-400 border border-zinc-800">
                  {item}
                </li>
              ))}
              </ul>
              <button
                onClick={() => toggleMeal(section.id)}
                className={`w-10 h-10 border flex items-center justify-center transition-all ${
                  section.completed
                    ? 'bg-red-500 text-black border-red-500'
                    : 'border-zinc-800 hover:bg-red-500 hover:border-red-500 hover:text-black'
                }`}
              >
                ✓
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-8 flex justify-center">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="w-full max-w-2xl mad-orange text-black py-4 font-black uppercase tracking-widest text-xs"
        >
          CERRAR PLAN
        </motion.button>
      </div>
    </div>
  );
};

export default DietView;

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { dailyData } from '../api/mockData';

const DietView = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const [dietData, setDietData] = useState([]);

  useEffect(() => {
    if (dailyData[dayId]) {
      setDietData(dailyData[dayId].diet.map(meal => ({ ...meal, completed: false })));
    }
  }, [dayId]);

  const toggleMeal = (mealId) => {
    setDietData((prev) => prev.map((meal) => (meal.id === mealId ? { ...meal, completed: !meal.completed } : meal)));
  };

  if (!dailyData[dayId]) return <div className="text-center p-20">Día no encontrado</div>;

  return (
    <div className="pb-24 min-h-screen bg-[#F8FAFC] w-full relative">
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      <PageHeader 
        title="FUEL" 
        subtitle={dayId.toUpperCase()} 
        accent={<span style={{ color: '#3B82F6' }}>BIOLOGICAL</span>} 
      />

      <div className="w-full overflow-x-auto flex flex-col items-center py-10">
        <div className="flex px-10 gap-10 items-center justify-center">
          {dietData.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[350px] cyber-card p-12 flex flex-col items-center justify-center gap-10 text-center shadow-xl"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-3xl border border-blue-100 shadow-sm">
                  {section.emoji}
                </div>
                <div>
                  <span className="text-[16px] font-black text-blue-500/50 uppercase tracking-[0.6em] mb-6 block">
                    {section.time}
                  </span>
                  <h3 className="text-4xl font-black uppercase tracking-tighter text-slate-900 italic">
                    {section.title}
                  </h3>
                </div>
              </div>

              <ul className="flex flex-col gap-3 w-full">
                {section.items.map((item, i) => (
                  <li key={i} className="bg-slate-50 px-6 py-3 rounded-xl text-[12px] font-black uppercase tracking-tight text-slate-500 border border-slate-100">
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => toggleMeal(section.id)}
                className={`w-full py-6 rounded-[2rem] border flex items-center justify-center transition-all duration-500 gap-4 font-black uppercase tracking-[0.4em] text-[12px] ${
                  section.completed
                    ? 'bg-blue-500 text-white border-blue-500 shadow-xl'
                    : 'border-slate-100 bg-white hover:border-blue-300 text-slate-400'
                }`}
              >
                {section.completed ? '✓ OPTIMIZED' : 'EXECUTE PROTOCOL'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-12 flex flex-col items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="w-full max-w-2xl neon-button py-6 rounded-3xl"
        >
          CERRAR PLAN DIARIO
        </motion.button>
      </div>
    </div>
  );
};

export default DietView;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const days = [
    { name: 'Lunes', id: 'lunes' },
    { name: 'Martes', id: 'martes' },
    { name: 'Miércoles', id: 'miercoles' },
    { name: 'Jueves', id: 'jueves' },
    { name: 'Viernes', id: 'viernes' },
    { name: 'Sábado', id: 'sabado' },
    { name: 'Domingo', id: 'domingo' }
  ];

  const todayIndex = new Date().getDay();
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div className="flex flex-col p-6 pt-10 pb-24 max-w-4xl mx-auto min-h-screen">
      {/* Welcome Section */}
      <div className="text-center mb-12 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl font-black italic uppercase tracking-tight text-white"
        >
          GoFit
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 font-semibold uppercase tracking-widest text-xs"
        >
          Selecciona un día para empezar
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1 bg-red-500/10 border border-red-500/20 rounded-full"
        >
          <span className="text-red-500 text-[10px] font-black uppercase tracking-widest italic">
            Empieza hoy, no mañana 💪
          </span>
        </motion.div>
      </div>

      {/* Grid of Days */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {days.map((day, index) => {
          const isToday = index === adjustedToday;
          
          return (
            <motion.button
              key={day.id}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/day/${day.id}`)}
              className={`premium-card relative group p-10 text-left overflow-hidden ${
                isToday ? 'border-red-500/50 accent-glow bg-slate-900' : ''
              }`}
            >
              {/* Background index number */}
              <div className="absolute -bottom-4 -right-2 text-9xl font-black italic opacity-[0.03] select-none text-white transition-opacity group-hover:opacity-[0.06]">
                {index + 1}
              </div>

              <div className="relative z-10">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 block ${
                  isToday ? 'text-red-500' : 'text-slate-500'
                }`}>
                  {isToday ? 'Recomendado' : `Fase 0${index + 1}`}
                </span>
                
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black uppercase italic tracking-tight text-white">
                    {day.name}
                  </h3>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                    isToday ? 'bg-red-500 border-red-400 text-white shadow-lg' : 'bg-slate-800 border-slate-700 text-slate-400 group-hover:border-red-500 group-hover:text-red-500'
                  }`}>
                    <span className="text-lg font-black italic">→</span>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

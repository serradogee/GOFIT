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
    <div className="flex flex-col p-6 pt-12 pb-24 max-w-5xl mx-auto min-h-screen">
      {/* Welcome Title */}
      <div className="mb-16 text-center space-y-2">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black uppercase italic tracking-tighter text-white"
        >
          GOFIT
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]"
        >
          Selecciona tu día de entrenamiento
        </motion.p>
      </div>

      {/* Grid of Days (TaskFlow Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {days.map((day, index) => {
          const isToday = index === adjustedToday;
          
          return (
            <motion.button
              key={day.id}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/day/${day.id}`)}
              className={`premium-card p-10 text-left relative overflow-hidden group h-56 flex flex-col justify-between ${
                isToday ? 'border-red-500/50 bg-slate-900 accent-glow' : ''
              }`}
            >
              {/* Decorative background day number */}
              <div className="absolute -bottom-6 -right-2 text-[180px] font-black italic opacity-[0.03] select-none text-white transition-opacity group-hover:opacity-[0.08]">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${isToday ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : 'bg-slate-700'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isToday ? 'text-red-500' : 'text-slate-500'}`}>
                    {isToday ? 'Día de Hoy' : `Sesión 0${index + 1}`}
                  </span>
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tight text-white group-hover:text-red-500 transition-colors">
                  {day.name}
                </h3>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Detalles →
                </span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${
                  isToday ? 'bg-red-500 border-red-400 text-white shadow-xl' : 'bg-slate-800 border-slate-700 text-slate-500 group-hover:border-red-500 group-hover:text-red-500'
                }`}>
                  <span className="text-xl font-black">→</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Motivational Footer */}
      <footer className="mt-20 text-center py-10 border-t border-slate-900">
        <p className="text-slate-700 font-black uppercase tracking-[0.5em] text-[8px]">
          Empieza hoy, no mañana • GoFit Elite
        </p>
      </footer>
    </div>
  );
};

export default Home;

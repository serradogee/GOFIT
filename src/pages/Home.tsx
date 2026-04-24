import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const days = [
    { name: 'Lunes', id: 'lunes', short: 'LUN' },
    { name: 'Martes', id: 'martes', short: 'MAR' },
    { name: 'Miércoles', id: 'miercoles', short: 'MIE' },
    { name: 'Jueves', id: 'jueves', short: 'JUE' },
    { name: 'Viernes', id: 'viernes', short: 'VIE' },
    { name: 'Sábado', id: 'sabado', short: 'SAB' },
    { name: 'Domingo', id: 'domingo', short: 'DOM' }
  ];

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div className="flex flex-col p-6 pt-10 pb-24 max-w-4xl mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-12 space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full mb-4"
        >
          <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">Fitness Personal</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black italic uppercase tracking-tighter text-white logo-font"
        >
          GoFit
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-medium text-lg max-w-xs mx-auto leading-tight"
        >
          Selecciona un día para ver tu entrenamiento y dieta
        </motion.p>
      </div>

      {/* Grid of Days */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {days.map((day, index) => {
          const isToday = index === adjustedToday;
          
          return (
            <motion.button
              key={day.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/day/${day.id}`)}
              className={`relative aspect-square flex flex-col items-center justify-center p-6 rounded-[2.5rem] transition-all duration-500 group overflow-hidden ${
                isToday 
                  ? 'bg-gradient-to-br from-red-600 to-red-900 shadow-[0_15px_40px_rgba(220,38,38,0.4)] active-glow border-2 border-red-500/50' 
                  : 'bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 shadow-2xl hover:border-red-600/50'
              }`}
            >
              {/* Background Decoration */}
              <div className={`absolute -top-4 -right-4 text-[100px] font-black italic opacity-[0.03] select-none transition-all duration-700 group-hover:opacity-[0.08] group-hover:-translate-x-4 group-hover:translate-y-4 ${
                isToday ? 'text-white' : 'text-red-600'
              }`}>
                {day.short}
              </div>

              <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                isToday ? 'text-white/70' : 'text-zinc-500'
              }`}>
                {isToday ? 'Programado' : 'Semana'}
              </span>
              
              <span className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">
                {day.name}
              </span>

              {isToday ? (
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  <span className="text-[8px] font-black uppercase text-white tracking-widest">Hoy</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700 group-hover:bg-red-600 group-hover:border-red-500 transition-all">
                  <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">→</span>
                </div>
              )}
            </motion.button>
          );
        })}

        {/* Motivational Card / Filler */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="col-span-2 md:col-span-1 aspect-square bg-fitness-red/5 border-2 border-dashed border-red-600/20 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center"
        >
          <span className="text-3xl mb-3">🔥</span>
          <p className="text-xs font-black italic uppercase tracking-tighter text-red-500 opacity-80">
            Empieza hoy, no mañana
          </p>
        </motion.div>
      </div>

      <footer className="mt-20 text-center opacity-30 select-none">
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">GoFit Premium v1.0</p>
      </footer>
    </div>
  );
};

export default Home;

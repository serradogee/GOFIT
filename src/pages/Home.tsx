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

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div className="flex flex-col p-6 pt-12 pb-24 max-w-xl mx-auto min-h-screen">
      {/* Welcome Section */}
      <div className="text-center mb-16 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-black italic uppercase tracking-tighter text-fitness-red"
        >
          GoFit
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold uppercase tracking-[0.2em] text-white opacity-90"
        >
          Selecciona un día
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-medium italic text-lg"
        >
          "Empieza hoy, no mañana 💪"
        </motion.p>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {days.map((day, index) => (
          <motion.button
            key={day.id}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            onClick={() => navigate(`/day/${day.id}`)}
            className={`group relative overflow-hidden w-full py-10 px-10 rounded-[2.5rem] text-left transition-all border-2 flex items-center justify-between ${
              index === adjustedToday 
                ? 'bg-fitness-red border-fitness-red shadow-[0_15px_40px_rgba(255,0,0,0.4)] z-10' 
                : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 shadow-xl'
            }`}
          >
            {/* Background Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${
              index === adjustedToday ? 'bg-white' : 'bg-fitness-red'
            }`} />

            <div className="flex items-center gap-6">
              <span className="text-5xl opacity-20 font-black italic leading-none select-none">
                0{index + 1}
              </span>
              <span className="text-3xl font-black uppercase italic tracking-tighter">
                {day.name}
              </span>
            </div>

            {index === adjustedToday ? (
              <div className="bg-white text-black text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                Hoy
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center group-hover:border-fitness-red transition-colors">
                <span className="text-xl group-hover:text-fitness-red transition-colors">→</span>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Home;

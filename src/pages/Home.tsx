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
    <div className="min-h-screen flex flex-col justify-center items-center w-full max-w-5xl px-4 mx-auto">
      <div className="mb-10 text-center space-y-2 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black uppercase italic tracking-tighter text-white text-center"
        >
          GOFIT
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 font-semibold uppercase tracking-[0.22em] text-[11px]"
        >
          Selecciona tu día de entrenamiento
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center place-items-center w-full">
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
              className={`w-full max-w-[220px] h-44 rounded-2xl border text-center relative overflow-hidden mx-auto
                flex flex-col items-center justify-center gap-3
                transition-all duration-200
                bg-zinc-900/95 border-zinc-800
                hover:border-zinc-600 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                ${isToday ? 'border-red-500/70 bg-zinc-900 shadow-[0_0_0_1px_rgba(239,68,68,0.3)]' : ''}
              `}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-60" />
              {isToday ? (
                <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30 font-bold uppercase tracking-wide">
                  Hoy
                </span>
              ) : null}

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Sesión {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-white">
                {day.name}
              </h3>
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                isToday ? 'border-red-400 bg-red-500 text-white' : 'border-zinc-700 text-zinc-300'
              }`}
            >
                <span className="text-base">→</span>
              </div>
            </motion.button>
          );
        })}
      </div>

    </div>
  );
};

export default Home;

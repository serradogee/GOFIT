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
    { name: 'Domingo', id: 'domingo' },
  ];

  const todayIndex = new Date().getDay();
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div className="page-center relative w-full py-10 flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="mb-12 text-center space-y-4 z-10 w-full flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[6rem] md:text-[8rem] font-black uppercase italic tracking-tighter text-slate-900 text-center logo-font leading-none"
        >
          GO<span style={{ color: '#3B82F6' }}>FIT</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 font-black uppercase tracking-[0.5em] text-[12px]"
        >
          SELECT YOUR DAILY MISSION
        </motion.p>
      </div>

      <div className="w-full z-10 flex flex-col items-center px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full justify-items-center">
          {days.map((day, index) => {
            const isToday = index === adjustedToday;
            // For the 7th item, make it span 2 columns on small screens, or place it centered
            const colSpanClass = index === 6 ? "col-span-2 md:col-span-1" : "";

            return (
              <motion.button
                key={day.id}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                onClick={() => navigate(`/day/${day.id}`)}
                className={`w-full max-w-[200px] aspect-square rounded-3xl border text-center relative overflow-hidden
                flex flex-col items-center justify-center gap-4
                transition-all duration-300 group ${colSpanClass}
                ${isToday 
                  ? 'bg-white border-blue-500 shadow-xl' 
                  : 'bg-white border-slate-100 hover:border-blue-300 shadow-md shadow-slate-200/50'
                }
              `}
              >
                {isToday && (
                  <div className="absolute top-4 inset-x-0 flex justify-center">
                    <span className="text-[10px] px-4 py-1 rounded-full bg-blue-500 text-white font-bold uppercase tracking-[0.2em] shadow-sm">
                      TODAY
                    </span>
                  </div>
                )}

                <h3 className="text-4xl font-black uppercase italic tracking-tight text-slate-900 group-hover:text-blue-500 transition-colors mt-2">
                  {day.name.substring(0, 3)}
                </h3>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isToday ? 'text-blue-500' : 'text-slate-400'}`}>
                  {day.name}
                </span>
                
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

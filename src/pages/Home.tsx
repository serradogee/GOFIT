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
  // Adjust to our array (0-6, starting Monday)
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div className="flex flex-col gap-4 p-6 pt-2 pb-24 max-w-lg mx-auto">
      <div className="mb-6 text-center">
        <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Selecciona un día</p>
      </div>

      {days.map((day, index) => (
        <motion.button
          key={day.id}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => navigate(`/day/${day.id}`)}
          className={`w-full py-6 px-8 rounded-3xl text-left flex justify-between items-center transition-all border-2 ${
            index === adjustedToday 
              ? 'bg-fitness-red border-fitness-red shadow-[0_10px_30px_rgba(255,0,0,0.3)]' 
              : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <span className="text-2xl font-black uppercase italic tracking-tight italic">
            {day.name}
          </span>
          {index === adjustedToday && (
            <span className="bg-white text-black text-[10px] font-black px-2 py-1 rounded-full uppercase">
              Hoy
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default Home;

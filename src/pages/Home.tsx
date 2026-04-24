import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const days = [
    { name: 'Lunes', id: 'lunes', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' },
    { name: 'Martes', id: 'martes', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80' },
    { name: 'Miércoles', id: 'miercoles', img: 'https://images.unsplash.com/photo-1517136191732-c675c972844a?w=800&q=80' },
    { name: 'Jueves', id: 'jueves', img: 'https://images.unsplash.com/photo-1534367507873-d2b7e2495992?w=800&q=80' },
    { name: 'Viernes', id: 'viernes', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80' },
    { name: 'Sábado', id: 'sabado', img: 'https://images.unsplash.com/photo-1574673139737-c150153332b5?w=800&q=80' },
    { name: 'Domingo', id: 'domingo', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80' }
  ];

  const todayIndex = new Date().getDay();
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div className="flex flex-col pb-24 max-w-4xl mx-auto min-h-screen font-bold">
      {/* Welcome Section */}
      <div className="p-6 pt-10 mb-4 bg-zinc-900 border-b border-zinc-800">
        <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
          TU PLAN <span className="text-mad-orange">ELITE</span>
        </h1>
        <p className="text-zinc-500 text-xs uppercase tracking-widest font-black">
          "El dolor es temporal, el orgullo es para siempre"
        </p>
      </div>

      {/* List of Days (MadMuscles Card Style) */}
      <div className="flex flex-col gap-6 p-6">
        {days.map((day, index) => {
          const isToday = index === adjustedToday;
          
          return (
            <motion.button
              key={day.id}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/day/${day.id}`)}
              className={`mad-card flex flex-col group ${isToday ? 'border-mad-orange border-2' : ''}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={day.img} 
                  alt={day.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">
                    {day.name}
                  </h3>
                  {isToday && (
                    <span className="text-[10px] bg-mad-orange text-black px-2 py-0.5 font-black uppercase">
                      Hoy te toca
                    </span>
                  )}
                </div>
              </div>

              <div className="mad-button-bar">
                <span className="text-sm font-black text-black uppercase tracking-tighter">
                  Ver Entrenamiento & Dieta
                </span>
                <span className="text-xl font-black text-black">→</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

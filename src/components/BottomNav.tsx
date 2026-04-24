import { Home, Dumbbell, Utensils, User, PieChart } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
      <button className="flex flex-col items-center gap-1 text-black">
        <Home size={24} strokeWidth={2.5} />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Inicio</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors">
        <Dumbbell size={24} />
        <span className="text-[10px] uppercase tracking-tighter">Gym</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors">
        <Utensils size={24} />
        <span className="text-[10px] uppercase tracking-tighter">Dieta</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors">
        <PieChart size={24} />
        <span className="text-[10px] uppercase tracking-tighter">Progreso</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors">
        <User size={24} />
        <span className="text-[10px] uppercase tracking-tighter">Perfil</span>
      </button>
    </nav>
  );
};

export default BottomNav;

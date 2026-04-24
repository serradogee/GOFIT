import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="glass-header py-4 px-6 flex justify-between items-center">
      <div 
        onClick={() => navigate('/')}
        className="cursor-pointer"
      >
        <h1 className="logo-font text-3xl font-black text-red-500 uppercase tracking-tighter italic">
          GoFit
        </h1>
      </div>

      <nav className="flex items-center gap-6">
        <button 
          onClick={() => navigate('/')}
          className="text-xs font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors"
        >
          Días
        </button>
        <button 
          className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
        >
          Dieta
        </button>
        <button 
          className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
        >
          Ejercicios
        </button>
      </nav>

      <div className="hidden sm:flex w-8 h-8 rounded-full bg-slate-800 border border-slate-700 items-center justify-center">
        <span className="text-xs">👤</span>
      </div>
    </header>
  );
};

export default Header;

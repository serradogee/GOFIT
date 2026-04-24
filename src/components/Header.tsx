import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-black py-4 px-6 flex justify-between items-center border-b border-zinc-900 sticky top-0 z-50">
      <div 
        onClick={() => navigate('/')}
        className="mad-orange px-4 py-1 cursor-pointer"
      >
        <h1 className="logo-font text-2xl font-black text-black uppercase tracking-tighter">
          GoFit
        </h1>
      </div>
      <div className="w-8 h-8 rounded-full border-2 border-zinc-800 flex items-center justify-center">
        <span className="text-zinc-600 text-xs">👤</span>
      </div>
    </header>
  );
};

export default Header;

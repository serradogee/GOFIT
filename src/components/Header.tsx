import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="glass-header w-full py-4 px-6 flex items-center justify-center">
      <div 
        onClick={() => navigate('/')}
        className="cursor-pointer text-center mx-auto"
      >
        <h1 className="logo-font text-3xl font-black text-red-500 uppercase tracking-tighter italic">
          GOFIT
        </h1>
      </div>
    </header>
  );
};

export default Header;

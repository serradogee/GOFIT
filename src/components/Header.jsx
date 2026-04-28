import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="glass-header w-full py-4 px-6 flex items-center justify-center">
      <div
        onClick={() => navigate('/')}
        className="cursor-pointer text-center mx-auto"
      >
        <h1 
          className="logo-font text-4xl font-black uppercase tracking-tighter italic"
          style={{ color: '#3B82F6' }}
        >
          GOFIT
        </h1>
      </div>
    </header>
  );
};

export default Header;

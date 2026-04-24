import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-black py-6 px-6 flex justify-center items-center sticky top-0 z-50 shadow-[0_4px_30px_rgba(255,0,0,0.1)]">
      <h1 
        onClick={() => navigate('/')}
        className="logo-font text-4xl font-black text-fitness-red cursor-pointer tracking-tighter"
      >
        GoFit
      </h1>
    </header>
  );
};

export default Header;

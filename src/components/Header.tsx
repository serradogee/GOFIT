import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-black py-8 px-6 flex justify-center items-center sticky top-0 z-50 border-b border-zinc-900">
      <h1 
        onClick={() => navigate('/')}
        className="logo-font text-5xl font-black text-fitness-red cursor-pointer tracking-tighter uppercase italic"
      >
        GoFit
      </h1>
    </header>
  );
};

export default Header;

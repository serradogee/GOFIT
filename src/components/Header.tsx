import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="glass-header py-6 px-6 flex justify-center items-center">
      <h1 
        onClick={() => navigate('/')}
        className="logo-font text-4xl font-black text-red-500 cursor-pointer tracking-tight uppercase italic"
      >
        GoFit
      </h1>
    </header>
  );
};

export default Header;

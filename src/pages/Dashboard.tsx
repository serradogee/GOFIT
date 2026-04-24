import DashboardCard from '../components/DashboardCard';
import BottomNav from '../components/BottomNav';
import { Settings } from 'lucide-react';

const Dashboard = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateString = today.toLocaleDateString('es-ES', options);

  // Mock data for initial UI
  const dietItems = [
    "Desayuno: Tortilla de claras con avena",
    "Comida: Pechuga de pollo con arroz integral",
    "Merienda: Batido de proteínas con plátano",
    "Cena: Salmón a la plancha con espárragos"
  ];

  const workoutItems = [
    "Press de Banca (4 x 10)",
    "Sentadillas con Barra (3 x 12)",
    "Peso Muerto (3 x 8)",
    "Dominadas Asistidas (3 x Max)",
    "Plancha Abdominal (3 x 60s)"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-24">
      {/* Header */}
      <header className="bg-white px-6 py-5 flex justify-between items-center border-b border-gray-100 sticky top-0 z-40">
        <div>
          <h1 className="text-2xl font-black tracking-tighter text-black italic">GOFIT</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-0.5">
            {dateString}
          </p>
        </div>
        <button className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black transition-colors">
          <Settings size={20} />
        </button>
      </header>

      {/* Main Feed */}
      <main className="px-5 pt-6 max-w-lg mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-2">Hola, Campeón 👋</h2>
          <p className="text-gray-500 text-sm">Tu plan personalizado está listo para hoy.</p>
        </div>

        <DashboardCard 
          title="Fuerza & Potencia"
          subtitle="Día de Empuje (Push Day)"
          type="workout"
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          items={workoutItems}
        />

        <DashboardCard 
          title="Alta Proteína"
          subtitle="Día de carga controlada"
          type="diet"
          image="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop"
          items={dietItems}
        />

        {/* Motivational Section */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white mb-6">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Consejo del día</p>
          <h3 className="text-xl font-bold italic mb-3">"La disciplina es el puente entre tus metas y tus logros."</h3>
          <p className="text-sm opacity-90 leading-relaxed">No olvides beber al menos 2 litros de agua hoy para optimizar tu recuperación muscular.</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;

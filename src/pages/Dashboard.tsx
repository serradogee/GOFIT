import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Utensils, Dumbbell, CheckCircle2, ChevronRight } from 'lucide-react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import BottomNav from '../components/BottomNav';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'diet' | 'workout' | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const dietItems = [
    "Tortilla de claras con avena",
    "Pechuga de pollo con arroz integral",
    "Batido de proteínas con plátano",
    "Salmón a la plancha con espárragos"
  ];

  const workoutItems = [
    "Press de Banca (4 x 10)",
    "Sentadillas con Barra (3 x 12)",
    "Peso Muerto (3 x 8)",
    "Dominadas Asistidas (3 x Max)"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-24 px-6 pt-6 font-['Outfit']">
      {/* Header with Custom GOFIT Font */}
      <header className="flex flex-col items-center gap-6 mb-8">
        <div className="flex justify-between items-center w-full">
          <h1 className="logo-font text-3xl font-black text-black">GOFIT</h1>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
            <div className="w-6 h-6 bg-slate-200 rounded-full animate-pulse" />
          </button>
        </div>

        {/* Top Dropdown Menu */}
        <div className="relative w-full max-w-xs">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 flex justify-between items-center shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span className="font-bold text-gray-700">Explorar Planes</span>
            <ChevronDown size={20} className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
              >
                <button className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-50">
                  <Utensils size={18} className="text-emerald-500" />
                  <span className="font-medium text-gray-700">Dietas</span>
                </button>
                <button className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3">
                  <Dumbbell size={18} className="text-blue-500" />
                  <span className="font-medium text-gray-700">Ejercicios</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Weekly Calendar */}
      <WeeklyCalendar 
        selectedDate={selectedDate} 
        onDateSelect={(date) => {
          setSelectedDate(date);
          setActiveTab(null); // Reset selection on date change
        }} 
      />

      {/* Action Buttons: Appears when a day is selected */}
      <div className="space-y-4">
        {!activeTab ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <button 
              onClick={() => setActiveTab('diet')}
              className="bg-emerald-50 aspect-square rounded-[2.5rem] flex flex-col items-center justify-center gap-3 border-2 border-transparent hover:border-emerald-200 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                <Utensils size={28} />
              </div>
              <span className="font-black text-emerald-900 tracking-tight">DIETA</span>
            </button>
            <button 
              onClick={() => setActiveTab('workout')}
              className="bg-blue-50 aspect-square rounded-[2.5rem] flex flex-col items-center justify-center gap-3 border-2 border-transparent hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                <Dumbbell size={28} />
              </div>
              <span className="font-black text-blue-900 tracking-tight">GYM</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${activeTab === 'diet' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                  {activeTab === 'diet' ? <Utensils size={24} /> : <Dumbbell size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight uppercase">
                    {activeTab === 'diet' ? 'Tu Dieta' : 'Tu Rutina'}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Para hoy</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab(null)}
                className="text-xs font-bold text-gray-400 hover:text-black uppercase tracking-tighter"
              >
                Cambiar
              </button>
            </div>

            <ul className="space-y-4">
              {(activeTab === 'diet' ? dietItems : workoutItems).map((item, i) => (
                <li key={i} className="flex items-center justify-between group p-1">
                  <div className="flex items-center gap-4">
                    <div className={`w-1.5 h-6 rounded-full ${activeTab === 'diet' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                    <span className="text-gray-700 font-medium group-hover:text-black transition-colors">{item}</span>
                  </div>
                  <button className="text-gray-200 hover:text-emerald-500 transition-colors">
                    <CheckCircle2 size={24} />
                  </button>
                </li>
              ))}
            </ul>

            <button className={`w-full mt-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl transition-all active:scale-95 ${
              activeTab === 'diet' 
                ? 'bg-emerald-500 text-white shadow-emerald-100' 
                : 'bg-black text-white shadow-gray-200'
            }`}>
              Completar Día
            </button>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;

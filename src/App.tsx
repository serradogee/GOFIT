import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DaySelection from './pages/DaySelection';
import DietView from './pages/DietView';
import WorkoutView from './pages/WorkoutView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-['Inter'] selection:bg-fitness-red/30">
        <Header />
        <main className="pb-10 w-full flex justify-center">
          <div className="w-full max-w-5xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/day/:dayId" element={<DaySelection />} />
              <Route path="/day/:dayId/diet" element={<DietView />} />
              <Route path="/day/:dayId/exercise" element={<WorkoutView />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

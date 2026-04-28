import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DaySelection from './pages/DaySelection';
import DietView from './pages/DietView';
import WorkoutView from './pages/WorkoutView';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="w-full">
          <div className="app-container">
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

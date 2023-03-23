import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {default as Home} from './pages/LandingPage/Index';
import {default as Creatives} from './pages/Creatives/Index';
import Navbar from './components/Navbar';
import { default as FindMe } from './pages/FindMe/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/creatives/:page" element={<Creatives />} />
          <Route path="/findme" element={<FindMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

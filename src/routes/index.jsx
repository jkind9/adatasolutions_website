import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Expertise from '../pages/Expertise';
import About from '../pages/About';
import SpaceInvadersPage from '../pages/Game'; 
export default function AppRoutes() {
  return (
    <Routes>
      {/* “Root” route wraps all child routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />                {/* path="/" */}
        <Route path="expertise" element={<Expertise />} />{/* path="/expertise" */}
        <Route path="about" element={<About />} />{/* path="/expertise" */}
        <Route path="game" element={<SpaceInvadersPage />} />{/* path="/game" */}

      </Route>
    </Routes>
  );
}

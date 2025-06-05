import { BrowserRouter, useNavigate } from 'react-router-dom';
import AppRoutes from './routes';
import { useEffect } from 'react';

function AppWithHotkeyNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const keys = new Set();

    const handleKeyDown = (e) => {
      if (e.shiftKey) keys.add(e.key.toLowerCase());
      if (keys.has('a') && keys.has('s') && keys.has('d')) {
        navigate('/game');
        keys.clear();
      }
    };

    const clearKeys = () => keys.clear();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', clearKeys);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', clearKeys);
    };
  }, [navigate]);

  return <AppRoutes />;
}

function App() {
  return (
    <BrowserRouter>
      <AppWithHotkeyNavigation />
    </BrowserRouter>
  );
}

export default App;

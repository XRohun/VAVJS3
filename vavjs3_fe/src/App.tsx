import React, { useEffect } from 'react';
import './App.css';
import AuthorizationPage from './pages/AuthorizationPage';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import AdminPage from './pages/AdminPage';
import MeasurementsPage from './pages/MethodsPage';
import Advert from './components/Advert';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage user={user} setUser={setUser}/>} />
        <Route path="/auth" element={<AuthorizationPage setUser={setUser} user={user}/>} />
        <Route path="/measurements" element={<MeasurementsPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
      {location.pathname !== "/auth" && <Navigation user={user} setUser={setUser}/>}
      {location.pathname !== "/auth" && <Advert />}
    </div>
  );
}

export default App;

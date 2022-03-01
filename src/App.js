import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import Events from './pages/Events';
import Home from './pages/Home';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Auth redirectTo="/Signin">
          <Home />
        </Auth>
      } />
      <Route path="/profile" element={
        <Auth redirectTo="/Signin">
          <Profile />
        </Auth>
      }/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/events" element={
        <Auth redirectTo="/Signin">
          <Events />
        </Auth>

      } />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

function Auth({ children, redirectTo }) {
  const history = useLocation();
  localStorage.setItem('location', history.pathname);
  const auth = useSelector((state) => state.status.isauthorized);
  return auth ? children : <Navigate to={redirectTo} />
}

export default App;

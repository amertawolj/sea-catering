import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Subscription from './pages/subscription';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Pay from './components/Pay';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
